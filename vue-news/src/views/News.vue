<template>
  <div>
    <item-list></item-list>
  </div>
</template>

<script>
import ItemList from "../components/ItemList.vue";

export default {
  components: {
    ItemList
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  }
};
</script>
