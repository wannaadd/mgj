<template lang="html">
    <div class="substantial">
    	<h2 class="header">超实惠-促销直达</h2>
    	<!-- 促销直达 -->
    	<div class="nonstop">
    		<a class="left">
    			<div class="title-box">
    				<h1 class="name">{{arr1.title}}</h1>
    				<p class="title">{{arr1.viceTitle | del}}</p>
    			</div>
    			<div class="pic">
    				<img v-lazy="arr1.image" alt="">
    			</div>
    		</a>
    		<div class="right">
    			<a class="top">
    				<div class="top-box">
	    				<h1 class="name">{{arr2.title}}</h1>
	    				<p class="title">{{arr2.viceTitle | del}}</p>
	    				<div class="tu">
	    					<img v-lazy="arr2 .image" alt="">
	    				</div>
    				</div>
    			</a>
    			<a class="bottom">
    				<div class="top-box">
	    				<h1 class="name">{{arr3.title}}</h1>
	    				<p class="title">{{arr3.viceTitle | del}}</p>
	    				<div class="tu">
	    					<img v-lazy="arr3 .image" alt="">
	    				</div>
    				</div>
    			</a>
    		</div>
    	</div>
		<!-- 下三块等同大小 -->
		<div class="sames">
			<ul>
				<li v-for="item in arr4">
					<a href="#">
						<h1 class="name">{{item.title}}</h1>
		    			<p class="title">{{item.viceTitle | del}}</p>
		    			<div class="pics">
		    				<img v-lazy="item.image" alt="">
		    			</div>
		    		</a>
				</li>
			</ul>
		</div>
    </div>
</template>

<script>
    export default{
    	data(){
    		return{
    			allData:[],
    			arr1:{},
    			arr2:{},
    			arr3:{},
    			arr4:[]
    		}
    	},
    	filters:{
    		del(str){
                var str1 = String(str)
    			var ss = str1.indexOf("{") 
    			str1 = str1.substr(ss+1);
    			var sss = str1.indexOf("}") 
    			str1 = str1.substr(0,sss);
    			// str.replace(s," ")
    			return str1
    		}
    	},
    	created(){
    		bus.$on('data',(access) => {
    			let resault = access[51833].list;
    			this.allData = resault;
    			for(var item in this.allData){
    				if(item == 0){
    					this.arr1 = this.allData[item];
    					// console.log(this.arr1)
    				}
    				if(item == 1){
    					this.arr2 = this.allData[item];
    					// console.log(this.arr2)
    				}
    				if(item == 2){
    					this.arr3 = this.allData[item];
    					// console.log(this.arr3)
    				}
    				if(item == 3 || item == 4 || item == 5){
    					this.arr4.push(this.allData[item]);
    					// console.log(this.arr4)
    				}
    			}
    		})
    	}
    }
</script>

<style lang="css" scoped>
	.substantial{
		height: 8.732639rem;
		background-color: white;
		margin-bottom: 0.277778rem;
	}
    .header{
    	height: 1.066666rem;
    	line-height: 1.12rem;
    	color: #333;
    	text-indent: 0.266666rem;
    	font-size: 0.38rem;
    	font-weight: normal;
    	border-bottom: 1px solid #E5E5E5;
    	box-sizing: border-box;
    }
    .nonstop{
    	display: flex;
    	height: 4.266666rem;
    	box-sizing: border-box;
    	border-bottom: 1px solid #E5E5E5;
    }
    .nonstop .right,.nonstop>a{
    	width: 50%;
    	height: 100%;
    }
    .nonstop .left{
    	box-sizing: border-box;
    	border-right: 1px solid #E5E5E5;
    }
    .title-box{
    	text-align: center;
    	margin-top: 0.62rem;
    }
    .name{
    	font-size: 0.373rem;
    	line-height: 0.533rem;
    	overflow: hidden;
    	white-space: nowrap;
    	text-overflow: ellipsis;
    	padding-left: 0.26rem;
    }
    .title{
    	font-size: 0.32rem;
    	line-height: 0.44rem;
    	color: #ff5f7e;
    	overflow: hidden;
    	white-space: nowrap;
    	text-overflow: ellipsis;
    }
    .pic{
    	width: 2.666666rem;
    	height: 2.666666rem;
    	margin: 0 auto;
    }
    .pic img{
    	width: 100%;
    }
    .right>a{
    	display: block;
    	height: 50%;
    	text-align: left;
    }
    .top{
    	box-sizing: border-box;
    	border-bottom: 1px solid #E5E5E5;
    }
    .top .title,.bottom .title{
    	padding-left: 0.26rem;
    }
    .top-box{
    	position: relative;
    	height: 100%;
    	display: flex;
    	flex-direction: column;
    	justify-content: center;
    }
    .tu{
    	position: absolute;
    	right: 0;
    	height: 100%;
    }
    .tu img{
    	height: 100%;
    }
    .sames{
    	/*height: 3.455278rem;*/
    	overflow: hidden;
    }
    .sames ul{
    	display: flex;
    	box-sizing: border-box;
    	text-align: center;
    }
    .sames ul li .name{
    	margin-top: 0.173333rem;
    	padding: 0;
    }
    .sames ul li{
    	width: 33.333333%;
    	height: 3.455278rem;
    }
    .sames ul li:nth-child(2){
    	border-left: 1px solid #E5E5E5;
    	border-right: 1px solid #E5E5E5;
    }
    .pics{
    	width: 2.132778rem;
    	height: 2.132778rem;
    	margin:0.133rem auto 0 auto;
    }
    .pics img{
    	width: 100%;
    }
</style>