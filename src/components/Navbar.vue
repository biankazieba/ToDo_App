<template>
  <v-layout>
    <v-app-bar density="compact" absolute>
      <v-app-bar-title>TodoApp</v-app-bar-title>

      <v-btn to="/todos">Todos</v-btn>

      <v-spacer></v-spacer>

      <v-divider inset vertical></v-divider>

      <v-btn
        class="mr-4 ml-5"
        color="primary"
        variant="outlined"
        href="https://github.com/biankazieba"
        plain
      >
        <v-icon left icon="mdi-github"></v-icon>

        <span>Bianka Zieba</span>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-card height="50px"></v-card>
    </v-main>
  </v-layout>
</template>
<script>
export default {
  name: "Navbar",
  data: () => ({}),
};
</script>
