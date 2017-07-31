import Vue from 'vue'

import Vuerouter from 'vue-router'
Vue.use(Vuerouter)
// 轮播图插件
import VueAwsesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwsesomeSwiper)

// 表单验证vuerify插件
import Vuerify from 'vuerify'
Vue.use(Vuerify)

import Home from '../pages/home'
import Sort from '../pages/sort'
import Cart from '../pages/cart'
import Mine from '../pages/mine'

import RightList from '../components/sort/right_list'

// vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

let routes = [
	{path:'',component:Home},
	{path:'/home',component:Home},
	{path:'/sort',component:Sort,children:[
		{path:'list/maitKey=:pid&miniWallkey=:fcid',components:{
			right:RightList
			}
		}
	]},
	{path:'/cart',component:Cart},
	{path:'/mine',component:Mine}
]

var router = new Vuerouter({
	routes
});

export default router
