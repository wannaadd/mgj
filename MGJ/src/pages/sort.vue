<template>
	<div>
		<div id='sort'>
			<div class="header">
				<headers></headers>	
			</div>
			<div class="content">
				<div class="left">
					<left-list></left-list>
				</div>
				<div class="right" @scroll='onScroll($event)'>
					<router-view name='right'></router-view>	
				</div>
			</div>
		</div>
	<goods-details></goods-details>
	</div>
</template>

<script>
	import headers from '../components/home/headers'
	import leftList from '../components/sort/left_list'
	import goodsDetails from '../components/sort/details'
	export default{
		components:{
			headers,
			leftList,
			goodsDetails
		},
		data () {
			return {
				num:'',
				tag:'',
				pd:true,
				ind:'1',
				height:''
			}
		},
		created () {
			this.$root.Bus.$on('height',(h) => {
				this.height = h;
			})
		},
		methods:{
			onScroll (event) {
				let scrollTop=event.target.scrollTop;
				let innerWidth=event.path[8].innerWidth;
				let innerHeight=event.path[8].innerHeight;
				this.num=innerWidth/360*this.height;
				if (scrollTop >= parseInt(this.num)) {
					this.tag=true
				}else{
					this.tag=false
				}
				let h = scrollTop+event.target.clientHeight;
				let pd = true;
				if( h>= event.target.scrollHeight*.8){
					if(this.pd){
						this.pd = false;
						setTimeout(() => {
							this.ind++;
							bus.$emit('ind',this.ind)
							this.pd = true;
						},2000)
					}	
				}
				bus.$emit('tag',this.tag)
			}
		}
	}
</script>

<style lang="css" scoped>
	#sort{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 1.30638rem;
	}
	.header{
		position: absolute;
		left: 0;
		right: 0;
		height: 1.226667rem;
	}
	.content{
		position: absolute;
		top: 1.226667rem;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
	}
	.left{
		position: absolute;
		top: 0;
		left:0;
		bottom: 0;
		overflow:auto;
		width:2.666667rem;
	}
	.right{
		position: absolute;
		top: 0;
		right:0;
		bottom: 0;
		width: 7.600278rem;
		background-color:#fff;
		overflow:auto;
		z-index:2;
	}
</style>