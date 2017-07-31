<template>
	<div class="log-out">
		<router-link to="/home" class="out-button" >
			<p @click='logout()'>退出登录</p>
		</router-link>
	</div>
</template>

<script>
	export default {
		methods :{
			logout (){
				localStorage.clear('username');

			}
		}
	}
</script>

<style scoped>
	/*退出登录*/
	.log-out{
		height: 2rem;
		margin-top: 0.4rem;
	}
	.out-button{
		width: 8.8rem;
		height: 1.06638rem;
		display: block;
		background-color: #ff5777;
		border-radius: 5px;
		color: #fff;
		font-size: 0.4rem;
		line-height: 1.06638rem;
		text-align: center;
		margin: 0 auto;
	}
</style>