<template>
  <Navbar @toggleTheme="this.$emit('toggleTheme')" />
  <RegisterDialog />
</template>

<script>
import Navbar from "@/components/Navbar";
import RegisterDialog from "@/components/RegisterDialog";

export default {
  name: "Home",
  components: { Navbar, RegisterDialog },
  emits: ["toggleTheme"],
};
</script>

<style lang="scss"></style>
