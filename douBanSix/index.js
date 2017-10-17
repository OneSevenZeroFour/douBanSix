import Vue from "vue";
import $ from "jquery";
import VueRouter from 'vue-router'
import Vuex from 'vuex'
window.$ = $;
//必须要通过 Vue.use() 明确地安装路由功能
Vue.use(VueRouter)
Vue.use(Vuex)

// import dbHome from './components/lmm/dbHome.vue';
import dbMovie from './components/lantao/dbMovie.vue';
import dbMovieDetail from './components/lantao/dbMovieDetail.vue';
import dbRadio from './components/lantao/dbRadio.vue';
import dbSendRadio from './components/lantao/dbSendRadio.vue';
import dbBook from './components/wwj/dbBook.vue';
import dbBookDetail from './components/wwj/dbBookDetail.vue';
import "./css/base.css";
//配置路由
var router = new VueRouter({
    routes: [{
                path: '/home/movie',
                component: dbMovie
            },
            {
                path:'/home/radio',
                component:dbRadio
            },
            ,{
                path:'/home/sendRadio',
                component:dbSendRadio
            },
            {
                path:'/home/movieDetail/:id',
                component :dbMovieDetail
        	},
            {
                path: '/home/book',
                component: dbBook
            },
            {
                path: '/home/bookDetail/:id',
                component: dbBookDetail
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