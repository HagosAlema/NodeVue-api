<template>
  <div>
    <div class="main_menu">
      <swiper :options="swiperOption" class="main-swiper">
        <!--<swiper-slide v-for="(menu, index) in mainMenuList" :key="index">-->
        <swiper-slide>
          <a href="/" v-bind:class="{'workM':true, 'active':($route.path == '/')}" style="text-decoration: none; line-height: 24px">Infinite Scroll<span></span></a>
        </swiper-slide>
        <swiper-slide>
          <a href="/resize" v-bind:class="{'workM':true, 'active':($route.path == '/resize')}" style="text-decoration: none; line-height: 24px">Image Resize<span></span></a>
        </swiper-slide>
        <swiper-slide>
          <a href="/product/add" v-bind:class="{'workM':true, 'active':($route.path == '/product/add')}" style="text-decoration: none; line-height: 24px">Add Product<span></span></a>
        </swiper-slide>
        <swiper-slide>
          <a href="/login" v-bind:class="{'workM':true, 'active':($route.path == '/login')}" style="text-decoration: none; line-height: 24px">Login<span></span></a>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
// require('bxslider')
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'header-nav',
  components: {
    swiper,
    swiperSlide
  },
  created () {
    // this.getHeaderData()
  },
  mounted () {
    // main 일때만 배너 스크롤 보여주기
    if (this.$route.path === '/') {
      // this.headerdefault()
      window.addEventListener('scroll', this.headerscroll)
    } else {
      // this.headersubdefault()
      window.addEventListener('scroll', this.headersubdefault)
    }

    // this.mainslide()
    // this.maingnb()
  },
  data () {
    return {
      swipervisual: {
        slidesPerView: 4,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperOption: {
        slidesPerView: 4
      },
      mainBannerList: [
        {id: 1, url: require('../assets/img/12.png')},
        {id: 2, url: require('../assets/img/12.png')},
        {id: 3, url: require('../assets/img/12.png')}
      ],
      mainMenuList: ['Home', 'New', 'Brand', 'Sales'],
      searchList: ['fjlsdjf', 'fdjflsdjfds', 'hohofdsf'],
      searchKeyword: ''
    }
  },
  methods: {
    getHeaderData: function () {
      const url = '/back'
      this.$http.get(`${url}/header`)
        .then((result) => {
          this.mainMenuList = result.data.data.mainMenu
          this.searchList = result.data.data.searchList
        })
    }
    // mainslide: () => { // TODO 배너 호출해서 받아오기. 메인 비쥬얼 슬라이드
    //   $('.mv_con').bxSlider({
    //     auto: true,
    //     infiniteLoop: true,
    //     controls: false,
    //     pause: 4000,
    //     touchEnabled: true
    //   })
    // },
    // maingnb: () => { // 메인 gnb 슬라이드
    //   $('.main_gnb ul').bxSlider({
    //     auto: false,
    //     pause: 3000,
    //     infiniteLoop: true,
    //     controls: false,
    //     pager: false,
    //     maxSlides: 9,
    //     minSlides: 9,
    //     onSlideAfter: function () {
    //       this.maingnb.startAuto()
    //     },
    //     touchEnabled: true
    //   })
    // },
  }
}
</script>

<style scoped>
  /* header */
  #header {padding: 20px 20px 20px; width: 100%; position: fixed; top: 0; left: 0; z-index: 11; box-sizing: border-box;}
  #header .head_in{overflow: hidden; }
  #header .head_in .logo{float: left; width: 150px; height: 24px;}
  #header .head_in .logo a{font-size: 20px; letter-spacing: 1.6px; display: block; height: 24px; line-height:1.2; color: #fff;}
  #header .head_in .head_icon{font-size: 0; float: right;}
  #header .head_in .head_icon a{width:22px; height:22px; display: inline-block; vertical-align:middle;}
  #header .head_in .head_icon a.search{margin-right: 20px;}

  /* main_gnb */
  .main_menu{position: relative; width: 100%; padding-left: 0px; border-bottom: 1px solid #eee; box-sizing: border-box; background: #000;}
  .main_menu .main-swiper{height: 50px; width: 100%; box-sizing: border-box; overflow: hidden; background: #fff;}
  .main_menu .main-swiper .swiper-slide {width:auto !important; display: inline-block; vertical-align: middle; margin-right: 40px;}
  .main_menu .main-swiper .swiper-slide:last-of-type{margin-right: 0;}
  .main_menu .main-swiper .swiper-slide a{display: block; font-size: 16px; font-style: normal; line-height:49px; position: relative; color: #000; text-align: center;}
  .main_menu .main-swiper .swiper-slide a.active{color: #d5b181;}
  .main_menu .main-swiper .swiper-slide a span{position: absolute; bottom: 0; left: 0; width: 100%; display: none; height: 3px; background: #d5b181;}
  .main_menu .main-swiper .swiper-slide a.active span{display: block;}

  /* visual */
  .mv{width: 100%; height: 610px; position: relative; overflow: hidden;}
  .mv .mv_con{height: 610px; }
  .mv .mv_con .mv_box{position: relative; height: 610px;}
  .mv .mv_con .mv_box > img{height:610px; max-width: 100%;}
  .mv .mv_con .mv_box .mv_text{position: absolute; bottom: 93px; left: 50px;}
  .mv .mv_con .mv_box .mv_text h1{font-size: 41px; line-height:1; font-style:normal; color: #fff; letter-spacing: normal;}
  .mv .mv_con .mv_box .mv_text p{margin-top: 10px; font-size: 16px; font-style:normal; line-height: 1.5; letter-spacing:normal; color: #fff; font-weight: normal;}

  /*!* visual pageser *!*/
  /*.mv .bx-wrapper{position: relative;}*/
  /*.mv .bx-pager{position: absolute; left: 0; bottom: 60px; width : 100%; font-size: 0; box-sizing: border-box; padding: 0 50px;}*/
  /*.mv .bx-pager > div{width: 33.33%; display: inline-block; vertical-align: top;}*/
  /*.mv .bx-pager > div a{display: block; width: 100%; height:3px; background: rgba(255,255,255,0.53); font-size: 0; text-indent: -9999px;}*/
  /*.mv .bx-pager > div a.active{background: #fff;}*/

  /* search */
  .search_C{display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 20; background: #f8f8f8;}
  .search_C .search_head{width: 100%; height: 60px; background: #fff; padding:0 20px; box-sizing: border-box; font-size: 0;}
  .search_C .search_head label{width: 289px; height: 34px; margin-top: 13px; border-radius: 50px; background: #f4f4f4; display: inline-block; position: relative;}
  .search_C .search_head label input{font-size: 14px; line-height: 1.45; letter-spacing: normal; color: #000; margin: 7px 10px; width: 269px; height: 20px; box-sizing: border-box; border: 0; background: #f4f4f4;}
  ::-webkit-input-placeholder{color: #aaa;}
  ::-moz-input-placeholder{color: #aaa;}
  ::-ms-input-placeholder{color: #aaa;}
  ::placeholder{color: #aaa;}
  .search_C .search_head label a.close{display: none; position: absolute; top: 7px; right: 7px; width: 20px; height: 20px;}
  .search_C .search_head a.cancel{font-size: 14px; font-weight: 500; line-height: 1.43; letter-spacing: normal; color: #000; margin: 20px 0 0 20px; display: inline-block; vertical-align: top;}
  .search_C .search_foot{padding: 13px 20px; box-sizing: border-box;}
  .search_C .search_foot h4{font-size: 20px; font-weight: bold; font-style: normal; line-height:1.45; letter-spacing: normal; color: #000;}
  .search_C .search_foot ul.search_list{margin-top: 10px;}
  .search_C .search_foot ul li a{font-size: 14px; line-height: 2.14; letter-spacing: normal; color: #000; display: block; }

</style>
