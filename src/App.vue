<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  obj: {
    name: '12',
    oage: 12
  }
};
</script>

<style>
#app {
  font-family: "PingFang SC", "苹方简" "Helvetica Neue", Helvetica,
    "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
