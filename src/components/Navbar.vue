<template>
  <v-layout>
    <v-app-bar density="compact" absolute>
      <v-app-bar-title>TodoApp</v-app-bar-title>

      <v-btn to="/">Todos</v-btn>

      <v-dialog v-model="addDialog" persistent>
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props" class="mr-3 ml-3"> Add </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Add Todo</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Description*"
                    v-model="addDescription"
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
            v-if="addError"
            v-bind:text="addErrorText"
          >
          </v-alert>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="addDialog = false"> Close </v-btn>
            <v-btn color="success" text @click="validateAddForm">
              Add Todo
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-spacer></v-spacer>

      <v-dialog v-model="registerDialog" persistent>
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-if="!$store.state.token"
            v-bind="props"
            class="mr-3 ml-3"
          >
            Register
          </v-btn>
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
      <v-dialog v-model="loginDialog" persistent>
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-if="!$store.state.token"
            v-bind="props"
            class="mr-3 ml-3"
          >
            Login
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Login User</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Email*"
                    v-model="loginEmail"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Password*"
                    type="password"
                    v-model="loginPassword"
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
            v-if="loginError"
            v-bind:text="loginErrorText"
          >
          </v-alert>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="loginDialog = false">
              Close
            </v-btn>
            <v-btn color="success" text @click="validateLoginForm">
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-btn
        @click="logOut"
        v-if="$store.state.token"
        class="mr-3 ml-3"
        color="error"
        plain
        >Log out</v-btn
      >
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
import { v4 as uuidv4 } from "uuid";
export default {
  name: "Navbar",
  data: () => ({
    registerDialog: false,
    registerEmail: "",
    registerPassword: "",
    registerConfirmPassword: "",
    registerError: false,
    registerErrorText: "",
    loginDialog: false,
    loginEmail: "",
    loginPassword: "",
    loginError: false,
    loginErrorText: "",
    addDialog: false,
    addDescription: "",
    addError: "",
    addErrorText: "",
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
        !(
          this.registerEmail.trim() !== "" &&
          this.registerPassword.trim() !== "" &&
          this.registerConfirmPassword.trim() !== "" &&
          this.validateEmail(this.registerEmail) &&
          this.registerPassword === this.registerConfirmPassword
        )
      ) {
        this.registerErrorText = "E-Mail or Password wrong!";
        return (this.registerError = true);
      }
      if (this.registerPassword.length < 6) {
        this.registerErrorText = "Passwort must be at least 6 characters long!";
        return (this.registerError = true);
      }
      fetch(process.env.VUE_APP_API_URL + "/register", {
        method: "POST",
        body: JSON.stringify({
          email: this.registerEmail,
          password: this.registerPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.code === 200) {
            fetch(process.env.VUE_APP_API_URL + "/authenticate", {
              method: "POST",
              body: JSON.stringify({
                email: this.registerEmail,
                password: this.registerPassword,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((response) => {
                console.log(response);
                if (response.code === 200) {
                  this.$store.commit("changeToken", response.data.token);
                  this.registerDialog = false;
                  window.location.reload();
                } else {
                  this.registerErrorText = "Oops! Something went wrong.";
                  this.registerError = true;
                }
              })
              .catch((error) => console.error(error));
          } else {
            this.registerErrorText = "Oops! Something went wrong.";
            this.registerError = true;
          }
        })
        .catch((error) => console.error(error));
    },
    validateLoginForm: function () {
      if (
        !(
          this.loginEmail.trim() !== "" &&
          this.loginPassword.trim() !== "" &&
          this.validateEmail(this.loginEmail)
        )
      ) {
        this.loginErrorText = "E-Mail or Password wrong!";
        return (this.loginError = true);
      }
      fetch(process.env.VUE_APP_API_URL + "/authenticate", {
        method: "POST",
        body: JSON.stringify({
          email: this.loginEmail,
          password: this.loginPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.code === 200) {
            this.$store.commit("changeToken", response.data.token);
            this.loginDialog = false;
            window.location.reload();
          } else {
            this.loginErrorText = "Oops! Something went wrong.";
            this.loginError = true;
          }
        })
        .catch((error) => console.error(error));
    },
    validateAddForm: function () {
      if (this.addDescription.trim() === "") {
        this.addErrorText = "Please enter a description!";
        return (this.addError = true);
      }
      let todo = JSON.stringify({
        owner: uuidv4(),
        description: this.addDescription,
      });
      fetch(process.env.VUE_APP_API_URL + "/tasks", {
        method: "POST",
        body: todo,
        headers: {
          Authorization: "Bearer " + this.$store.state.token,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.code !== 201) {
            this.addErrorText = "Oops! Something went wrong.";
            return (this.addError = true);
          }
          window.location.reload();
        })
        .catch((error) => console.error(error));
    },
    logOut: function () {
      this.$store.commit("changeToken", "");
      window.location.reload();
    },
  },
  emits: ["toggleTheme"],
};
</script>
