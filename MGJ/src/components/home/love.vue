<template lang="html">
    <div class="love">
        
        <div class="key-list">
            <a class="key-item" v-for="items in allData" @click = "loveLink(items.acm,items.iid || items.tradeItemId)">
                <div class="pic">
                    <img v-lazy="items.img" alt="">
                </div>
                <div class="name-tags">
                <!-- 热卖 -->
                    <span class="title-tag" v-for="ite in items.leftbottom_taglist" :style="{'color':ite.color,'background':ite.bgColor}">{{ite.content}}</span>
                <!-- 商品 -->
                    <span class="title-tag" v-for="item in items.props">{{item}}</span>
                </div>
                <div class="bot-box">
                    <p class="price">￥{{items.price}}</p>
                    <p class="p-feed">{{items.cfav}}</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default{
        props:['ds'],
        data(){
            return{
                allData:[],
                page:1
            }
        },
        created(){
            this.access()
        },
        watch:{
            ds(a,b){
            	this.allData = a
                // console.log(a)
            }
        },
        methods:{
            access(){
                this.$http.jsonp('https://list.mogujie.com/search?cKey=h5-shopping&fcid=&pid=9750&searchTag=&sort=pop&page='+this.page+'&_version=61&_=1498616614927',{callback:'jsonp'}).then(data => {
	                let resault = data.body.result.wall.docs;
	                this.allData = this.allData.concat(resault);
	                // console.log(this.allData)
	            },err => {
	                console.log(err);
	            })
            },
            loveLink(acm,iid){
            	this.$router.push({path:'/sort'})
            	setTimeout(() => {this.$root.Bus.$emit('xq',acm,iid)},1)
            	// console.log(acm,iid)
            	// console.log(this.$root.Bus)
            }
        },
        mounted(){
            let _this = this
            this.page = _this.page
            let page = 1;
            document.getElementById('home').onscroll = function(){
                // home高度
                let sg = document.getElementById('home').scrollHeight
                let hh = document.getElementById('home').offsetHeight
                // 滚动距离
                let sh = document.getElementById('home').scrollTop
                let bfb = sg * 0.9
                if(sh == sg-hh){
                    page++
                    _this.page = page
                    setTimeout(function(){
                        _this.access()
                    },1000)
                }
            }
        }
    }
</script>

<style lang="css" scoped>
    .love{
        /*min-height: 1000px;*/
        height: auto;
        margin-bottom: 0.277778rem;
        padding-top: 0.1rem;
        padding-bottom: 0.1rem;
    }
    .key-list a{
        display: block;
    }
    .key-list{
        display: flex;
        flex-wrap: wrap;
    }
    .key-item{
        height: 8.266666rem;
        width: 47%;
        margin: 2% 0 0 2%;
        background: white;
        border-radius: 0.08rem;
    }
    .pic{
        height: 6.16rem;
        background-color: #E5E5E5;
        overflow: hidden;
    }
    .pic img{
        width: 100%;
    }
    .name-tags{
        height: 1.15rem;
        overflow: hidden;
        margin: 0.2rem 0.24rem 0.17rem 0.133rem;
    }
    .title-tag{
        display: inline-block;
        height: 0.38rem;
        line-height: 0.48rem;
        padding: 0.08rem;
        margin: 0 0 .08rem .08rem;
        font-size: 0.3rem;
        background: #eff3f6;
        color: #5a6f7a;
    }
    .bot-box{
        display: flex;
        justify-content: space-between;
        margin: 0 0.24rem;
    }
    .price{
        max-width: 45%;
        margin-top: 0.027rem;
        color: #333;
        font-weight: 700;
        font-size: 0.4rem;
        overflow: hidden;
    }
    .p-feed{
        max-width: 45%;
        height: 0.373rem;
        margin-top: 0.16rem;
        padding-right: 0.4rem;
        background: url(../../assets/love.png) no-repeat right center;
        background-size: 0.32rem auto;
        font-size: 0.32rem;
        color: #999;
    }
</style>