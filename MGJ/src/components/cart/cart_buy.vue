<template>
	<div class="buy-wrap">
		<div class="all-sel">
			<label class="all-bg">
				<input type="checkbox" v-model="selected" @change="allsel()">
				<p></p>
			</label>
			<span>全选 ( 0 ) </span>
		</div>

		<div class="all-price">
			￥{{allPrice}}
		</div>

		<div class="go-payment">
			去结算
		</div>

	</div>
</template>

<script>
	export default {
		data (){
			return {
				allPrice : 0,
				selected : false
			}
		},
		created (){
			this.$root.Bus.$on('priceFun', (price) => {
				this.allPrice = price;
			});
			this.$root.Bus.$on('allBtn', (all) => {
				this.selected = all;
				// console.log(this.selected)
			})
		},
		methods : {
			allsel (){
				this.$root.Bus.$emit('allselFun',this.selected);
			}
		}
	}
</script>

<style scoped>
	.buy-wrap{
		background-color: #fefefe;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		border-top: 1px solid #d8d8d8;
		padding: 0.278rem 0.389rem;
		display: flex;
		align-items: center;
		font-size: 0.35rem;
	}
	.all-sel{
		width: 40%;
		color: #5e5e5e;
		display: -webkit-box;
    	display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
        -ms-flex-align: center;
		align-items: center;
	}
	.all-bg{
		margin-right: 5px;
	}
	.all-bg input[type="checkbox"]{
		display: none;
	}
	.all-bg p{
		width: 0.6rem;
		height: 0.6rem;
		display: inline-block;
		vertical-align: middle;
		background: url(../../assets/checkbox.png) 0 100% no-repeat;
		background-size: 0.6rem auto;
	}
	.all-bg input:checked+p{
		background: url(../../assets/checkbox.png) 0 0 no-repeat;
		background-size: 0.6rem auto;
	}
	.all-price{
		color: #ee4566;
		width: 70%;
	}
	.go-payment{
		width: 2.667rem;
		height: 0.889rem;
		background-color: #ff5777;
		color: #fff;
		line-height: 0.889rem;
		text-align: center;
		border-radius: 5px;
		cursor: pointer;
		font-size: 0.4rem;

	}
</style>