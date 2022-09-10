<template>
  <Navbar @toggleTheme="this.$emit('toggleTheme')" />
  <TodoList />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  name: "Todos",
  components: { Navbar, TodoList },
  emits: ["toggleTheme"],
};
</script>
