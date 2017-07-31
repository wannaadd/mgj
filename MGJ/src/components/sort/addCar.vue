<template>
	<div id="addCar" v-show='c'>
	<transition name='fade'>
		<div class='addCar-bottom' v-show='b'>
			<div class="top-div">
				<div class="con-top">
					<div class="img">
						<img v-lazy="addImg">
					</div>
					<div class="colAndSi">
						<p class="jsPrice">
							<span>￥</span><span v-text='price'></span>
						</p>
						<p class='kc'>库存<span>11</span>件</p>
						<p class='pleaseSel'>请选择<span>:</span><span v-for='j of this.carData.props' v-text='j.label' ></span></p>
						<span class='cha'  @click='cha()'>×</span>
					</div>
				</div>
			<div class="con-center">
				<div v-for='i of this.carData.props'>
					<p v-text='i.label'></p>
					<div class="color-sel">
						<span v-for='j of i.list' v-text='j.name' @click='dj(j)' :class='{"active":styleId == j.styleId || sizeId == j.sizeId}'></span>				
					</div>
				</div>
				<div class='num'>
					<p>数量</p>
					<div>
						<i @click='compute(-1)'>-</i><i v-text='numAll'></i><i @click='compute(1)'>+</i>
					</div>
				</div>
			</div>
			</div>
			<div class='add' @click='sure()'>确定</div>
		</div>
	</transition>
	</div>
</template>

<script>
	export default{
		data () {
			return{
				b:false,
				c:false,
				carData:{},
				car:{},
				addImg:'',
				price:'',
				kc:'',
				styleId:'',
				sizeId:'',
				numAll:1,
				name:'',
				title:''
			}
		},
		methods:{
			cha () {
				this.b=!this.b;
				// setTimeout(() => {
					this.c=!this.c;
				// },1000)
			},
			addShow (data,name,title) {
				this.carData = data;
				this.name = name;
				this.title = title;
				// console.log(name)
				// console.log(this.carData)
				this.addImg = this.carData.skus[0].img;
				this.price = parseFloat(this.carData.skus[0].nowprice/100).toFixed(2);
				this.c=true;
				// setTimeout(() => {
				this.b=true;
				// })
			},
			sure () {
				if(this.styleId != '' && this.sizeId != ''){
					for(var g in this.carData.skus){
						if(this.carData.skus[g].styleId == this.styleId && this.carData.skus[g].sizeId == this.sizeId){
							this.addImg = this.carData.skus[g].img;
							if(localStorage.getItem('car')){
								this.car = JSON.parse(localStorage.getItem('car'))	
							}
							this.carData.skus[g].name = this.name;
							this.carData.skus[g].title = this.title;
							this.carData.skus[g].num = this.numAll;
							if(!this.car[this.carData.skus[g].name]){
								this.car[this.carData.skus[g].name] = {}
							}
							this.car[this.carData.skus[g].name][this.carData.skus[g].stockId] = this.carData.skus[g]
							let carDataStr = JSON.stringify(this.car);
							localStorage.setItem('car',carDataStr);
							alert('提交成功')
							break;
						}
					}
				}else{
					alert('请选择')
				}
			},
			dj (j) {
				if(j.index < 100){
					this.styleId = j.styleId;
					for(let g in this.carData.skus){
						if(this.carData.skus[g].styleId == this.styleId){
							this.addImg = this.carData.skus[g].img;
							break;
						}
					}
				}
				// console.log(this.carData.props)
				if(j.index >= 100){
					this.sizeId = j.sizeId;
				}
				// console.log(this.styleId)
				// console.log(this.sizeId)
			},
			compute (count) {
				if(count < 1){
					this.numAll = 1;
				}else{
					this.numAll += count;
				}
			}
		}
	}
</script>


<style scoped>
	#addCar{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom:0;
		background-color:rgba(0,0,0,.4);
		z-index:101;
		font-size: 0;
	}
	.addCar-bottom{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #fff;
	}
	.add{
		height:1.333333rem;
		background: linear-gradient(90deg,#ff5777,#ff468f);
		font-size: .37rem;
		color: #fff;
		text-align: center;
		line-height: 1.333333rem
	}
	.top-div{
		bottom: 1.333333rem;
		background-color: #fff;

	}
	.con-top{
		position: relative;
		padding: .4rem 0;
		height:2.666667rem;
		display: flex;
		box-sizing:border-box;
	}
	.img{
		position:relative;
		margin-left: .426667rem;
		width: 2.666667rem;
		height: 1.867222rem;
	}
	.img img{
		position:absolute;
		top:-2.1rem;
		width: 2.666667rem;
	}
	.colAndSi{
		position: relative;
		margin-left:.4rem;
		width: 6.027778rem;
		height:1.861111rem;
	}
	.jsPrice{
		padding-top:.1rem;
		display: flex;
		height:1rem;
		box-sizing: border-box;
	}
	.jsPrice span:nth-child(1){
		margin-top:.04rem;
		font-size:.32rem;
		color:#333;
	}
	.jsPrice span:nth-child(2){
		font-size:.746667rem;
		color:#333;
	}
	.pleaseSel span{
		margin-left:.08rem;
	}
	.kc{
		margin-bottom: .1rem;
	}
	.kc,.pleaseSel{
		font-size: .32rem;
		color:#333;
	}
	.cha{
		position: absolute;
		top: 0;
		right: 0;
		font-size: 1rem
	}
	.con-center{
		box-sizing:border-box;
		padding:0 .2rem;
		font-size: .32rem;
		color:#5e5e5e;
	}
	.color-sel{
		display: flex;
		flex-wrap:wrap;
	}
	.con-center p{
		margin: .2rem 0;
	}
	.con-center span{
		margin-right: .25rem;
		margin-bottom: .25rem;
		box-sizing:border-box;
		padding:0 .4rem;
		line-height:.69rem;
		border: 1px solid #bbb;
		border-radius: .08rem;
		white-space: nowrap;
	}
	.num div{
		margin-bottom:.2rem;
		width:2.4rem;
		height:.666667rem;
		border: 1px solid #bbb;
		box-sizing:border-box;
		font-size:.42rem;
	}
	.num i{
		box-sizing:border-box;
		width:33.3%;
		height:100%;
		font-style:normal;
		text-align:center;
		line-height:.666667rem;
		display:inline-block;
		color:#ed4566;
	}
	.num i:nth-child(2){
		border-left:1px solid #bbb;
		border-right:1px solid #bbb;
		color:#5e5e5e;
	}
	.con-center .active{
		color: #ed4566;
    	border: 1px solid #ed4566;
	}
	/*.fade-enter-active {
		transform:translateY(8.333333rem); 
		transition:transform 1s linear;
	}*/
	/*.fade-leave-active {
		transform:translateY(8.333333rem); 
		transition:transform 1s;
	}*/
</style>