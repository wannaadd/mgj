<template lang="html">
    <div class="dehead-head">
		<div class="head">
			<div class="head-left">
				<a href="#" @click="take()">
					<i class="back-icon"></i>
				</a>
			</div><div class="dehead-title">
				{{tit}}<span></span>
			</div>
			<div class="head-right">
				<router-link to="/cart"></router-link>
			</div>
		</div>
	</div>
</template>

<script>
    export default{
    	props:['sho'],
    	data(){
    		return{
    			selfSho:"",
    			tit:''
    		}
    	},
    	created(){
    		// console.log(this.selfSho)
    		let title = localStorage.getItem('title')
    		this.tit = title
                // console.log(title)
    	},
    	watch:{
    		sho(a,b){
    			this.selfSho = a
    			// console.log(this.selfSho)
    		}
    	},
    	methods:{
    		take(){
    			this.selfSho = false
    			this.$emit('xs',this.selfSho)
    			// console.log(this.selfSho)
    		}
    	}
    }
</script>

<style lang="css" scoped>
    .dehead-head{
		height: 1.2rem;
		box-sizing: border-box;
		border-bottom: 1px solid #d4d3d4;
		background-color: #fafafa;
	}
	.head{
		height: 100%;
		display: -webkit-box;
	    display: -webkit-flex;
	    display: -moz-box;
	    display: -ms-flexbox;
	    display: flex;
	}
	.head-left{
		width: 10%;
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
	.dehead-title{
		width: 80%;
		height: 100%;
		font-size: 0.5rem;
		text-align: center;
		line-height: 1.2rem;
		font-weight: 800;
		color: #5e5e5e;
		white-space: nowrap;
    	text-overflow: ellipsis;
    	overflow: hidden;
	}
	.head-right{
		width: 10%;
		position: relative;
		display: -webkit-box;
	    display: -webkit-flex;
	    display: -moz-box;
	    display: -ms-flexbox;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	}
	.head-right a{
		width: 0.66666rem;
		height: 0.66666rem;
		display: inline-block;
		background: url(../../assets/header_car.png) no-repeat center;
		background-size: 90%;
	}
</style>