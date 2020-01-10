<template>
  <div class="wrapper">
    <h1>Webpack</h1>
    <img src="img/alliance.png" alt="">
    <!--<img src="../assets/images/alliance.png" alt="">-->
    <h2>H2-header</h2>
    <h3>H3-header</h3>
  </div>
</template>

<script>
  export default {
    name: "Example",
  }
</script>

<style lang="scss">
  @import "../style/main";

  h2 {
    color: #5a51ff;
    font-size: 30px;
  }

  h3 {
    color: #ff4f57;
    font-size: 26px;
  }
</style>
