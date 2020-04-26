<template>
  <div>
    <!-- :userData="userInfo" -->
    <user-profile :userData="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <template slot="time">{{ userInfo.created }}</template>
      <div slot="karma">{{ userInfo.karma }}</div>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
// import { mapGetters } from "vuex";

// getters
export default {
  components: {
    UserProfile
  },
  computed: {
    // ...mapGetters(["fetchedUser"])
    userInfo() {
      return this.$store.state.userInfo;
    }
  },
  created() {
    const userId = this.$route.params.id;
    this.$store.dispatch("FETCH_USERINFO", userId); // payload (kind of parameter map)
  }
};
</script>

<style></style>
