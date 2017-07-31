<template>
<div>
	<div class="details" v-show='show'>
		<div class="details-top">
			<div class="maxImg">
				<swiper :options="swiperOption" class='banner'>
	        		<swiper-slide  v-for='i of xqData.topImages' key = 'i'>
	          			<img :src="i" alt="">
	       			</swiper-slide>
	       			<div class="swiper-pagination" slot="pagination"></div>
		    	</swiper>
		    	<!-- 标题 -->
		    	<p class="details-title"><span v-text='itemInfo.title'></span></p>
		    	<!-- 价格 -->
		    	<div class='details-price'>
		    		<div class='price'>
		    			<span>￥</span>
		    			<span v-text='normalPrice.nowPrice'></span>
		    			<span v-if='normalPrice.highNowPrice'>~</span>
		    			<span v-if='normalPrice.highNowPrice'>￥</span>
		    			<span v-text='normalPrice.highNowPrice' v-if='normalPrice.highNowPrice'></span>
		    		</div>
		    		<div class='orPrice'>
		    			<s v-text='"￥"+normalPrice.oldPrice?normalPrice.oldPrice:""'></s>
		    			<div>
		    				<span v-text='zk?zk.text:""' :style='{color:zk?zk.textColor:"",backgroundColor:zk?zk.bgColor:""}'></span>	
		    			</div>
		    		</div>
		    	</div>
		    	<!-- 免邮,运费 -->
		    	<div class='mail'>
		    		<p class='postage'><span v-text='desc'></span></p>
		    		<div class='yh'>
		    			<div v-for='(m,idx) of services' v-if='idx<3' class='yuShow'>
		    				<img :src="m.icon">
		    				<span v-text='m.name'></span>
		    			</div>
		    			<span class='jt' >></span>
		    		</div>
		    	</div>
			</div>
		</div>
		<!-- 底部 -->
		<div class="details-bottom">
			<!-- 导航 -->
			<div id='detail-dh' @click='show = !show'>快速导航</div>
			<div class='bot-left'>
				<ul>
					<li>
						<img src="../../assets/header_wx.png">
						<p>客服</p>
					</li>
					<li>
						<img src="../../assets/love.png">
						<p>收藏</p>
					</li>
					<li>
						<img src="../../assets/smalld.png">
						<p>小店</p>
					</li>
				</ul>
			</div>
			<div class='bot-right'>
				<div class='le' @click='add'>
					<a href="javascript:;"> 
						加入购物车
					</a> 
				</div>
				<div class='ri'>
					<a href="#"> 
						立即购买
					</a> 
				</div>
			</div>
		</div>
	</div>
	<!-- 加入购物车模块 -->
	<addCar ref='add'></addCar>
</div>
</template>

<script>
	import addCar from './addCar'
	export default{
		components:{
			addCar
		},
		data() {
      		return {
        		swiperOption: {
		        pagination: '.swiper-pagination',
          		paginationType: 'fraction',
		        paginationClickable: true
	        	},
	        	show:'',
	        	xqData:[],
	        	itemInfo:{},
	        	normalPrice:{},
	        	zk:{},
	        	desc:'',
	        	skuInfo:{},
	        	services:''
	      	}
	    },
	    created () {
	    	this.$root.Bus.$on('xq',(acm,iid) => {
	    		this.show = true;
	    		this.spDetail (acm,iid)
	    		// this.$root.Bus.$off('xq')
	    		})
	    },
	    methods:{
	    	spDetail (acm,iid) {
		    	this.$http.jsonp('http://m.mogujie.com/jsonp/detail.api/v1?token=5HKEUG9I1Eb%2FZQa%2B5eXFDGAMJ8MdfyM4TmTdy4YVgdgqjn3JnsjWB2eQwTn%2FIuI0&iid='+iid+'&template=1-2-detail_normal-1.0.0').then(data => {
		    		this.xqData = data.body.data;
		    		this.itemInfo = this.xqData.itemInfo
		    		this.normalPrice = this.xqData.normalPrice
		    		this.normalPrice.priceTags?this.zk=this.normalPrice.priceTags[0]:this.zk=this.normalPrice.eventPriceDesc
		    		this.desc = this.xqData.itemServices.columns[1].desc;
		    		this.services = this.xqData.itemServices.services
		    		// 颜色，价格，尺寸
		    		this.skuInfo =this.xqData.skuInfo;
		    		this.skuInfo.iid = iid;
		    		// console.log(iid)
		    	},err => {
		    		console.log(err)
		    	})
	    	},
	    	add () {
	    		this.$refs.add.addShow(this.skuInfo,this.xqData.shopInfo.name,this.itemInfo.title);
	    	}
	    }

	}
</script>


<style scoped>
	.details{
		position:absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100
	}
	/*上块-展示*/
	.details-top{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 1.30638rem;
		background-color: #fff;
		overflow:auto;
	}
	.maxImg{
		position: absolute;
		top:-1.510833rem;
		left: 0;
		right: 0;
		height: 15rem;
	}
	.banner img{
		position: absolute;
		left: 0;
		right: 0;
		height: 100%;
	}
	.details-title{
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1.510833rem;
		background-color: #fff;
		z-index:2;
	}
	/*轮播图*/
	.swiper-slide{
		height: 15rem;
	}
	.swiper-pagination{
		position:absolute;
		bottom:1.76rem;
		right:.4rem !important;
		left:inherit;
		height:.533056rem;
		width:1.371944rem;
		border-radius:.266667rem;
		font-szie: .32rem;
		line-height:.533056rem;
		background: rgba(0,0,0,.3);
		color:#fff;
	}
	/*标题*/
	.details-title{
		box-sizing:border-box;
		padding:.4rem .4rem 0 .4rem;
		font-size: .45rem;
		color:#424242;
	}
	/*价格*/
	.details-price{
		padding:0 .426667rem;
		display:flex;
		height:1.416667rem;
	}
	.price{
		font-size:0;
		color:#333;
	}
	.price span{
		display:inline-block;
		height:1.416667rem;
	}
	.price span:nth-child(1),.price span:nth-child(4){
		box-sizing:border-box;
		padding-top:.32rem;
		font-size:.32rem;
		vertical-align:top;
	}
	.price span:nth-child(2),.price span:nth-child(3),.price span:nth-child(5){
		line-height:1.416667rem;
		font-size:.96rem;
	}
	.orPrice{
		margin-left:.1rem;
		display:flex;
		flex-direction:column;
		justify-content:center;
		font-size:.3rem;
	}
	.orPrice s{
		color:#999;
	}
	.orPrice span{
		padding:0 .1rem;
	}
	/*免邮，运费*/
	.mail{
		height:2.026111rem;
		padding-left:.4rem;
	}
	.postage{
		font-size:.3rem;
		color:#999;
		height: 1.013056rem;
		line-height:1.013056rem;
		border-bottom:1px solid #eee;
		box-sizing:border-box;
	}


	/*下块-功能*/
	.details-bottom{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		display:flex;
		height: 1.30638rem;
		border-top:1px solid #ededed;
		background-color:#fff;
		box-sizing:border-box;
	}
	/*导航*/
	#detail-dh{
		position:absolute;
		right:10px;
		bottom:1.80638rem;
		padding:8px 10px;
		box-sizing:border-box;
		width: 50px;
    	height: 50px;
    	font-size: 12px;
	    text-align: center;
	    white-space:wrap;
	    color: #FFF;
	    background: #000;
	    opacity: .7;
	    border-radius: 50%;
	    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
	    overflow:hidden;
	}
	.bot-left,.bot-right{
		width:50%;
		height:100%
	}
	.bot-left ul{
		display:flex;
		width:100%;
		height:100%
	}
	.bot-left ul li{
		display:flex;
		flex-direction:column;
		justify-content:space-around;
		align-items:center;
		width:33.3%;
		height:100%;
	}
	.bot-left ul li:nth-child(2){
		box-sizing:border-box;
		border-left:1px solid #ededed;
		border-right:1px solid #ededed;
	}
	.bot-left img{
		box-sizing:border-box;
		padding-top:.23rem;
		width:.486667rem;
	}
	.bot-left p{
		font-size:.266667rem;
		color:#666;
	}
	.bot-right{
		display:flex;
	}
	.le,.ri{
		width:50%;
		height:100%;
	}
	.ri{
		background-color:#ff5777;
	}
	.le{
   		background-color: #ffe6e8;
	}
	.le a{
		color: #ff5777;
	}
	.ri a{
		color:#fff;
	}
	.le a,.ri a{
		display:block;
		height:100%;
		text-align:center;
		line-height:1.30638rem;
	}
	/*优惠*/
	.yh{
		display:flex;
		align-items:center;
		height:1.013056rem
	}
	.yuShow {
		display:flex;
		width:33.3%;
	}
	.yuShow img{
		height: .472222rem;
	}
	.yuShow span{
		font-size: .3rem;
    	color: #666;
    	margin-left:.05rem;
    	white-space:nowrap;
	}
	.jt{
		margin-right:.426667rem;
		font-size:.47rem;
		color: #666;
	}
</style>