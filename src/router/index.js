import Vue from 'vue'
import Router from 'vue-router'

import Login from '../component/Login.vue'
import Home from '../component/Home.vue'
import Admin from '../component/Admin.vue'
import Common from '../component/Common.vue'


Vue.use(Router)

// export default new Router({
//     routes: [
//       {
//         path: '/login',
//         name: 'Login',
//         components: Login
//       }
//     ],
//     mode:"history"  
//   });

export default new Router({
    routes:[
        // {path:'/',component:Login},
        {path:'/login',component:Login},
    ],
    mode:'history'
});


export const powerRouter = [
    { path:'/',redirect: '/common',component:Home,hidden:false,
    children:[
        {path:'/common',name:"共有功能",component:Common,meta:{role:'student'}},
        {path:'/admin',name:"管理员私有功能",component:Admin,}
    ]
    }
]
  