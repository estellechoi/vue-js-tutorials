<template>
  <div>
    <ul class="list">
      <li v-for="(item, index) in fetchedList" :key="index" class="post">
        <!-- if null, 0 -->
        <div class="points">{{ item.points || 0 }}</div>
        <div>
          <p class="title">
            <!-- template : 가상 태그 -->
            <template v-if="item.domain">
              <a :href="item.url">{{ item.title }}</a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link
              v-if="item.user"
              :to="`/users/${item.user}`"
              class="link-text"
            >{{ item.user }}</router-link>
            <a v-else :href="item.url" class="link-text">{{ item.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  computed: {
    fetchedList() {
      const name = this.$route.name;
      if (name === "ask") {
        return this.$store.state.asks;
      } else if (name === "news") {
        return this.$store.state.news;
      } else if (name === "jobs") {
        return this.$store.state.jobs;
      } else {
        return [];
      }
    }
  },
  created() {
    // console.log(this.$route);
    // /router/index.js 에서 name 정의
    // const name = this.$route.name;
    // let actionName = "";
    // if (name === "ask") {
    //   actionName = "FETCH_ASKS";
    // } else if (name === "news") {
    //   actionName = "FETCH_NEWS";
    // } else if (name === "jobs") {
    //   actionName = "FETCH_JOBS";
    // }
    // if (name) {
    //   this.$store.dispatch(actionName);
    // }
  }
};
</script>

<style scoped>
.list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: tomato;
}

.title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>
