<template>
  <v-app :theme="$store.state.theme">
    <v-main>
      <router-view @toggleTheme="toggleTheme" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
  setup() {},
  methods: {
    toggleTheme: function () {
      this.$store.commit(
        "change",
        this.$store.state.theme === "light" ? "dark" : "light"
      );
    },
  },
};
</script>
