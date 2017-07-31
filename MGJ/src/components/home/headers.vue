<template lang="html">
    <div class="headers">
		<a href="#"></a>
		<div class="search">简约项链</div>
		<!-- <a href="#"></a> -->
        <router-link to="/cart"></router-link>
    </div>
</template>

<script>
    export default{
    	
    }
</script>

<style lang="css" scoped>
    .headers{
    	position: absolute;
    	top: 0;
    	left: 0;
    	right: 0;
    	z-index: 10;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	height: 1.226667rem;
    	background-color: #fff;
    	border-bottom: 1px solid #eee;
    	box-sizing: border-box;
    }
    .headers a,.search{
    	display: block;
    	height: 0.8rem;
    	width: 1.333333rem;
    }
    .search{
    	width: 6.5rem;
    	border-radius: 0.083333rem;
    	padding-left: 0.8rem;
    	line-height: 0.771667rem;
    	background: #EEEEEE url(../../assets/search_bg.png) no-repeat 0.2rem center;
    	background-size: 6%;
    	font-size: 0.333333rem;
    	color: #999;
    }
    .headers a:first-child{
    	background: url(../../assets/header_wx.png) no-repeat center;
    	background-size: 45%;
    }
    .headers a:last-child{
    	background: url(../../assets/header_car.png) no-repeat center;
    	background-size: 45%;
    }
</style>