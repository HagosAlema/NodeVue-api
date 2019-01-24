<template>
  <div>
    <div id="content">
        <div class="swiper-container what_new_C" id="infinite-scroll">
          <div class="swiper-wrapper what_new_slide">
            <div v-for="(item, index) in data" :key="index">
              <div>
                <!--<router-link v-bind:to="'/product/page/'+item.prod_id" >-->
                  <img src="../assets/img/infinity.png" alt="상품사진" />
                  <p class="workS">Brand</p>
                  <span class="workL">{{item.name}}</span>
                <br/>
                  <b class="workS">{{index | priceFormat}}원</b>
                <!--</router-link>-->
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination swiper-pagination-progress" slot="pagination">
              <span class="swiper-pagination-progressbar-fill"></span>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MainPage',
  filters: {
    priceFormat: function (value) {
      if (typeof value !== 'number') {
        return value
      }
      const formatter = new Intl.NumberFormat('ko-KR', {
        style: 'decimal'
      })
      return formatter.format(value)
    }
  },
  mounted () {
    var self = this
    window.onscroll = function () {
      var d = document.documentElement
      var b = document.body
      var offset = d.scrollTop + window.innerHeight
      var offset1 = b.scrollTop + window.innerHeight
      var height = d.offsetHeight - 5000

      console.log('offset1 = ' + offset1)
      console.log('offset = ' + offset)
      console.log('height = ' + height)

      if (offset >= height || offset1 >= height) {
        console.log('At the bottom')
        self.getData()
      }
    }
  },
  created () {
    this.getData()
  },
  data () {
    return {
      offset: 0,
      limit: 10,
      data: []
    }
  },
  methods: {
    getData: function () {
      var data = {
        limit: this.limit,
        offset: this.offset
      }
      var self = this
      this.offset += this.limit
      const url = '/server'
      // window.setTimeout(e => {
      axios.get(`${url}/list/all`, {params: data})
        .then((result) => {
          console.log('Length = ' + result.data.allList.length)
          console.log(result.data.allList)
          for (var i = 0; i < result.data.allList.length; i++) {
            self.data.push(result.data.allList[i])
          }
          // self.data = result.data.allList
          self.loading = false
          // this.bestList = result.data.data.bestItemList
          // this.brandList = result.data.data.brandList
        })
      // }, 200)
      // var i
      // for (i = 100; i < 1000; i++) {
      //   var data = {
      //     name: 'Sample Name-' + i
      //   }
      //   const url = '/server'
      //   axios.post(`${url}/list/add`, {data: data})
      //     .then((result) => {
      //       console.log('Entered')
      //       // this.brandCList = result.data.data.brandCList
      //       // this.bestList = result.data.data.bestItemList
      //       // this.brandList = result.data.data.brandList
      //     })
      // }
    }
  }
}
</script>

<style scoped>
  /*@import "../assets/css/swiper.css";*/

  /* what's new */
  .what_new{width: 100%; padding: 40px 0 0 20px; box-sizing: border-box; position: relative;}
  /*.what_new_slide img {width: 100%;}*/
  .what_new .what_new_title{text-align: left; margin-bottom: 30px;}
  .what_new .what_new_title p{font-size: 26px; font-style:normal; letter-spacing:normal; color: #222; display: inline-block; vertical-align: middle;}
  .what_new .what_new_C {position: relative;}
  .what_new .what_new_C .swiper-wrapper {touch-action: pan-y;}
  .what_new .what_new_C .what_new_slide {width: 100%; height: 401px;}
  .what_new .what_new_C .what_new_slide .swiper-slide{width: 158px !important; display: inline-block; vertical-align: top; margin-right: 14px;}
  .what_new .what_new_C .what_new_slide .swiper-slide:last-of-type{margin-right: 0}
  .what_new .what_new_C .what_new_slide .swiper-slide a{display: block;}
  .what_new .what_new_C .what_new_slide .swiper-slide a > img{width: 100%; height: 200px; background: #fff; box-shadow:0 3px 6px 0 rgba(0,0,0,0.23); box-sizing: border-box;}
  .what_new .what_new_C .what_new_slide .swiper-slide a p{font-size: 16px; font-style:normal; line-height:1.38; color: #222; padding: 20px 0 10px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; letter-spacing:normal;}
  .what_new .what_new_C .what_new_slide .swiper-slide a span{display: block; font-size: 12px; font-style:normal; line-height:1.2; color: #222; letter-spacing:normal; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
  .what_new .what_new_C .what_new_slide .swiper-slide a i{display: block; font-size:12px; font-style: normal; line-height:1.2; letter-spacing:normal; color: #888; margin: 5px 0 20px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
  .what_new .what_new_C .what_new_slide .swiper-slide a b{display: block; font-size:16px; letter-spacing:normal; color: #222; line-height: 1; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; padding-bottom: 50px;}
  .what_new .swiper-pagination{bottom : 0; left: 0; width: 335px; height: 4px; background: #f7f7f7; border-radius: 4px;}
  .what_new .swiper-pagination .swiper-pagination-progressbar-fill {background: #000; height: 4px; top: 0; border-radius: 4px;}

  /* banner */
  .banner{width: 100%; padding: 20px 20px; box-sizing: border-box;}
  .banner a{display: block; height: 100px;}
  .banner a img{height: 100px;}

  /* best */
  .best{width: 100%; box-sizing: border-box; padding: 0 0 0 20px; position: relative;}
  .best .best_C{position: relative;}
  .best .best_con{height: 312px;}
  .best .best_con .best_box{display: inline-block; vertical-align: top; width: 180px; margin-right: 20px;}
  .best .best_con .best_box:last-of-type{margin-right: 0}
  .best .best_con .best_box a > img{height: 210px;}
  .best .best_con .best_box a .best_txt{padding: 25px 0 40px; box-sizing: border-box;}
  .best .best_con .best_box a .best_txt p{font-size: 16px; margin-bottom: 5px;font-weight: bold; line-height:1.2; letter-spacing:normal; color: #101010; font-style:normal; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}
  .best .best_con .best_box a .best_txt span{display: block; font-size: 12px; font-weight: normal; font-style: normal; letter-spacing:normal; line-height:1.2; color: #101010; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}
  .best .swiper-pagination{bottom : 0px; left: 0; width: 335px; height: 4px; background: #f7f7f7; border-radius: 4px;}
  .best .swiper-pagination .swiper-pagination-progressbar-fill {background: #000; height: 4px; top: 0; border-radius: 4px;}

  /* brand */
  .brand{width: 100%;}
  .brand .brand_title{padding: 50px 0 15px 20px; box-sizing: border-box;}
  .brand .brand_title p{font-size: 26px; font-style: normal; line-height:1.42; letter-spacing:normal; color: #222;}
  .brand_gnb{width: 100%; padding-left: 20px; box-sizing: border-box;}
  .brand_gnb .brand_gnb_con:after{content: ''; display: block; clear: both;}
  .brand_gnb .brand_gnb_con{height: 50px;}
  .brand_gnb .brand_gnb_con .swiper-slide{width: auto !important; display: inline-block; vertical-align: middle; margin-right: 40px;}
  .brand_gnb .brand_gnb_con .swiper-slide:last-of-type{margin-right: 0;}
  .brand_gnb .brand_gnb_con .swiper-slide a{display: block; font-size: 16px; font-style: normal; line-height:50px; position: relative; color: #000;}
  .brand_gnb .brand_gnb_con .swiper-slide a.active{color: #d5b181;}
  .brand_gnb .brand_gnb_con .swiper-slide a span{position: absolute; bottom: 0; left: 0; width: 100%; display: none; height: 3px; background: #d5b181;}
  .brand_gnb .brand_gnb_con .swiper-slide a.active span{display: block;}
  .brand_visual{width: 100%; height: 250px; margin-top: 10px;}
  .brand_visual img{height:250px;}
  .brand_con{width: 100%; box-sizing: border-box; padding: 20px; overflow: hidden;}
  .brand_con a{width: 160px; float: left; display: block; margin-right:15px; }
  .brand_con a:nth-of-type(2n){margin-right: 0}
  .brand_con a > img{width: 100%; height: 200px;}
  .brand_con a p{font-size: 16px; font-style:normal; line-height:1.38; color: #222; padding: 20px 0 10px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; letter-spacing:normal;}
  .brand_con a span{display: block; font-size: 12px; font-style:normal; line-height:1.2; color: #222; letter-spacing:normal; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
  .brand_con a i{display: block; font-size:12px; font-style: normal; line-height:1.2; letter-spacing:normal; color: #888; margin: 5px 0 20px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
  .brand_con a b{display: block; font-size:16px; letter-spacing:normal; color: #222; line-height: 1.2; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; margin-bottom: 30px;}

  /* best item */
  .best_item{width: 100%; box-sizing: border-box; padding-bottom: 79px; position: relative;}
  .best_item .best_item_tit{padding: 20px 20px 40px; box-sizing: border-box;}
  .best_item .best_item_tit p{font-size: 26px; font-style: normal; line-height:1.42; letter-spacing:normal; color: #222;}
  .best_item_C{position: relative;}
  .best_item_con:after{content: ''; display: block; clear: both;}
  .best_item_con{width: 100%; height: 401px; padding-left: 20px; box-sizing: border-box;}
  .best_item_con .best_item_box{width: 158px; display: inline-block; vertical-align: top; margin-right: 14px;}
  .best_item_con .best_item_box:last-of-type{margin-right: 0}
  .best_item_con .best_item_box .best_item_box_img{width: 100%; height: 200px; background: #fff; box-shadow:0 3px 6px 0 rgba(0,0,0,0.23); box-sizing: border-box;}
  .best_item_con .best_item_box .best_item_box_img > img{height: 100%;}
  .best_item_con .best_item_box p{font-size: 16px; font-style:normal; line-height:1.38; color: #222; padding: 20px 0 10px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; letter-spacing:normal;}
  .best_item_con .best_item_box span{display: block; font-size: 12px; font-style:normal; line-height:1.2; color: #222; letter-spacing:normal; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
  .best_item_con .best_item_box i{display: block; font-size:12px; font-style: normal; line-height:1.2; letter-spacing:normal; color: #888; margin: 5px 0 20px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
  .best_item_con .best_item_box b{display: block; font-size:16px; letter-spacing:normal; color: #222; line-height: 1; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; margin-bottom: 50px;}
  .best_item .swiper-pagination{bottom : 0; left: 20px; width: 335px; height: 4px; background: #f7f7f7; border-radius: 4px; }

</style>
