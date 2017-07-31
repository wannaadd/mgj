<template>
	<div class='right-content'>
		<!-- 类别图标 -->
		<div class='list' ref='qq'>
			<ul>
				<li v-for='list of rightListData'>
					<a href="javascript:;">
						<img v-lazy="list.image">
						<p v-text='list.title'></p>
					</a>
				</li>
			</ul>
		</div>
		<!-- 综合、销售、新品 -->
		<div class='select-div' v-show='offHei'>
			<div class='select' :class='{"acitve":targ}'>
				<p @click='select("",1)' :class='{"select-active":1===index}'>综合</p>
				<p @click='select("&sort=sell&",2)' :class='{"select-active":2===index}'>销售</p>
				<p @click='select("&sort=new&",3)' :class='{"select-active":3===index}'>新品</p>
			</div>
		</div>
		<!-- 综合、销售、新品详细内容 -->
		<right-detail ref='a'></right-detail>
	</div>
</template>


<script>
	// 综合、新品
	import RightDetail from './right_detail'

	export default{
		components:{
			RightDetail
		},
		data () {
			return{
				rightListData:[],
				index:1,
				targ:'',
				ind:'',
				offHei:false
			}
		},
		created () {
			this.list(),
			this.tagFun(),
			this.indFun()
		},
		methods:{
			list () {
				this.$http.jsonp('http://mce.mogujie.com/jsonp/makeup/3?pid='+this.$route.params.pid+'&_=1498439540397',{callback:'jsonp'}).then(data =>{
					this.rightListData = data.body.data.categoryNavigation.list
					// console.log(this.rightListData)					
				},err =>{
					console.log(err)
				})
			},
			select (n,index) {
				this.index=index;
				this.$refs.a.detail(n,index)
			},
			tagFun () {
				bus.$on('tag',(tag) => {
					this.targ = tag;
				})
			},
			indFun () {
				bus.$on('ind',(ind) => {
					this.ind = ind;
					bus.$emit('indTwo',this.ind)
				bus.$on('tag',function(tag){
					this.targ=tag;
					// console.log(this.targ)
					})
				})
			}

		},
		watch:{
			'$route.params.pid'(newValue,oldValue){
				this.list()
			}
		},
		updated () {
			if(this.$refs.qq){
				this.offHei = true;
				this.$root.Bus.$emit('height',this.$refs.qq.offsetHeight)
			}
		}
	}
</script>


<style scoped>
/*类别图标*/
	.list{
		padding: .533333rem .4rem 0 .4rem;
		display:flex;
		box-sizing:border-box;
		min-height:10rem;
	}
	.list ul{
		padding-bottom:.466667rem;
		display:flex;
		flex-wrap:wrap;
		border-bottom:1px solid #eaeaea;
	}
	.list li{
		padding-bottom:.2rem;
		margin:.266667rem 0;
		width:33.333333%;
		height:2.533056rem;
		box-sizing:border-box;
		
	}
	.list li a{
		display:flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	.list li img{
		height:1.733056rem;
	}
	.list li p{
		font-size:.32rem;
		text-align:center;
		color:#666;
	}

/*综合、销售、新品*/
	.select-div{
		height:1.066389rem;
	}
	.select{
		display:flex;
		align-items:center;
		width:7.599722rem;
		height:1.066389rem;
		border-bottom:1px solid #eaeaea;
		background-color:#fff;
		z-index:1000;
	}
	.select p{
		width:33.333333%;
		font-size:.373333rem;
		text-align:center;
		border-left:1px solid #eaeaea;
	}
	/*改变综合、销售、新品 样式*/
	.select-active{
		color:#ef4562;
	}
	.acitve{
		position:fixed;
		top:1.226667rem;
	}
</style>