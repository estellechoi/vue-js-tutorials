<template>
  <!-- The template root requires exactly one element. -->
  <div>
    {{ str }}
  </div>
</template>

<script>
export default {
  /*
  new Vue({
    data: {
      str: 'hi'
    }
  });
  */

  // data property should be a function returning an obeject.
  // so that components cannot refer to data of other components. (?)
  data: function() {
    return {
      str: 'hi'
    }
  }
}
</script>

<style>

</style>