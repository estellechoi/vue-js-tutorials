<template>
  <div>
    <item-list></item-list>
  </div>
</template>

<script>
// high order component
import ItemList from "../components/ItemList.vue";

// import ListMixin from "../mixins/ListMixin.js";

export default {
  components: {
    ItemList
  }
  // mixins: [ListMixin]
};
</script>

<style>
</style>