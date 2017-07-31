<template>
	<div class="my-serve">
		<ul>
			<router-link to='/cart'>
				<li class="serve-item">
					<p class="item-img">
					<span></span>
					</p>
					<p class="item-title">我的购物车</p>
				</li>
			</router-link>
			<li class="serve-item">
				<p class="item-img">
					<span></span>
				</p>
				<p class="item-title">我的拼团</p>
			</li>
			<li class="serve-item">
				<p class="item-img">
					<span></span>
				</p>
				<p class="item-title">我的优惠券</p>
			</li>
			<li class="serve-item">
				<p class="item-img">
					<span></span>
				</p>
				<p class="item-title">我收藏的商品</p>
			</li>
			<li class="serve-item">
				<p class="item-img">
					<span></span>
				</p>
				<p class="item-title">我收藏的店铺</p>
			</li>

			<div class="download-app">
				<img src="https://s10.mogucdn.com/p2/170217/79944927_03dfe3a4b2fg9kd5849093d56ib14_750x130.png">
			</div>

			<li class="serve-item">
				<p class="item-img">
					<span></span>
				</p>
				<p class="item-title">消息通知</p>
			</li>
			<li class="serve-item">
				<p class="item-img">
					<span></span>
				</p>
				<p class="item-title">客服</p>
			</li>
			<li class="serve-item">
				<p class="item-img">
					<span></span>
				</p>
				<p class="item-title">意见反馈</p>
			</li>
		</ul>

		
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>
	.my-serve{
		font-size: 0.42666rem;
		color: #333;
	}
	.serve-item{
		height: 1.34638rem;
		background: url(../../assets/to_right.png) 9.33333rem center no-repeat;
		background-size: 0.16rem;
		display: flex;
		align-items: center;
		background-color: #fff;
	}
	.item-img{
		width: 1.6rem;
	}
	.item-img span{
		display: block;
		width: 50%;
		height: 0.8rem;
		margin: 0 auto;
		background: url(../../assets/serve_item.png) left center no-repeat;
		background-size: 800%;
	}
	.serve-item:nth-child(2) .item-img span{
		background-position-x: -0.8rem;
	}
	.serve-item:nth-child(3) .item-img span{
		background-position-x: -1.6rem;
	}
	.serve-item:nth-child(4) .item-img span{
		background-position-x: -2.4rem;
	}
	.serve-item:nth-child(5) .item-img span{
		background-position-x: -3.2rem;
	}
	.serve-item:nth-child(6) .item-img span{
		background-position-x: -4rem;
	}
	.serve-item:nth-child(7) .item-img span{
		background-position-x: -4.8rem;
	}
	.serve-item:nth-child(8) .item-img span{
		background-position-x: -5.6rem;
	}
	.item-title{
		width: 8.4rem;
		height: 100%;
		line-height: 1.34638rem;
		border-bottom: 1px solid #e5e5e5
	}

	.download-app{
		width: 100%;
		height: 1.73305rem;
		margin: 0.26666rem 0;
	}
	.download-app img{
		width: 100%;
	}

	
	::-webkit-scrollbar{
	    width: 0;
	}
</style>