import Vue from "vue";
import $ from "jquery";
import VueRouter from 'vue-router'
import Vuex from 'vuex'
//必须要通过 Vue.use() 明确地安装路由功能
Vue.use(VueRouter)
Vue.use(Vuex)

import dbHome from './components/lmm/dbHome.vue'
//配置路由
var router = new VueRouter({
    routes: [{
            path: '/home',
            component: dbHome
            // ,
            // children:[
            //     {
            //         path: '/home/movie',
            //         component: dbMovie
            //     },
            //     {
            //         path: '/home/book',
            //         component: dbBook
            //     },
            //     {
            //         path: '/home/radio',
            //         component: dbRadio
            //     },
            //     {
            //         path: '/home/group',
            //         component: dbGroup
            //     }
            // ]
        }
        // ,
        // {
        //     path: '/home/detail',
        //     component: dbDetail,
        //     children:[
        //         {
        //             path: '/home/detail/comment',
        //             component: dbComment
        //         }
        //     ]
        // }
    ]
})

//配置状态管理
var store = new Vuex.Store({
    //保存数据的状态
    state: {
        
    },
    mutations: {
       
    },
    getters:{

    }   
})

new Vue({
    el: "#douban",
    data: {
      
    },
    
    router,
    store
})