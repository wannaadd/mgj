<template>
	<ul>
		<li v-for='(item,idx) of leftData.list'>
			<router-link :to='"/sort/list/maitKey="+item.maitKey+"&miniWallkey="+item.miniWallkey'>
				<p v-text='item.title'></p>
			</router-link>
		</li>
	</ul>
</template>


<script>
	export default{
		data () {
			return{
				leftData:[],
				idxs : 0
			}
		},
		created () {
			this.$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=41789%2C4604',{callback:"jsonp"}).then(data =>{
				this.leftData = data.body.data[41789]
				// console.log(data.body.data[41789].list)
			},err =>{
				console.log(err)
			});
		},
		methods : {

		}
	}
</script>


<style scoped>
	ul{
		font-size:0;
	}
	li{
		height: 1.199722rem;
		background-color: #f6f6f6;
	}
	li p{
		width: 2.133333rem;
		height: 0.399722rem;
		line-height:  0.399722rem;
		text-align: center;
		font-size: 0.379722rem;
		color:#777;
		border-left:4px solid #f6f6f6;
	}
	li a{
		display:flex;
		align-items:center;
		height:100%;
		width:100%;
	}
	.router-link-active{
		background-color:#fff;
	}
	.router-link-active p{
		font-weight:bold;
		color:#FF5577;
		border-left:4px solid #FF5577;
	}

</style>
