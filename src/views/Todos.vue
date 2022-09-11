<template>
  <Navbar @toggleTheme="this.$emit('toggleTheme')" />
  <TodoList @editTodoDialog="editTaskEmit" />
  <v-dialog v-model="editDialog" persistent>
    <v-card>
      <v-card-title>
        <span class="text-h5">Edit Todo</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Description*"
                v-model="editDescription"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-alert
        density="compact"
        variant="outlined"
        type="error"
        class="ma-2"
        v-if="editError"
        v-bind:text="editErrorText"
      >
      </v-alert>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="editDialog = false"> Close </v-btn>
        <v-btn color="success" text @click="editTask"> Add Todo </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import TodoList from "@/components/TodoList.vue";

import { v4 as uuidv4 } from "uuid";

export default {
  name: "Todos",
  components: { Navbar, TodoList },
  emits: ["toggleTheme"],
  data() {
    return {
      editDialog: false,
      editDescription: "",
      editID: undefined,
      editError: false,
      editErrorText: "",
    };
  },
  methods: {
    editTask: function () {
      fetch(process.env.VUE_APP_API_URL + "/tasks/" + this.editID, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + this.$store.state.token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          owner: uuidv4(),
          description: this.editDescription,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.code !== 201) {
            this.editErrorText = "Oops! Something went wrong.";
            return (this.editError = true);
          }
          this.editDialog = false;
          window.location.reload();
        })
        .catch((error) => console.error(error));
    },
    editTaskEmit: function (id) {
      this.editDialog = true;
      this.editID = id;
    },
  },
};
</script>
