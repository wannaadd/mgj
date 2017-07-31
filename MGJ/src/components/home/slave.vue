<template lang="html">
    <div class="slave">
    	<!-- 秒杀倒计时 -->
    	<div class="count_down">
    		<div class="left_part">
    			<div class="title">
    				<span>{{title}}</span>
    				•
					<span>{{viceTitle}}</span>
    			</div>
	    		<div class="counting">
	    			<span class="count_num hh">{{hour}}</span>
	    			:
	    			<span class="count_num mm">{{minute}}</span>
	    			:
	    			<span class="count_num ss">{{second}}</span>
	    		</div>
    		</div>
    		<a class="more" href="#">
    			<img src="https://s10.mogucdn.com/p1/160719/upload_ifrwkntcmi4diolehezdambqhayde_84x20.png" alt="">
    		</a>
    	</div>
    	<!-- grab组件 -->
    	<div class="slave_c">
    		<grab></grab>
    	</div>
    	<!-- <div @click="date()">点击</div> -->
    </div>
</template>

<script>
	import Grab from './grab'
    export default{
    	components:{
    		Grab
    	},
    	data(){
    		return{
    			// allData:[],
    			title:"",
    			viceTitle:"",
    			time:"",
    			hour:"",
    			minute:"",
    			second:""
    		}
    	},
    	created(){
    		bus.$on('data',(acess) => {
    			this.title = acess[41119].list[0].title;
    			this.viceTitle = acess[41119].list[0].viceTitle;
    			this.time = acess[41119].list[0].time;
    			// console.log(this.time)
    		})
    	},
    	methods:{
    		dat(){
                let mss=this.time;
                let timer = setInterval(() => {
                    if(mss <= 0){
                        mss = this.time;
                      // this.time = 0;
                      // clearIntelval(timer)
                    }
                    mss--;
                    let hours = parseInt((mss % (60 * 60 * 24)) / (60 * 60));
                    let minutes = parseInt((mss % (60 * 60)) / 60);
                    var seconds = (mss % 60);
                    if(seconds<10){
                        seconds = "0"+seconds;
                    }
                    if(minutes<10){
                        minutes = "0"+minutes;
                    }
                    if(hours<10){
                        hours = "0"+hours;
                    }
                    this.hour = hours;
                    this.minute = minutes;
                    this.second = seconds;
                },1000)
            }
    	},
    	watch:{
    		time(a,b){
    			 this.dat();
    		}
    	}
    }
</script>

<style lang="css" scoped>
    .slave{
    	height: 4.946667rem;
    	background-color: #fff;
    	margin-bottom: 0.277778rem;
    }
    .count_down{
    	display:flex;
    	justify-content: space-between;
    	flex-wrap: nowrap;
    	height: 0.583333rem;
    	padding: 0.4rem 0.47rem .27rem 0.4rem;
    	font-size: 0.38rem;
    }
    .left_part{
    	display: flex;
    }
    .left_part .title::before{
    	content: "";
    	display: block;
    	width: 3.085rem;
    }
    .more{
    	width: 1.399722rem;
    }
    .more img{
    	width: 100%;
    }
    .counting{
    	padding-left: 0.133333rem;
    }
    .counting span{
        padding-top: 0.044rem;
    }
    .count_num{
    	color: white;
    	border-radius: 0.08rem;
    	display: inline-block;
    	line-height: 0.533333rem;
    	padding: 0 0.08rem;
    	font-size: 0.333333rem;
    	background-color: black;
    	margin: auto 0.07rem;
    }
    .slave_c{
    	overflow-x: scroll;
	    overflow-y: hidden;
    	padding: 0.133rem 0 0.213rem 0.4rem;
    }
    ::-webkit-scrollbar{
	    width: 0px;
	    height: 0px;
	    background-color: white;
	}
</style>