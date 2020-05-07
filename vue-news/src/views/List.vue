<template>
  <div>
    <item-list></item-list>
  </div>
</template>

<script>
// high order component
import ItemList from "../components/ItemList.vue";
export default {
  components: {
    ItemList
  }
};
</script>

<style>
</style>