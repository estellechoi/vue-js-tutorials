<template>
  <div>
    <!-- 질문 정보 -->
    <section>
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/users/${fetchedAsk.user}`">{{ fetchedAsk.user }}</router-link>
          <div class="time">{{ fetchedAsk.time_ago }}</div>
        </div>
      </div>
      <h3>{{ fetchedAsk.title }}</h3>
      <div v-html="fetchedAsk.content"></div>
    </section>
    <!-- 답글 -->
    <section></section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
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
