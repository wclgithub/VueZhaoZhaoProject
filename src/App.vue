<template>
  <div id="app">
    <nav-main></nav-main>
    <router-view/>
    <div-footer></div-footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function () {
    return{
      my_token:true
    }
  },
  methods:{

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
