<template>
      <swiper :options="swiperOption">
        <swiper-slide v-for = "items in allData" :key="items">
          <a href="#"><img :src="items.image_800" alt=""></a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</template>

<script>
  export default {
    data() {
      return {
        allData:[],
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 2500,
          autoplayDisableOnInteraction: false,
          loop:true
        }
      }
    },
    created(){
      bus.$on('data',(acess) => {
        this.allData = acess[51822].list;
        // console.log(this.allData)
      })
    }
  }
</script>

<style lang="css" scoped>
  .swiper-container{
    height: 5.199722rem;
  }
  .swiper-slide img{
    width: 100%;
  }
  .swiper-pagination{
    padding-left: 5px;
    text-align: left;
  }
  .swiper-pagination-bullet{
    width: 6px !important;
    height: 6px !important;
  }
  .swiper-pagination-bullets{
    bottom: 1px !important;
  }
</style>