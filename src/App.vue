<template>
  <div id="app" v-horizontal-screen>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
#app{
  width: 100%;
  height: calc(100vh);
}
@import "./assets/font/font.css";
</style>
