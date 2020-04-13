<template>
  <div>
    <ul class="jobs-list">
      <li v-for="(item, index) in this.$store.state.jobs" :key="index" class="jobs-post">
        <div class="jobs-point">{{ item.points }}</div>
        <div>
          <p class="jobs-title">
            <a :href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-text">{{ item.time_ago }}, {{ item.domain }}</small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_JOBS");
  }
};
</script>

<style scoped >
.jobs-list {
  margin: 0;
  padding: 0;
}

.jobs-post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
}

.jobs-point {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: tomato;
}

.jobs-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>

