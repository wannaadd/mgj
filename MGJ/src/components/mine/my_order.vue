<template>
	<div class="my-order">
		<a href="#">
			<div class="show-order">
				<p class="show-icon">
					<img src="https://s10.mogucdn.com/p1/160727/upload_ie4wenzume4tsmjqmezdambqgqyde_56x56.png">
				</p>
				<p class="show-text">我的订单</p>
			</div>
		</a>

		<div class="order-about">
			<a href="#" class="about-list">
				<span></span>
				<p>代付款</p>
			</a>
			<a href="#" class="about-list">
				<span></span>
				<p>代收货</p>
			</a>
			<a href="#" class="about-list">
				<span></span>
				<p>代评价</p>
			</a>
			<a href="#" class="about-list">
				<span></span>
				<p>售后</p>
			</a>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.my-order{
		margin: 0.26666rem 0;
		background-color: #fff;
	}
	.show-order{
		height: 1.33333rem;
		border-bottom: 2px solid #f3f3f3;
		box-sizing: border-box;
		background: url(../../assets/to_right.png) 9.33333rem center no-repeat;
		background-size: 0.16rem;
		display: flex;
		align-items: center;
	}
	.show-order p{
		display: inline-block;
		font-size: 0.42666rem;
		color: #333;
	}
	.show-icon img{
		width: 50%;
		margin: 0 auto;
	}
	.order-about {
		height: 1.70666rem;
		display: flex;
		align-items: center;
	}
	.about-list{
		width: 25%;
	}
	.about-list span{
		width: 0.55rem;
		height: 0.55rem;
		margin: 0 auto;
		display: block;
		background: url(../../assets/order_icon.png) no-repeat 0 center;
		background-size: 400%;
	}
	.about-list:nth-child(2) span{
		background-position-x: -0.52777rem;
	}
	.about-list:nth-child(3) span{
		background-position-x: -1.1rem;
	}
	.about-list:nth-child(4) span{
		background-position-x: -1.65rem;
	}
	.about-list p{
		text-align: center;
		font-size: 0.37333rem;
		color: #333;
		margin-top: 0.1rem;
	}
</style>