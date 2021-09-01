import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import login from '../pages/login/login.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    // 所有路由
    routes:[
        {path:'/Msite',
        component:Msite,
        meta:{
            ShowFooter:true
        }
        },
        {path:'/Order',
        component:Order,
        meta:{
            ShowFooter:true
        }
        },
        {path:'/Profile',
        component:Profile,
        meta:{
            ShowFooter:true
        }
        },
        {path:'/Search',
        component:Search,
        meta:{
            ShowFooter:true
        }
        },
        {
        path:'/login',
        component:login
        },
        // 重定向
        {
            path:'/',
            redirect:'/Msite'
        }
    ]
})