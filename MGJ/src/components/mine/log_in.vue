<template>
	<div class="login" v-show='state'>
		<div class="login-head">
			<div class="head-left">
				<a href="javascript:void(history.back());">
					<i class="back-icon"></i>
				</a>
			</div>
			<div class="head-title">
				登录
			</div>
			<div class="head-right">
				<a href="">忘记密码</a>
			</div>
		</div>
		<form @submit.prevent = "handSubmit">
		<!-- 输入账号密码 -->
		<div class="login-number">
			<div class="user-number">
				<p>蘑菇街账号</p>
				<input type="text" placeholder="输入用户名／邮箱／手机" maxlength="32" v-model="username">
			</div>
			<div class="user-pwd">
				<p>密码</p>
				<input type="text" placeholder="输入密码" maxlength="32" v-model="password">
			</div>
		</div>
		<!-- 错误提示 -->
		<ul class="err">
			<li v-for="err in errors" v-text="err"></li>
		</ul>
		<!-- 登录按钮 -->
		<button type="submit" class="login-button">
			登录
		</button>
		</form>
		<!-- 作弊登录和注册 -->
		<div class="cheat">
			<span class="no-pwd">免密登录</span>
			<span class="login-resgiter">注册账号</span>
		</div>

		<div class="blank"></div>

		<!-- QQ登录 -->
		<div class="login-QQ">
			<img src="https://s10.mogucdn.com/p1/150803/upload_ieztmnzwmztdsoddgizdambqgyyde_210x210.png">
		</div>
	</div>
</template>

<script>
	export default {
		data (){
			return {
				username : '',
				password : '',
				state:true,
				name:''
			}
		},
		vuerify:{
			username:'required',
			password:{
				test:/\w{6,}/,
				message:'至少六位字符'
			}
		},
		computed:{
			errors(){
				return this.$vuerify.$errors
				// $errors	数据校验失败的错误信息, 例如 username 校验失败会返回 { username: '至少 6 位字符' }
			}
		},
		methods:{
			handSubmit(){
				// check	检查指定字段，传入数组，返回 Boolean
				if(this.$vuerify.check()){
					let user = this.username;
					localStorage.setItem('username',user);
					let names = localStorage.getItem('username')
					this.name = names
					this.$emit('dl',this.name)
					// console.log(this.name)
					this.state = false;
				}
			}
		},
		created (){
			if(localStorage.getItem('username')){
				this.$emit('dl',localStorage.getItem('username'));
				this.state = false;
			}
		}
	}
</script>

<style scoped>
	.err{
		margin-top: 1rem;
		color: red;
	}
	.err li{
		height: 0.5rem;
		text-align: center;
	}
	.login{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #fff;
		z-index: 999;
	}
	.login-head{
		height: 1.2rem;
		border-bottom: 1px solid #c9c7c8;
		box-sizing: border-box;
		background-color: #fafafa;
		display: -webkit-box;
	    display: -webkit-flex;
	    display: -moz-box;
	    display: -ms-flexbox;
		display: flex;
	}
	.head-left{
		width: 10%;
		height: 100%;
		text-align: center;
	}
	.back-icon{
		width: 0.5833rem;
		height: 0.5833rem;
		display: inline-block;
		background: url(data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzAzNzFFNkY2QTk1MTFFNTgwMjJGMjc1MkExMkI2OTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzAzNzFFNzA2QTk1MTFFNTgwMjJGMjc1MkExMkI2OTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MDM3MUU2RDZBOTUxMUU1ODAyMkYyNzUyQTEyQjY5NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MDM3MUU2RTZBOTUxMUU1ODAyMkYyNzUyQTEyQjY5NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgMDAwMDAwMDAwMBAQEBAQEBAgEBAgICAQICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA//AABEIAEAAQAMBEQACEQEDEQH/xABiAAEBAAMBAAAAAAAAAAAAAAAACQYHCAoBAQAAAAAAAAAAAAAAAAAAAAAQAAEEAgMAAQQCAwAAAAAAAAQCAwUGAAEHCAkSERMjFCFBIjIVEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD3oYDAYDAYDAYDAYDAYDAn93q9EOIejUDBtWIErkHlO3KbdqfE9ekxgJouI0SoYqyz0g6NIJrldS80scZ5Y77x5idtDsuJaKdGDtulWJ+3U2p2wqAmqoVZ6zBWEmr2MbQdhrb81FiyT0DOia2rQszDuE7HKb+u/g+2rX9YGTYDAYDAYE5fQ30MofSChNiiNgXPnm5gva4141+844lCXHHA0XO5oDcQaBT48xCkttoU2VLlNqFGUjSCihA5B88vPK+S98c72d7HD7n2JuZ7NspVKtjLbiuO1ONtKibNZolTTYYFwADbabhYVtpsWqittfiQehpqMC7GAwGAwGBOv0M9BaR0f4+HbGHFuXOl4EJa4u44+bzja16XsRVwt+g3GywqjGFq+KWm1ILlik/qjbRpJRQgceeefnnfJi+Od7O9jh1z7E3M5m2Umk2xlC1cdKWhtURZrNEKbQGBcAA0NNwsK202LVRW2vxIPQ01GBdfAYDAYDAYEtvSzzxF7j1eH5A47l3Kh2S4sA2rjqxakSY4CeCDNdmh6jKlMuJVDvplXFkRkm18XATHN7XvbS1bQGofN/0fmuTZojqT21HIoXayhPkVxh+xjohl8nKhUbQQMSO5ppgPkMMdr7hDDf4ZVnX7Yn11txtsLT4DAYDAYDAYEqfSDzfhe28KPynxYQxQu0dCYHNp1xCIXDJuCYZejIyt2STD20QHIBkNJVES6VaejntJSpW2N/jDV3m/6QTXJ00R1K7ajv0LtbQnyK4w/Yx0QyuTlQyNoIGJHXpocPkMMdr7hA7f0ZlGdftifXW3G2wtPgMBgMBgMBgS79B/NWqdxW4XkahTovE3ZGmvRzlc5KGbMGHmw4whsgCMtT0N8JVBEO8jTsZKD/M0BafjrTjW9IQFDOMoO21jjihVu+2nV5vEBTq1DXC56DTH6tdmjYcMOcsX6KP8Rf8AsyTLhHw1/r9z6fxgZxgMBgMBgMBgMBgMD//Z) 50% no-repeat;
		background-size: 100% 100%;
		margin-top: 30%;
	}
	.head-title{
		width: 80%;
		height: 100%;
		text-align: center;
		line-height: 1.2rem;
		color: #5e5e5e;
		font-size: 0.48rem;
		font-weight: 800;
	}
	.head-right{
		width: 10%;
		height: 100%;
		line-height: 1.2rem;
		position: relative;
	}
	.head-right a{
		color: #5e5e5e;
		position: absolute;
		right: 20%;
		white-space: nowrap;
		font-size: 0.42666rem;
	}
	/*账号密码*/
	.login-number{
		padding: 1.33333rem 0.4rem 0;
	}
	.user-number p,.user-pwd p{
		font-size: 0.37333rem;
		color: #666;
		text-align: center;
		margin-bottom: 0.53333rem;
	}
	.user-number input,.user-pwd input{
		width: 100%;
		height: 0.84rem;
		text-align: center;
		border: none;
		border-bottom: 1px solid #ededed;
		box-sizing: border-box;
		outline: none;
		font-size: 0.64rem;
		color: #333;
		padding-bottom: 0.2rem;
	}
	.user-pwd{
		margin-top: 0.6rem;
	}
	::-webkit-input-placeholder {
		color: #efefef;
	}
	.login-button{
		display: block;
		width: 9.2rem;
		height: 1.33333rem;
		background: #ff1877;
		margin: 0 auto;
		border-radius: 3px;
		margin-top: 0.65333rem;
		color: #fff;
		line-height: 1.33333rem;
		text-align: center;
		font-size: 0.64rem;
		border:none;
		outline: none;
	}
	.cheat{
		width: 9.2rem;
		margin: 0 auto;
		display: flex;
		padding-top: 0.4rem;
		align-items: center;
		justify-content: space-between;
	}
	.no-pwd{
		color: #999;
		font-size: 0.37333rem;
	}
	.login-resgiter{
		color: #ff5777;
		font-size: 0.37333rem;
	}
	.blank{
		height: 2.9rem;
	}
	.login-QQ{
		width: 9.2rem;
		height: 2.97222rem;
		margin: 0 auto;
	}
	.login-QQ img{
		height: 100%;
		margin: 0 auto;
	}
</style>