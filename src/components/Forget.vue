<template>
  <h1>i am forget</h1>
</template>

<script>
export default {
  name: 'NavMain',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .my-nav-img img{
    height: 65px;

  }
  .my-nav{
    height: 65px;
    line-height: 40px;
  }
  .my-nav a{
    color: white;
  }

  .my-every-btn button{
    color: white;
    width: 80px;
    height: 80px;
    border: solid 0px black;
    border-radius: 50%;
    box-shadow: #7b8099 2px 2px 2px;
  }

  .panel-primary > .panel-heading,.bg-green{
    background: #40a170;
  }
  .nav > li > a:hover,
  .nav > li > a:focus {
    color: black;
  }


  .my-input span p{
    margin: 0;
    padding: 0;
    width: 150px;
  }

  .my-active a{
    color: white;
  }

  .order-img img{
    width: 100px;
    height: 60px;
  }
  .my-nav-size ul li{
    font-size: 14px;

  }


  .my-img-btn p{
    position:absolute;
  }

  iframe{
    border: 0px;
    min-height: 500px;
    margin: 0;padding: 0;
    width: 100%;

  }


</style>
