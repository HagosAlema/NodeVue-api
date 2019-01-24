<template>
  <div>
    <div class="sub_head head-scroll">
      <div class="sub_head_C">
        <div class="sub_logo">
          <router-link to="/" class="workB">VUE NODE</router-link>
        </div>
        <div class="sub_head_icon">
          <a href="javascript:;" v-on:click="searchfadeIn" class="sub_search"><img src="../assets/img/search_down.svg" alt="검색" /></a>
          <a href="#" class="sub_cart"><img src="../assets/img/cart_down.svg" alt="장바구니" /></a>
        </div>
      </div>
    </div>
    <!-- TODO : 검색 기능 구현 및 마크업 수정 -->
    <div class="search_C">
      <div class="search_head">
        <label for="s_box">
          <input type="text" v-model="searchKeyword" v-on:keyup.enter="keywordSearch()" placeholder="검색어를 입력해주세요." class="workM">
          <a href="javascript:;" v-on:click="searchfadeOut" class="close"><img src="../assets/img/close.svg" alt="닫기"></a>
        </label>
        <a href="javascript:;" v-on:click="searchfadeOut" class="cancel">취소</a>
      </div>

      <div class="search_foot">
        <h4>추천검색어</h4>
        <ul class="search_list">
          <li v-for="keyword in searchList" :key="keyword.keyword">
            <a v-bind:href="'/search/'+keyword.keyword" class="workM">{{keyword.keyword}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  // require('bxslider')

  export default {
    name: 'header-nav',
    created () {
      // this.getHeaderData()
    },
    mounted () {
    },
    data () {
      return {
        searchList: ['Home', 'About Us','Contact Us'],
        searchKeyword: ''
      }
    },
    methods: {
      getHeaderData: function () {
        const url = '/back'
        this.$http.get(`${url}/header`)
          .then((result) => {
            this.searchList = result.data.data.searchList
          })
      },
      keywordSearch () {
        window.location.href = '/search/' + this.searchKeyword
      },
      searchfadeIn: () => { // search popup fade in
        $('.search_C').stop().fadeIn()
      },
      searchfadeOut: () => { // search popup fade out
        $('.search_C').stop().fadeOut()
      }
    }
  }
</script>

<style scoped>
  /* 공통 헤더 */
  .sub_head{position: fixed; top: 0; left: 0; width: 100%; height: 64px; background: #fff; box-sizing: border-box; padding:20px; border-bottom: 1px solid #eee; z-index: 6;}
  .sub_head .sub_head_C:after{content: ''; display: block; clear: both;}
  .sub_head .sub_head_C .sub_logo{float: left; width: 150px;}
  .sub_head .sub_head_C .sub_logo a{display: block; font-size: 20px; line-height: 1.2; letter-spacing: 1.6px; color: #000;}
  .sub_head .sub_head_C .sub_head_icon{float: right; font-size: 0;}
  .sub_head .sub_head_C .sub_head_icon a{display: inline-block; vertical-align:top; width: 22px; height: 22px;}
  .sub_head .sub_head_C .sub_head_icon a.sub_search{margin-right:20px;}

  /* main_gnb */
  .main_gnb{position: relative; width: 100%; padding-left: 20px; box-sizing: border-box; background: #fff;}
  .main_gnb ul{height: 50px; padding-left: 20px; width: 100%; box-sizing: border-box; border-bottom: 1px solid #eee; overflow: hidden;}
  .main_gnb ul li{width:auto !important; display: inline-block; vertical-align: middle; margin-right: 40px;}
  .main_gnb ul li:last-of-type{margin-right: 0;}
  .main_gnb ul li a{display: block; font-size: 16px; font-style: normal; line-height:49px; position: relative; color: #000;}
  .main_gnb ul li a.active{color: #d5b181;}
  .main_gnb ul li a span{position: absolute; bottom: 0; left: 0; width: 100%; display: none; height: 3px; background: #d5b181;}
  .main_gnb ul li a.active span{display: block;}

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
