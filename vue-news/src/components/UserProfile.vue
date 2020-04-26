<template>
  <div>
    <!-- 질문 정보 -->
    <section>
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/users/${userData.id}`">{{ userData.id }}</router-link>
          <div class="time">{{ userData.created }}</div>
        </div>
      </div>
      <!-- <h3>{{ userData.karma }}</h3>
      <div v-html="userData.content"></div>-->
    </section>
    <!-- 답글 -->
    <section></section>
  </div>
</template>

<script>
export default {
  props: {
    userData: Object
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
