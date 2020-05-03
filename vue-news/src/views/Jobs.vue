<template>
  <div>
    <item-list></item-list>
  </div>
</template>

<script>
import ItemList from "../components/ItemList.vue";
import bus from "../utils/bus.js";

export default {
  components: {
    ItemList
  },
  created() {
    bus.$emit("start:spinner");
    this.$store
      .dispatch("FETCH_JOBS")
      .then(() => {
        console.log("fetched");
        bus.$emit("end:spinner");
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
