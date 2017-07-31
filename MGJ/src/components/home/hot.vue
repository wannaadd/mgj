<template lang="html">
    <div class="hot">
    	<div class="key-title">热门市场</div>
    	<div class="key-list">
    		<div class="key-item" v-for="items in allData" @click="linked(items.title)">
    			<a href="#">
    				<div class="pic">
    					<img v-lazy="items.image" alt="">
    				</div>
    				<p class="title">{{items.title}}</p>
    			</a>
    		</div>
    	</div>
    </div>
</template>

<script>
    export default{
        props : ['ghot'],
    	data(){
    		return{
    			allData:[],
                shows:false
    		}
    	},
    	created(){
    		bus.$on("data",(res) => {
    			let resault = res[51836].list;
    			this.allData = resault;
                // console.log(this.allData)
    		})
    	},
        methods:{
            linked(a){
                this.shows = true;
                this.$emit('linke',this.shows);
                this.$root.Bus.$emit('zy')
                localStorage.setItem('title',a);
            }
        },
        watch : {
            ghot(a,b){
                this.shows = a;
            }
        }
    }
</script>

<style lang="css" scoped>
    .hot{
    	height: auto;
    	background-color: #fff;
    	margin-bottom: 0.277778rem;
    	padding-top: 0.4rem;
    	padding-bottom: 0.3rem;
    }
    .key-title{
    	height: 0.5333333rem;
    	line-height: 0.5333333rem;
    	color: #333;
    	text-align: center;
    	font-size: 0.4rem;
    	margin-bottom: 0.266666rem;
    	background: url(../../assets/hot.png) no-repeat center;
    	background-size: 41% auto;
    }
    .key-list{
    	display: flex;
    	flex-wrap: wrap;
    }
    .key-item{
    	width: 25%;
    	overflow: hidden;
    	margin-bottom: 0.266666rem;
    	text-align: center;
    }
    .key-item a{
    	display: block;
    }
    .pic{
    	width: 1.6rem;
    	height: 1.6rem;
    	margin: 0 auto;
    }
    .pic img{
    	width: 100%;
    }
    .key-item .title{
    	height: 0.49rem;
    	line-height: 0.49rem;
    	color: #333;
    	margin-top: 0.133rem;
    	overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
        font-size: 0.32rem;
    }
</style>