<template lang="html">
    <!-- 快抢组件 -->
    <ul class="grab">
    	<li v-for="items in allData">
    		<a href="#">
    			<div class="img"><img v-lazy="items.img" alt=""></div>
    			<div class="title">{{items.title}}</div>
    			<div class="price">
    				<span>￥{{items.price}}</span>
    				<s>￥{{items.salePrice}}</s>
    			</div>
    		</a>
    	</li>
    </ul>
</template>

<script>
    export default{
    	data(){
    		return{
    			allData:[]
    		}
    	},
    	created(){
    		bus.$on('data',(acess) => {
    			this.allData = acess[41119].list[0].list;
    			// console.log(this.allData)
    		})
    	}
    }
</script>

<style lang="css" scoped>
	.grab{
		display: flex;
	}
    .grab .img{
    	width: 2rem;
    	height: 2.0rem;
    	margin: 0 0.2rem;
    }
    .grab .img img{
    	width: 100%;
    }
    .grab .title{
    	font-size: 0.333333rem;
		color: #666666;
		margin: 0.2rem 0 0.06rem 0;
		overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
    }
    .grab li{
    	width: 2.6rem;
    	min-width: 2.6rem;
    	height: 3.333333rem;
    	margin-right: 0.27rem;
    }
    .grab li:last-child{
    	padding-right: 0.4rem;
    }
    .grab .price s{
    	font-size: 0.27rem;
    	color: #888;
    	padding-left: 0.01rem;
    }
    .grab .price span{
    	font-size: 0.27rem;
    	color: #f25;
    }
</style>