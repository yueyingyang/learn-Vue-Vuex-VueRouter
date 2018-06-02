<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './component/Header'
export default {
  name:'app',
  components:{
    "app-header":Header
  },
  //  watch: {  
  //           $route(to, from) {  
  //               console.log(to);  
  //               console.log(from);  
  //           }  
  // }  
}
</script>

<style>

</style>
