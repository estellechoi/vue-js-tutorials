<template>
  <div>
    <ul class="news-list">
      <li v-for="(item, index) in this.$store.state.news" :key="index" class="news-post">
        <div class="news-point">{{ item.points }}</div>
        <div>
          <p class="news-title">
            <!-- move to new url -->
            <a :href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <!-- change page for router-vue -->
            <router-link :to="`/users/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS");
  }
  // beforeMount() {}
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.news-post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
}

.news-point {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: tomato;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>
