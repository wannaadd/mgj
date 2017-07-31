<template>
  <div id="app">
    <router-view></router-view>
    <foot-com></foot-com>
  </div>
</template>

<script>

import footCom from './components/footer'

export default {
  name: 'app',
  components: {
    footCom
  }
}
</script>

<style>
  #app{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>

<style>
  @import '../static/reset.css'
</style>
