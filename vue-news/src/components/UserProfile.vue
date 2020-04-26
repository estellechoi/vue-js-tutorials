<template>
  <div>
    <!-- 질문 정보 -->
    <section>
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/users/${userInfo.id}`">{{ userInfo.id }}</router-link>
          <div class="time">{{ userInfo.created }}</div>
        </div>
      </div>
      <!-- <h3>{{ userInfo.karma }}</h3>
      <div v-html="userInfo.content"></div>-->
    </section>
    <!-- 답글 -->
    <section></section>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
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
