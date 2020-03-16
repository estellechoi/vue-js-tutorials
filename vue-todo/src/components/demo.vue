<template>
  <div id="root">
    <p>{{ originalPrice }}</p>
    <p>{{ doublePrice }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["originalPrice", "doublePrice"])
  }
};
</script>

<style>
</style>