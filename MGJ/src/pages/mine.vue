<template>
	<div>
		<login @dl="dll"></login>
		<div id="mine" v-if="true">
			<mynumber :d="name"></mynumber>
			<myorder></myorder>
			<myserve></myserve>
			<logout></logout>
		</div>
	</div>
</template>

<script>

	import Mynumber from '../components/mine/my_number'
	import Myorder from '../components/mine/my_order'
	import Myserve from '../components/mine/my_serve'
	import Logout from '../components/mine/log_out'
	import Login from '../components/mine/log_in'

	export default {
		components : {
			Mynumber,Myorder,Myserve,Logout,Login
		},
		data(){
			return{
				name:""
			}
		},
		methods:{
			dll(a){
				this.name = a
				console.log(this.name)
			}
		}
	}

</script>

<style scoped>
	#mine{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 1.30638rem;
		background-color: #f6f6f6;
		overflow: auto;
	}
</style>