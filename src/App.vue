<template>
  <v-app :theme="theme">
    <v-main>
      <router-view @toggleTheme="toggleTheme" />
    </v-main>
  </v-app>
</template>

<script>
import { ref } from "vue";
const theme = ref("light");

export default {
  name: "App",
  data: () => ({}),
  methods: {
    toggleTheme: () => {
      theme.value = theme.value === "light" ? "dark" : "light";
    },
  },
  setup() {
    return {
      theme,
    };
  },
};
</script>
