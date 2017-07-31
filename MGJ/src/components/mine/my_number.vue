<template>
	<div class="my-number">
		<div class="head-pic">
			<img src="http://s11.mogucdn.com/mlcdn/5abf39/170622_000ll2394aa5g6l5ha3ik3g6i207d_100x100.jpg_170x170.jpg">
		</div>
		<div class="number-address">
			<p class="number">{{userName}}</p>
			<a href=""><p class="address">我的收货地址</p></a>
		</div>
	</div>
</template>

<script>
	export default {
		props:['d'],
		data(){
			return{
				userName:""
			}
		},
		created(){
			this.gets();
		},
		methods:{
			gets(){
				// let names = localStorage.getItem('username')
				this.userName = this.d
				// console.log(names)
				// console.log(this.userName)
			}
		},
		watch:{
			d(a,b){
				this.userName = this.d
			}
		}
	}
</script>

<style scoped>
	.my-number{
		width: 100%;
		height: 2.4rem;
		background-color: #fff;
		display: flex;
	}
	.head-pic{
		width: 2.14638rem;
		height: 2.4rem;
		padding-top: 0.59rem;
	}
	.head-pic img{
		width: 1.22222rem;
		height: 1.22222rem;
		border-radius: 50%;
		margin: 0 auto;
	}
	.number-address{
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: #333;
		font-size: 0.48rem;
	}
	.number,.address{
		line-height: 0.6rem;
	}
	.address{
		font-size: 0.32rem;
		position: relative;
	}
	.address::after{
		content: '';
		width: 0.22222rem;
		height: 0.22222rem;
		display: inline-block;
		border-top: 1px solid #bfbfbf;
		border-right: 1px solid #bfbfbf;
		transform: rotateZ(45deg);
		position: absolute;
		top: 0.15rem;
	}
</style>