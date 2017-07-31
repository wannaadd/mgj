<template lang="html">
	<ul class="top-s">
		<li v-for="items in allData">
			<a class="topshow">
				<div class="name">{{items.title}}</div>
				<div class="title">{{items.description}}</div>
				<div class="pic">
					<img v-lazy="items.image" alt="">
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
	        this.allData = acess[51827].list;
	        // console.log(this.allData)
      	  })
	    }
	}
</script>

<style lang="css" scoped>
	.topshow{
		width: 2.666667rem;
		height: 2.478722rem;
		text-align: center;
		margin: 0 auto;
	}
	.topshow .name,.topshow .title{
		font-size: 0.388889rem;
		color: #ff6801;
		overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.topshow .title{
		margin: 0.066667rem auto 0.1rem;
		font-size: 0.333333rem;
		color: #666666;
	}
	.topshow .pic{
		width: 1.333333rem;
		height: 1.333333rem;
		margin: 0 auto;
	}
	.topshow .pic img{
		width: 100%;
	}

	.top-s{
		display: flex;
	}
	.top-s li{
		display: flex;
		align-items: center;
		width: 33.333333%;
	}
	.top-s li:nth-child(2)::after,.top-s li:nth-child(2)::before{
		content: " ";
		display: block;
		height: 2.027778rem;
		width: 0.027778rem;
		background-color: #eeeeee;
	}
</style>