<template>
  <Navbar @toggleTheme="this.$emit('toggleTheme')" />
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "Home",
  components: { Navbar },
  emits: ["toggleTheme"],
};
</script>

<style lang="scss"></style>
