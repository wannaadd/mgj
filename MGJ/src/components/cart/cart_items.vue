<template>
	<div class="cart-items">

		<div class="item" v-for="(item,key,index) in carData">
			<h3 class="shop-name">
				<label class="shop-checkbox">
					<input type="checkbox" v-model="selectedAll[key]" @change="selAllThis(item,key)">
					<p></p>
				</label>
				<a href="javascript:;">{{ key }}</a>
				<img src="http://s3.mogucdn.com/p1/170103/idid_ie4wkmrrhbrgcojtmqzdambqgqyde_56x36.png" class="quality" v-show="">
				<span class="get-cou">领券&nbsp;></span>
			</h3>

			<div class="detail-wrap" v-for="i in item">
				<div class="detail">
					<div class="detail-selected">
						<label class="shop-checkbox">
							<input type="checkbox" v-model="i.status" @change="selectedFun(item,key)">
							<p></p>
						</label>
					</div>
					<div class="detail-img">
						<img :src="i.img">
					</div>
					<div class="detail-content" v-show="state">
						<div class="detail-title">
							<h5>
								<span v-show="">69元任性买</span>
								{{ i.title }}
							</h5>
						</div>
						<div class="detail-params">
							<p class="color-weight">
								<span>颜色</span>：<span>{{ i.style }}</span>；<span>尺寸</span>：<span>{{ i.size }}</span>；
							</p>
							<p class="price-shop">
								<span class="price">{{ i.currency }}{{ i.nowprice | curry }}</span>
								<span class="ori-price">{{ i.currency }}{{ i.price | curry }}</span>
							</p>
						</div>

						<div class="this-count">
							<p class="this-residue" v-show="">
								仅剩6件
							</p>
							 <span>x{{ i.num }}</span>
						</div>
					</div>
					<!-- 编辑商品 -->
					<div class="redact" v-show="!state">
						<div class="change-count">
							<a href="javascript:;" class="sub-count">-</a>
							<span class="has-count">{{ i.num }}</span>
							<a href="javascript:;" class="add-count">+</a>
						</div>

						<div class="unflod">
							<p>
								颜色：<span>{{ i.style }}</span>；
								尺寸：<span></span>
								<span>{{ i.size }}</span>
							</p>
						</div>
					</div>
				</div>

			</div>
			
		</div>

		<div class="space"></div>
		
	</div>
</template>

<script>
	import Vue from 'vue'
	export default {
		props : ['ss'],
		data (){
			return {
				state : this.ss,
				selectedAll : {},
				carData  : {},
				price : {},
				allPrice : 0,
				flag : {},
				allBtn : false
			}
		},
		created (){
			this.getData ();
			this.$root.Bus.$on('allselFun', (sel) => {
				for(var i in this.selectedAll){
					this.$set(this.selectedAll,[i],sel);
					this.selAllThis(this.carData[i],i);
				}
			})
		},
		methods : {
			getData (){
				this.carData = JSON.parse(localStorage.getItem('car'));
				for(var i in this.carData){
					var data = this.carData[i]
					this.$set(this.selectedAll,i,false);
					for(var j in data){
						this.$set(data[j],'status',false);
					}
				}
			},
			selAllThis (item,key){
				for(var i in item){
					item[i].status = this.selectedAll[key];
				}
				this.selectedFun(item,key);
				console.log(123)
			},
			selectedFun (item,key){
				this.$set(this.flag,[key],false);
				this.price[key] = 0;
				for(var i in item){
					if(!item[i].status){
						this.$set(this.selectedAll,key,false);
						this.$set(this.flag,[key],true);
					}else{
						this.price[key] += (Number(item[i].nowprice)/100)*item[i].num;
					}
				}
				if(!this.flag[key]){
					this.$set(this.selectedAll,key,true);
				}
				this.allPriceFun();
			},
			allPriceFun (){
				this.allPrice = 0;
				this.allBtn = true;
				for( var i in this.price){
					this.allPrice += this.price[i];
				}
				this.$root.Bus.$emit('priceFun',this.allPrice);
				for(var j in this.selectedAll){
					if(!this.selectedAll[j]){
						this.allBtn = false;
					}
				}
				this.$root.Bus.$emit('allBtn',this.allBtn);
			}
		},
		watch : {
			ss (newValue,oldValue){
				this.state = this.ss
			}
		},
		filters : {
			curry (money){
				let price =  (money/100).toFixed(2);
				return price;
			}
		}
	}
</script>

<style scoped>
	.cart-items{
		position: absolute;
		top: 1.2rem;
		left: 0;
		right: 0;
		bottom: 1.3333rem;
		overflow: auto;
	}
	.item{
		margin: 0.4rem 0;
		border-top: 1px solid #d8d8d8;
		border-bottom: 1px solid #d8d8d8;
		box-sizing: border-box;
		background-color: #fff;
		position: relative;
	}
	.shop-name{
		padding: 0.22rem 0.4rem;
		color: #5e5e5e;
		font-weight: normal;
		font-size: 0.4rem;
		border-bottom: 1px solid #e5e5e5;
		box-sizing: border-box;
	}
	.shop-checkbox input[type="checkbox"]{
		display: none;
	}
	.shop-checkbox p{
		width: 0.6rem;
		height: 0.6rem;
		display: inline-block;
		vertical-align: middle;
		background: url(../../assets/checkbox.png) 0 100% no-repeat;
		background-size: 0.6rem auto;
	}
	.shop-checkbox input:checked+p{
		background: url(../../assets/checkbox.png) 0 0 no-repeat;
		background-size: 0.6rem auto;
	}
	.quality{
		width: 7%;
		height: 7%;
		vertical-align: middle;
		display: inline-block;
	}
	.shop-name .get-cou{
		float: right;
	}
	.detail-wrap{
		padding: 0.27777rem;
	}
	.detail{
		display: flex;
		padding: 0.1rem 0;
	}
	.detail-selected{
		width: 0.917rem;
		padding: 10% 0 0 0.11rem;
	}
	.detail-img img{
		width: 1.70666rem;
		height: 2.56rem;
		margin-left: 0.4rem;
	}
	.detail-content{
		width: 100%;
		position: relative;
		padding-left: 0.278rem;
	}
	.detail-title h5{
		color: #5e5e5e;
		font-size: 0.38rem;
	}
	.detail-title h5 span{
		color: #f57;
	}

	.color-weight{
		color: #999;
		font-size: 0.33333rem;
	}

	.price-shop{
		font-size: 0.4444rem;
		color: #333;
		margin-top: 0.1rem;
	}
	.ori-price{
		font-size: 0.3888rem;
		text-decoration: line-through;
		color: #999;
	}

	.this-count{
		position: absolute;
		right: 0.5rem;
		bottom: 0.1rem;
		color: #999;
		text-align: right;
	}
	.this-residue{
    	height: 0.4444rem;
    	padding: 0 0.2rem;
		color: #BC9075;
    	border: 1px solid #BC9075;
    	font-size: 0.33rem;
    	position: absolute;
    	top: -0.56rem;
    	right: 0;
    	white-space: nowrap;
	}
	.this-residue::before{
		content: '';
	    position: absolute;
	    border-top: 8px solid #BC9075;
	    border-left: 6px solid transparent;
	    border-right: 6px solid transparent;
	    bottom: -8px;
	    right: 4px;
	    width: 0;
	    height: 0;
	}
	.this-residue::after{
		content: '';
	    position: absolute;
	    border-top: 8px solid #fff;
	    border-left: 5px solid transparent;
	    border-right: 5px solid transparent;
	    bottom: -7px;
	    right: 5px;
	    width: 0;
	    height: 0;
	}
	.space{
		height: 20px;
	}

	/*进入商品编辑状态*/
	.redact{
		margin-left: 10px;
	}
	.change-count{
		height: 0.778rem;
		font-size: 0;
	}
	.sub-count,.add-count{
		width: 1.1667rem;
		height: 0.78rem;
		text-align: center;
		line-height: 0.78rem;
		display: inline-block;
		border: 1px solid #e5e5e5;
		background-color: #f6f6f6;
		color: #999;
		font-size: 0.6667rem;
		box-sizing: border-box;
	}
	.add-count{
		border: 1px solid #999;
		background: #fff;
	}
	.has-count{
	    width: 1.33333rem;
	    height: 0.78rem;
		display: inline-block;
	    text-align: center;
	    vertical-align: top;
	    line-height: 0.78rem;
	    color: #333;
	    font-size: 0.37333rem;
	    border: 1px solid #999;
	    border-right: none;
	    box-sizing: border-box;
	}
	.unflod{
		width: 6.2778rem;
		height: 1.1667rem;
		border: 1px solid #999;
		margin-top: 0.3rem;
		background: url(../../assets/bottom.png) no-repeat 5.5rem center;
		background-size: 8%;
	}
	.unflod p{
		width: 5rem;
		height: 0.83333rem;
		color: #666;
		font-size: 0.35rem;
		padding-left: 0.27778rem;
		padding-top: 0.13889rem;
	}
	::-webkit-scrollbar {width: 3px;}
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background: rgba(0,0,0,0.3);
	}
</style>