<template>
	<div class="go-bg" v-show="isShow">
		<p class="cart-icon">
			<i></i>
		</p>
		<p class="go-text">购物车还是空的哦~</p>
		<p class="go-shopping">
			<router-link to="/sort/list/maitKey=41888&miniWallkey=10062603">去逛逛</router-link>
		</p>
	</div>
</template>

<script>
	export default {
		data (){
			return {
				isShow : true
			}
		},
		created (){
			if(localStorage.getItem('car')){
				this.isShow = false;
			}
		}
	}
</script>

<style scoped>
	.go-bg{
		width: 100%;
		height: 5.5558rem;
		position: absolute;
		top: 35%;
		z-index: 100;
	}
	.go-bg p{
		margin: 0 auto;
	}
	.cart-icon{
		width: 3.38888rem;
		height: 3.38888rem;
		background-color: #ddd5d7;
		border-radius: 50%;

		position: relative;
	}
	.cart-icon i{
		width: 2rem;
		height: 2rem;
		display: block;
		background: url(../../assets/bg-cart.png) no-repeat 50%;
		background-size: 100%;
		position: absolute;
		top: 20%;
		left: 20%;
	}
	.go-text{
		text-align: center;
		color: #5e5e5e;
		font-size: 0.4rem;
		padding: 0.3rem 0 0.3rem 0;
	}
	.go-shopping{
	}
	.go-shopping a{
		width: 2.66666rem;
		height: 1rem;
		display: block;
		color: #fff;
		background-color: #f55777;
		border-radius: 5px;
		text-align: center;
		line-height: 1rem;
		font-size: 0.4rem;
		margin: 0 auto;
	}
</style>