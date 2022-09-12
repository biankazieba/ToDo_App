<template>
  <v-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Description</th>
          <th class="text-left">Updated at</th>
          <th class="text-left">Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.description }}</td>
          <td>{{ todo.updated.slice(0, todo.updated.length - 14) }}</td>
          <td>
            <v-btn
              color="primary"
              class="mr-1"
              @click="this.$emit('editTodoDialog', todo.id)"
              >Edit</v-btn
            >
            <v-btn @click="deleteTask(todo.id)" color="error" class="ml-1 mr-1"
              >Delete</v-btn
            >
          </td>
        </tr>
      </tbody>
    </template>
  </v-table>
</template>
<script>
export default {
  name: "TodoList",
  data() {
    return {
      todos: [],
    };
  },
  emits: ["editTodoDialog"],
  mounted() {
    fetch(process.env.VUE_APP_API_URL + "/tasks", {
      headers: {
        Authorization: "Bearer " + this.$store.state.token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => (this.todos = response.data))
      .catch((error) => console.error(error));
  },
  methods: {
    onRemove: function (index) {
      this.todos = [
        ...this.todos.slice(0, index),
        ...this.todos.slice(index + 1),
      ];
    },
    deleteTask: function (id) {
      fetch(process.env.VUE_APP_API_URL + "/tasks/" + id, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + this.$store.state.token,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.code === 201) {
            for (let i = 0; i < this.todos.length; i++) {
              const todo = this.todos[i];
              console.log(todo);
              if (todo.id == id) {
                this.onRemove(i);
                break;
              }
            }
          }
          console.log(response);
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>
