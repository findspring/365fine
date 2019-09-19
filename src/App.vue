<template>
  <div id="app">
     <keep-alive>
      <router-view v-if="$route.meta.keepAlive" transition="fade" transition-mode="out-in"></router-view> 
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" transition="fade" transition-mode="out-in"></router-view>  
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{   
  background: #f5f5f5;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
