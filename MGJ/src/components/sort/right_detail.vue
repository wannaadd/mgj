<template>
	<div class='cont-list'>
		<div class='cont-hr' v-for='item of detailData' @click='xq(item.acm,item.iid)'>
				<div class='img'>
					<img v-lazy="item.img">
					<p v-text='"已售"+item.sale+"件"'></p>
				</div>
				<p class='goods-name' v-text='item.title'></p>
				<div class='price-div'>
					<p class='price' v-text='"￥"+item.price'></p>
					<p v-text='item.cfav'></p>
				</div>
		</div>
	</div>

</template>


<script>
	export default{
		data () {
			return{
				detailData:[],
				page:'1',
				n:"",
				add:'',
			}
		},
		methods:{
			detail (n,add) {
				this.add = add;
				this.n = n;
				this.$http.jsonp('https://list.mogujie.com/search?cKey=h5-cube&fcid='+this.$route.params.fcid+'&page='+this.page+'&_version=1&pid=&q=&cpc_offset=0'+n+'&_=1498467878971',{callback:'jsonp'}).then(data =>{
					if(add == undefined){
						this.detailData=this.detailData.concat(data.data.result.wall.docs)
					}else{
						this.detailData = data.data.result.wall.docs;
					}
					// console.log(this.detailData)
				// console.log(this.$route.params.fcid)
				},err => {
					console.log(err)
				})
			},
			indTwoFun () {
				bus.$on('indTwo',(page) =>{
					this.page = page;
					// console.log(this.page);
					this.detail(this.n)
				})
			},
			xq (acm,iid) {
				this.$root.Bus.$emit('xq',acm,iid)
			}
		},
		created () {
			this.detail(),
			this.indTwoFun()
		},
		watch:{
			'$route.params.fcid'(newValue,oldValue){
				this.detail('',1)
			}
		}
	}
</script>


<style scoped>
	.cont-list{
		display:flex;
		flex-wrap:wrap;
		width:7.599722rem;
	}
	.cont-hr{
		margin:2% 0 0 2%;
		width:47%;
		border:.08rem;
	}
	.img{
		position:relative;
		height:4.533333rem;
	}
	.img img{
		width:100%;
		height:100%;
	}
	.img p{
		box-sizing:border-box;
		position:absolute;
		left:0;
		bottom:0;
		padding:0 .533333rem 0 .266667rem;
		width:2.5rem;
		height:.666667rem;
		line-height:.666667rem;
		font-size:.3rem;
		color:#fff;
		background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAAAuCAQAAACYcdOGAAACIUlEQVRo3u1YXY/EIAjE++X3y5d72LWKM1iXNDkemKRpK37UKQpOk1/Jg5fodal580tVXpNlfnvf+5PfejfSxv7z32xN0Oupmbde4rdqpI9eqkufCq0V+hzjb+yZqOMEqFPCCWjEMp7aVaNNdW0bLMUfqSIimahTWtpoCfqk9bFOZjN9DIqtff0K9H/yFZmos/8ZCeJ15ykL9GBtDVoiUSKe/y+jZ6KO+wRZKjBV9AuVs93SLuF+90fRYc9EnfWJ/U5kl5JPiy5P/q9Q8ZaxmpEueybqLHCqOCG+qDEE6NJGoM+TuLvYM1GHJPmJh1fik4nWRmqMt3bXMhN1liQMFfP0dsuu3zEx8ffNk/6W78tEncUcFZEO9AkLXIiY1wntD/dOZzfNRJ0e1LG+wzMuThS2nPvbJd5q6lykZ6LuLlfj8I9K2I+NubPPNqAX/XqEnHR7Hc/FcBeyBGA9/7Q62qiw/ZAHIn4WSUUdz+uwzns6a67Gzw4nY54AM8hUYYJ7Ac/mmEYyv2GY2J+F9SB+L9+XiTr0Oj9ycgKE+CJPeoe9t/NPq+v1sWSirvS6MEqvC6P0ujBKrwuj9LowSq97CKXXBcgqve5rlF73EEqvC5C1Q+l1Li1IwB1Kr6MklF53iNLrwii9LozS68IovS6M0uvCKL0ujNLrwii9LozS6x5C6XUBskqv+xql1z2E0usCZO1Qep1LCxJwh9LrKAmp9bo/1LQ2cOf4Fn8AAAAASUVORK5CYII=) left center no-repeat;
		background-size:100%;
		overflow: hidden;
    	text-overflow: ellipsis;
    	white-space: nowrap;
	}
	.goods-name{
		margin:.1rem 0 .1rem .16rem;
		height:.453rem;
		width:3.2525rem;
		font-size:.32rem;
		overflow: hidden;
    	text-overflow: ellipsis;
    	white-space: nowrap;
	}
	.price-div{
		margin:0 .1rem;
		display:flex;
		justify-content:space-between;
		width:3.2525rem;
		height:.626667rem;
		line-height:.626667rem;
	}
	.price-div p:first-child{
		font-size:.4rem;
		font-weight:bold;
		color: #FF5777
	}
	.price-div p:nth-child(2){
		font-size:0.363333rem;
		color:#999;
	}
	.price-div p:nth-child(2)::after{
		margin-left:.1rem;
		height:0.391111rem;
		width:0.391111rem;
		content:'';
		display:inline-block;
		background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAuCAAAAABLtcWwAAAAAmJLR0QA/4ePzL8AAAJVSURBVEjHjZULb6JAFIX5///ggNYXRdRq3fog2tVqo61r3DWRNU3MqkmNNru6oS0qa63Oig9AEOTEyNzL/WRmOHOlyCkp1Uikqpy8RZ1KTi+x0eXUNZDE9XC4+Vq7BEREFoQsomi5A+QLpqdee8yF7AoQ8HU3uIXgBuiC3e+PwuLXeWARgngY/0Tw31mgjIwepFE6B4wQkPRICmDoDHzyqBvjOvhPR6COxHHi+vgHjgC5U+bhHZmm6AVf7sgWQHoqbv3DPpgXWWO3vio+SRqgtG+DajIsNMbkhMYNIazeD+bbigq0vQAdzTcl4iCpmY/QgLdNqD6YTEsmLiSLWQZ96gsabqoPm3hDcZDcAxI4SkDNPVBDlhrg4tlt/bMfA4o8IvTHXf3vEB7V91AA52oZEofC9sWtsojMztfPosiudtZYJpFYnqtfJpBUi7ZeWsRws3KuX6UQ3Z6+nflm3KnzbpQAbjftvVtfg+qC7FVA8JUYATL2oWJfX4HvYGTtAPURtwfi6BMz8IKUPZDCyAJ0kbcHcuhaANHagnSV9eamAXUn19bwzQKUTjb3vVr64zVA0KdpVQ9ZCxDH2B6Y4MoChGgH/y3pkAVg/Ecli8VRGKDXJmAO3jiFO7+/ODEkeMxNwF9DF+6madCbT1rfhiQmJkBzxup7HPBV394efEDsx/6Y6N44ABPE1Mv0ftN7w+KHOv4QNy2Vvd/+vV/B7NY1i8p7J+cBUn196v0U4Ml13qsImRdNXhi1Q3vujEtVn1zyqHnG6lYyyHDJ5pxYpDSTXGaghf8BQmofv0UdUUcAAAAASUVORK5CYII=) center right no-repeat;
		background-size:100%;
	}
</style>
