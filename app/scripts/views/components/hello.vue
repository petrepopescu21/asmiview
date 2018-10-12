<template>
<ui-grid class="demo-grid max-width">
  <ui-grid-cell class="demo-cell" colspan="4">{{msg}}</ui-grid-cell>
  <ui-grid-cell class="demo-cell" colspan="4">{{msg}}</ui-grid-cell>
  <ui-grid-cell class="demo-cell" colspan="4">{{msg}}</ui-grid-cell>
</ui-grid>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Hello Vue App'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  /* font-weight: normal; */
}

a {
  color: #42b983;
}
</style>
