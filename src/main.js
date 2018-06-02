import Vue from 'vue'

// import VueRouter from 'vue-router'
//引入路由设置
import router from './router/index'
import { powerRouter } from './router'

import App from './App.vue'
import store from './store'
import axios from 'axios'


// Vue.use(VueRouter)

Vue.config.productionTip = false

// axios.defaults.baseURL = 'http://222.31.67.94:82/api'
axios.defaults.baseURL = ' https://easy-mock.com/mock/5b11ebcb7b7f81618f5b6472/us'

// const router  = new VueRouter({
//   routes,powerRouter,
//   mode:'history'
// })

// 全局守卫
// router.beforeEach((to, from, next) => {
  
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alert("还没有登录，请先登录");
//     next('/login');
//   }
// })

// 后置钩子
// router.afterEach((to,from) =>{
//   alert("after each");
// })



router.beforeEach((to, from, next) => {
  
  if(store.getters.role){ //判断role 是否存在
    console.log('233');
    if(store.getters.newRouter.length !== 0){  
         next();
    }else{
      let newrouter
        console.log(store.getters.role);
         if (store.getters.role == 'teacher') {  //判断权限
              newrouter = powerRouter
          } else {
              let newchildren = powerRouter[0].children.filter(route => {
                  if(route.meta){
                    if(route.meta.role == store.getters.role){
                      return true
                      }
                      return false
                  }else{
                      return false
                  }
              });
              newrouter = powerRouter
              newrouter[0].children = newchildren
          }
          router.addRoutes(newrouter) //添加动态路由
          store.dispatch('setNewRouter',newrouter).then(res => { 
              next({ ...to })
          }).catch(() => {       

          })
    }	  
  }else{
       if (['/login'].indexOf(to.path) !== -1) { 
         next()
      } else {
         next('/login')
      }
}
})

// router.beforeEach((to, from, next) => {
//   // console.log(store.getters.role);

//   if(store.getters.role){ //判断role 是否存在
    
//     if(store.getters.newRouter.length !== 0){  
//          next();
//     }else{
//       let newrouter
//          if (store.getters.role == 'teacher') {  //判断权限
//               newrouter = powerRouter
//           } else {
//               let newchildren = powerRouter[0].children.filter(route => {
//                   if(route.meta){
//                     if(route.meta.role == store.getters.role){
//                       return true
//                       }
//                       return false
//                   }else{
//                       return false
//                   }
                
//               });
//               newrouter = powerRouter;
//               console.log(newchildren);
//               newrouter[0].children = newchildren;
//           }
//           router.addRoutes(newrouter) //添加动态路由
//             store.dispatch('setNewRouter',newrouter).then(res => { 
//               next({ ...to })
//           }).catch(() => {       

//           })
//     }	  
//   }else{
//        if (['/login'].indexOf(to.path) !== -1) { 
//          next()
//       } else {
//          next('/login')
//       }
// }
// })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
