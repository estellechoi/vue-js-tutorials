<template>
  <div>
    <ul class="asks-list">
      <li v-for="(item, index) in fetchedAsks" :key="index" class="asks-post">
        <div class="asks-point">{{ item.points }}</div>
        <div>
          <p class="asks-title">
            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by {{ item.user }}
            <!-- change page for router-vue -->
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedAsks"])

    // ...mapGetters({
    // 	fetchedAsks: "fetchedAsks"
    // })

    // ...mapState({
    // 	asks: state => state.asks
    // })

    // ask() {
    // 	return this.$store.state;
    // }
  },
  created() {
    // dispatch actions from back-end API.
    this.$store.dispatch("FETCH_ASKS");
  }
};
</script>

<style scoped>
.asks-list {
  margin: 0;
  padding: 0;
}

.asks-post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
}

.asks-point {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: tomato;
}

.asks-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>
