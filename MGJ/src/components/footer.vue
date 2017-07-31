<template>
	<div id="footer">
    	<ul>
        	<li>
          		<router-link to="/home">
            		<div class="foot-icon" ></div>
            		<p class="foot-title">首页</p>
          		</router-link>
        	</li>
        	<li>
          		<router-link to="/sort/list/maitKey=41888&miniWallkey=10062603">
          			<div class="foot-icon"></div>
            		<p class="foot-title">分类</p>
          		</router-link>
        	</li>
        	<li>
           		<router-link to="/cart">
           			<div class="foot-icon"></div>
            		<p class="foot-title">购物车</p>
           		</router-link>
        	</li>
        	<li>
          		<router-link to="/mine">
          			<div class="foot-icon"></div>
            		<p class="foot-title">我的</p>
          		</router-link>
        	</li>
      	</ul>
    </div>
</template>

<script>
	export default {
	
	}
</script>

<style scoped>
	#footer{
    width: 100%;
    height: 1.30638rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
  }
  #footer ul{
    width: 100%;
    height:100%;
    display: flex;
    box-sizing: border-box;
    border-top: 1px solid #eee;
  }
  #footer ul li {
    width: 25%;
    text-align: center;
  }
  #footer ul li .foot-icon{
  	width: 0.55555rem;
  	height: 0.55555rem;
  	background: url(../assets/foot_icon.png) left top;
  	background-size: 400%;
  	margin: 0.15rem auto 0;
  }
  #footer ul li:nth-of-type(2) .foot-icon{
  	background-position-x: -0.55555rem;
  }
  #footer ul li:nth-of-type(3) .foot-icon{
  	background-position-x: -1.11rem;
  }
  #footer ul li:nth-of-type(4) .foot-icon{
  	background-position-x: -1.63rem;
  }
  #footer ul li .router-link-active .foot-icon{
  	background-position-y: -0.5555rem;
  }

  #footer ul li .foot-title{
  	font-size: 0.333rem;
  	color: #999;
  	padding-top: 0.1rem;
  }
  #footer ul li .router-link-active .foot-title{
  	color: #ff5577;
  }
</style>