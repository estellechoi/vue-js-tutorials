<template>
  <div>
    <!-- 질문 정보 -->
    <section>
      <user-profile :userData="fetchedAsk">
        <router-link slot="username" :to="`/users/${fetchedAsk.user}`">{{ fetchedAsk.user }}</router-link>
        <template slot="time">{{ 'Posted ' + fetchedAsk.time_ago }}</template>
      </user-profile>

      <h3>{{ fetchedAsk.title }}</h3>
      <div v-html="fetchedAsk.content"></div>
    </section>
    <!-- 답글 -->
    <section></section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters(["fetchedAsk"])
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("FETCH_ASK", id);
  }
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>
