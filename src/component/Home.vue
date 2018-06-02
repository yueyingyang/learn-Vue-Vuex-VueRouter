<template>
   <div class="container">
       <nav class="navbar navbar-light bg-light">
           <ul class="navbar-nav">
               <li v-for="item in newRouter[0].children" v-if="!item.hidden">
                   <router-link v-if="!item.hidden&&!item.children" class="nav-link" :to="item.path">
                       {{item.name}}
                   </router-link>
               </li>
           </ul>
       </nav>
       <router-view></router-view>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data(){
        return {

        }
    },
    methods:{
        // goToMenu(){
        //     // this.$router.go(-1);
        //     this.$router.push({name:"menuLink"});
        // }
    },
    computed: {
        ...mapGetters([
            'newRouter'
        ])
    }
}
</script>
