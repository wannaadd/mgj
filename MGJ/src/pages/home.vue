<template>
<div>
	<div id="home">
		<!-- 头部 -->
		<headers></headers>
		<!-- 轮播图 -->
		<ban></ban>
		<!-- topshow组件 -->
		<div class="show">
			<topshow></topshow>
		</div>
		<!-- 秒杀 -->
		<slave></slave>
		<!-- 超实惠 -->
		<substantial></substantial>
		<!-- 热门市场 -->
		<hot @linke="aaa" :ghot="shows"></hot>
		<!-- 猜你喜欢 -->
		<div class="loves">
			<div class="key-title">猜你喜欢</div>
			<love></love>
			<div class="jz"></div>
		</div>
	</div>
	<!-- 详情页 -->
	<detail :linked="shows" @gh="aaa"></detail>
</div>
</template>

<script>
	import Headers from '../components/home/headers'
	import Topshow from '../components/home/topshow'
	import Ban from '../components/home/ban'
	import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
	import Slave from '../components/home/slave'
	import Substantial from '../components/home/substantial'
	import Hot from '../components/home/hot'
	import Love from '../components/home/love'
	import Detail from '../components/home/detail'
	import Details from '../components/sort/details'
	export default{
		components:{
			Headers,Topshow,Ban,Swiper,SwiperSlide,Slave,Substantial,Hot,Love,Detail
		},
		data(){
			return{
				allData:[],
				shows:false
			}
		},
		created(){
	      this.$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604',{callback:"jsonp"}).then( datas => {
	        let result = datas.data.data;
	        this.allData = result;
	        bus.$emit('data',this.allData)
	        // console.log(this.allData[51827].list)
	      },err => {
	        console.log(err)
	      })
	    },
	    methods:{
	    	aaa(a){
	    		this.shows = a;
	    		// console.log(this.shows);
	    	}
	    }
	}
</script>

<style scoped>
	#home{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 1.30638rem;
		background-color: #F6F6F6;
		overflow-x: hidden;
		overflow-y: scroll;
	}
	.show{
		padding-top: 0.277778rem;
		height: 2.777778rem;
		background-color: #fff;
		margin-bottom: 0.277778rem;
	}
	::-webkit-scrollbar{
	    width: 0px; 
	    height: 0px;  
	    background-color: #fff;  
	}
	.key-title{
    	height: 0.5333333rem;
    	line-height: 0.5333333rem;
    	color: #333;
    	text-align: center;
    	font-size: 0.4rem;
    	margin-bottom: 0.266666rem;
    	background: url(../assets/hot.png) no-repeat center;
    	background-size: 41% auto;
    	margin-top: 0.4rem;
    }
	.loves{
		padding-top: 0.1px;
	}
	.jz{
		height: 25px;
		background: url(../assets/jz.gif) no-repeat center;
		background-size: auto 100%;
		margin-bottom: 8px;
	}
</style>