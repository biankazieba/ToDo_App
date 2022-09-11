<template>
  <v-layout>
    <v-app-bar density="compact" absolute>
      <v-app-bar-title>TodoApp</v-app-bar-title>

      <v-btn to="/todos">Todos</v-btn>

      <v-spacer></v-spacer>

      <v-btn variant="contained-text" class="mr-1 ml-1" @click="openLoginDialog"
        >Login</v-btn
      >

      <v-btn
        variant="contained-text"
        class="mr-3 ml-1"
        @click="openRegisterDialog"
        >Register</v-btn
      >

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
  data: () => ({}),
  methods: {
    openRegisterDialog: function () {},
    openLoginDialog: function () {},
  },
  emits: ["toggleTheme"],
};
</script>
