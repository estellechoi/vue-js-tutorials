<template>
  <div>
    <user-profile :userData="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{ 'Joined ' + userInfo.created }}</span>
      <span slot="karma">{{ userInfo.karma }}</span>
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
