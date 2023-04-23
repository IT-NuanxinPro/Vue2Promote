<template>
  <div class="container">
    <h1>Home</h1>
    <p>{{ obj.name }}</p>
    <p>{{ obj.age }}</p>
    <div class="box">
      <div class="left">
        <p>暖心</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data() {
    return {
      obj: {
        name: '张三',
        age: 181
      }
    };
  }
};
</script>

<style scoped lang="scss">
.container {
  h1 {
    color: $color;
  }

  p {
    color: $main;
  }
}
</style>
