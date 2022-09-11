<template>
  <v-layout>
    <v-app-bar density="compact" absolute>
      <v-app-bar-title>TodoApp</v-app-bar-title>

      <v-btn to="/todos">Todos</v-btn>

      <v-spacer></v-spacer>

      <v-dialog v-model="registerDialog" persistent>
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props"> Register </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Register User</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Email*"
                    v-model="registerEmail"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Password*"
                    type="password"
                    v-model="registerPassword"
                    required
                  ></v-text-field> </v-col
                ><v-col cols="12">
                  <v-text-field
                    label="Confirm Password*"
                    type="password"
                    v-model="registerConfirmPassword"
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
            v-if="registerError"
            v-bind:text="registerErrorText"
          >
          </v-alert>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="registerDialog = false">
              Close
            </v-btn>
            <v-btn color="success" text @click="validateRegisterForm">
              Register
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-divider inset vertical></v-divider>

      <v-btn
        @click="this.$emit('toggleTheme')"
        class="mr-3 ml-3"
        variant="outlined"
        plain
        ><v-icon left icon="mdi-theme-light-dark"></v-icon
        ><span>Toggle dark mode</span></v-btn
      >

      <v-divider inset vertical></v-divider>

      <v-btn
        class="mr-5 ml-3"
        color="primary"
        variant="outlined"
        href="https://github.com/biankazieba"
        plain
      >
        <v-icon left icon="mdi-github"></v-icon>

        <span>Bianka Zieba</span>
      </v-btn>
    </v-app-bar>
    <v-main> </v-main>
  </v-layout>
</template>
<script>
export default {
  name: "Navbar",
  data: () => ({
    registerDialog: false,
    registerEmail: "",
    registerPassword: "",
    registerConfirmPassword: "",
    registerError: false,
    registerErrorText: "",
  }),
  methods: {
    validateEmail: function (email) {
      var re =
        // eslint-disable-next-line no-useless-escape
        /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
      return re.test(email);
    },
    validateRegisterForm: function () {
      if (
        this.registerEmail.trim() !== "" &&
        this.registerPassword.trim() !== "" &&
        this.registerConfirmPassword.trim() !== "" &&
        this.validateEmail(this.registerEmail) &&
        this.registerPassword === this.registerConfirmPassword
      ) {
        return console.log("success");
      }
      this.registerErrorText = "E-Mail or Password wrong!";
      return (this.registerError = true);
    },
  },
  emits: ["toggleTheme"],
};
</script>
