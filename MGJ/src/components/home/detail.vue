<template lang="html">
    <div class="detail" v-if="shows">
    	<!-- 头部 -->
    	<dehead :sho="shows" @xs="show"></dehead>
    	<!-- 类别 -->
    	<div class="type">
    		<div class="list">
    			<a href="#" class="item" v-for="items in allData1" :style="{background:'url('+items.img+') no-repeat center'}" style="background-size: 100% auto;">
    				<a>{{items.title}}</a>
    			</a>
    		</div>
    	</div>
    	<!-- tab切换 -->
    	<div class="tab">
    		<a href="#" class="tab-t" @click="pop('pop',1)">
    			<span :class="{active:state==1?true:false}">综合</span>
    		</a>
    		<a href="#" class="tab-t" @click="sell('sell',2)">
    			<span :class="{active:state==2?true:false}">销量</span>
    		</a>
    		<a href="#" class="tab-t" @click="news('new',3)">
    			<span :class="{active:state==3?true:false}">新品</span>
    		</a>
    		<a href="#" class="tab-t" @click="price('',4)">
    			<span :class="{active:state==4?true:false}">价格</span>
    			<div class="show-arrow"></div>
    		</a>
    	</div>
    	<div class="content">
    		<love :ds="allData" v-show="this.shows"></love>
    	</div>
    </div>
</template>

<script>
	import Dehead from './dehead'
	import Love from './love'
    export default{
    	props:['linked'],
    	components:{
    		Dehead,Love
    	},
    	data(){
    		return{
    			allData:[],
    			allData1:[],
    			sortKey:'pop',
    			state:1,
    			page:1,
    			shows:""
    		}
    	},
    	created(){
    		this.access();
    		this.$root.Bus.$on('zy',() => {
    			this.pop('pop',1)
    		})
    	},
    	watch:{
    		linked(a,b){
    			this.shows = a;
                // console.log(this.shows)
    		}
    	},
    	methods:{
    		access(){
    			this.$http.jsonp('http://list.mogujie.com/search?ad=0&acm=3.mce.1_10_1cchy.51836.0.kJzwcqnPPNAh0.m_288007-pos_3-mf_4537_485518-idx_3-mfs_16&_mgjuuid=9d091b89-050f-43f5-aea6-8efb756417e2&sort='+this.sortKey+'&title=T%E6%81%A4&ptp=m1._mf1_1239_4537._keyword_51836.0.7eY9rS&userId=17a2wro&cKey=16&fcid=50244&width=330&action=clothing&page='+this.page+'&height=440&_version=61&_=1498645537301',{callback:'jsonp'}).then(data => {
	    			let resault = data.body.result.wall.docs
	    			this.allData = resault
	    			// 类别数据
	    			let resault1 = data.body.result.hotCates
	    			this.allData1 = resault1
	    			// console.log(this.allData[4])
	    		},err => {
	    			console.log(err)
	    		})
    		},
    		pop(pop,e){
    			this.sortKey = pop;
    			this.access();
    			this.state = e;
    		},
    		sell(sell,e){
    			this.sortKey = sell;
    			this.access()
    			this.state = e;
    		},
    		news(ne,e){
    			this.sortKey = ne;
    			this.access()
    			this.state = e;
    		},
    		price(pr,e){
    			this.state = e;
    		},
    		show(a){
    			this.shows = a;
                this.$emit('gh',this.shows)
    		}
    	}

    }
</script>

<style lang="css" scoped>
	.active{
		color: red !important;
	}
    .detail{
    	position: absolute;
    	z-index: 100;
    	top: 0;
    	right: 0;
    	bottom: 0;
    	left: 0;
    	background-color: #F6F6F6;
    }
    .type{
    	height: 1.6rem;
    	border-bottom: 1px solid #eaeaea;
    	background: white;
    	padding: 0 0.32rem;
    	white-space: nowrap;
    	overflow: auto;
    }
    .item a{
    	display: inline-block;
    	padding:  0.44rem  0.506667rem 0.506667rem  0.506667rem;
    	font-size: 0.373333rem;
    	color: #fff;
    }
    .item{
    	display: inline-block;
    	margin: 0.14rem;
    	height: 1.333333rem;
    	border-radius: 0.14rem;
    }
    ::-webkit-scrollbar{
	    width: 0px;
	    height: 0px;
	    background-color: white;
	}
	.tab{
		display: flex;
		height: 1.066667rem;
		background: #fff;
		border-bottom: 1px solid #eaeaea;
		font-size: 0px;
	}
	.tab-t{
		display: flex;
		align-items: center;
		position: relative;
		width: 25%;
		height: 100%;
	}
	.tab-t span{
		display: block;
		width: 100%;
		font-size: 0.36rem;
		text-align: center;
    	color: #333;
    	border-left:1px solid #e6e6e6;
	}
	.show-arrow{
		position: absolute;
		display: inline-block;
		width: 0.27rem;
		height: 0.27rem;
		right: 0.3rem;
		top:  0.3rem;
		border-left: 1px solid #c3c3c3;
    	border-bottom: 1px solid #c3c3c3;
    	-webkit-transform: rotate(-45deg);
	}
	.content{
		position: absolute;
		top: 3.866667rem;
		bottom: 0;
		right: 0;
		left: 0;
		overflow: auto;
	}
</style>