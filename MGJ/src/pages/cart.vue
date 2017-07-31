<template>
	<div id="cart">
		<carthead @child="parent"></carthead>
		<cartbg></cartbg>
		<cartitems :ss="flag"></cartitems>
		<cartbuy></cartbuy>
	</div>
</template>

<script>

	import Carthead from '../components/cart/cart_head'
	import Cartbg from '../components/cart/cart_bg'
	import Cartitems from '../components/cart/cart_items'
	import Cartbuy from '../components/cart/cart_buy'

	export default {
		components : {
			Carthead,Cartbg,Cartitems,Cartbuy
		},
		data (){
			return {
				state : '',
				flag : true
			}
		},
		methods : {
			parent (data){
				this.state = data;
			}
		},
		watch : {
			// this.abs = this.state.state,
			state (newValue,oldValue){
				this.flag = newValue;
			}
		}
	}

</script>


<style scoped>
	#cart{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #f6f6f6;
		z-index: 999;
	}
</style>