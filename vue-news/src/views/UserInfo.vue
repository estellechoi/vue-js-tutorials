<template>
  <div>
    <p>Name : {{ fetchedUser.id }}</p>
    <p>Karma : {{ fetchedUser.karma }}</p>
    <p>Created : {{ fetchedUser.created }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

// getters
export default {
  computed: {
    ...mapGetters(["fetchedUser"])
  },
  created() {
    const userId = this.$route.params.id;
    this.$store.dispatch("FETCH_USERINFO", userId); // payload (kind of parameter map)
  }
};
</script>

<style></style>
