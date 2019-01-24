<template>
  <div>
    <div class="footer_wrap">
      <!--<div class="footer_btn">-->
        <!--<a href="/login">로그인<span></span></a>-->
        <!--<a v-if="memb_id != null" @click="logout();clearSession()">로그아웃<span></span></a>-->
        <!--<a href="/login/join/detail">회원가입<span></span></a>-->
        <!--<a href="/mypage/service">고객센터<span></span></a>-->
        <!--<a href="/new">NEW</a>-->
      <!--</div>-->
      <!--<div class="footer_text">-->
        <!--<p>상호 : (주)엔오션</p>-->
        <!--<p>대표자 : 한태민</p>-->
        <!--<p>사업자등록번호 : 534-86-00467</p>-->
        <!--<p>통신판매업 신고번호 : 2018-서울강남-02800</p>-->
        <!--<p>주소 : 서울특별시 강남구 봉은사로 159 3층</p>-->
        <!--<p>전화번호 : 070-7601-6218</p>-->
      <!--</div>-->
    </div>
    <!-- TODO : 하단 메뉴 href 수정 -->
    <div id="footer">
      <div class="foot_C">
        <div class="foot_btn">
          <a href="javascript:;" v-on:click="menuclick" class="hamburger_btn"><img src="../assets/img/hamburger.svg" alt="리스트" /></a>
          <a href="/" class="history_btn"><img src="../assets/img/history.svg" alt="" /></a>
          <a href="/" class="brand_btn"><img src="../assets/img/brand.svg" alt="" /></a>
          <a href="/" class="heart_btn"><img src="../assets/img/heart.svg" alt="" /></a>
          <a href="/" class="mypage_btn"><img src="../assets/img/mypage.svg" alt="" /></a>
          <!--<a v-if="memb_id != null" href="/mypage" class="mypage_btn"><img src="../assets/img/mypage.svg" alt="" /></a>-->
        </div>
      </div>
    </div>
    <div class="bgColor" v-on:click="bgclick"></div>
    <div class="category">
      <div class="category_tit" v-show="open">
        <p class="workM">CATEGORY</p>
      </div>
      <div class="cate_menu" v-show="open">
        <div class="cate_menu_con">
          <ul class="top_depth01">
            <!--<li v-for="menu in menuList">-->
            <li>
              <a href="javascript:;" class="workM" @click="dep01click(0)">New<span><img src="../assets/img/arrow.svg" alt="화살표" /></span></a>
            </li>
            <li>
              <a href="javascript:;" class="workM" @click="dep01click(1)">Women<span><img src="../assets/img/arrow.svg" alt="화살표" /></span></a>
            </li>
            <li>
              <a href="javascript:;" class="workM" @click="dep01click(2)">Men<span><img src="../assets/img/arrow.svg" alt="화살표" /></span></a>
            </li>
            <li>
              <a href="javascript:;" class="workM" @click="dep01click(3)">Shoes<span><img src="../assets/img/arrow.svg" alt="화살표" /></span></a>
            </li>
          </ul>
          <ul class="btm_depth01">
            <li><a href="/" class="workM">NEW<span><img src="../assets/img/arrow.svg" alt="화살표" /></span></a></li>
            <!--<li><a href="javascript:;" class="workM">SALE<span><img src="../assets/img/arrow.svg" alt="화살표" /></span></a></li>-->
            <li><a href="/" class="workM">BRAND<span><img src="../assets/img/arrow.svg" alt="화살표" /></span></a></li>
            <li><a href="/" class="workM">EVENT<span><img src="../assets/img/arrow.svg" alt="화살표" /></span></a></li>
            <li><a href="/" class="workM">BEST<span><img src="../assets/img/arrow.svg" alt="화살표" /></span></a></li>
          </ul>
        </div>
      </div>
      <!--<div class="category02_tit" v-for="menu in menuList" v-show="selected1 == menu.cate_id">-->
        <!--<p class="workM"><a href="javascript:;" v-on:click="dep01click(menu.cate_id)"><img src="../assets/img/cate_top_arrow.svg" alt="화살표"></a>{{menu.cate_disp}}</p>-->
      <!--</div>-->
      <!--<div class="cate02_menu" v-for="menu in menuList" v-show="selected1 == menu.cate_id">-->
        <!--<h3 class="workM">{{menu.cate_disp}}</h3>-->
        <!--<div class="cate_menu_con">-->
          <!--<ul class="cate_dep02">-->
            <!--<li v-for="depth2 in menu.child" :class="{on: depth2.cate_id == selected2}">-->
              <!--<a href="javascript:;" class="workM" @click="dep02click(depth2.cate_id)">{{depth2.cate_disp}}<span>-->
                  <!--<img src="../assets/img/arrow_down.svg" alt="화살표" class="Down" />-->
                  <!--<img src="../assets/img/arrow_up.svg" alt="화살표" class="Up" />-->
                <!--</span></a>-->
              <!--<ul class="cate_depth03" v-bind:class="'depth3_'+depth2.cate_id" v-bind:style="[ depth2.cate_id == selected2? {display:'block'} : {display:'none'}]">-->
                <!--<li v-for="depth3 in depth2.child" ><a v-bind:href="'/list/'+depth3.cate_id" class="workM">{{depth3.cate_disp}}</a></li>-->
              <!--</ul>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'foot-nav',
    created () {
      // this.getFooterData()
    },
    mounted () {
    },
    data () {
      return {
        menuList: [],
        open: true,
        selected1: undefined,
        selected2: undefined,
        // memb_id: this.$store.state.user === null ? null : this.$store.state.user.email
      }
    },
    methods: {
      // clearSession () {
      //   const url = '/back'
      //   this.$http.get(`${url}/history/destroy`)
      //     .then((result) => {
      //       console.log('History Cleared successfully')
      //     })
      // },
      // getFooterData: function () {
      //   const url = '/back'
      //   this.$http.get(`${url}/category/list`)
      //     .then((result) => {
      //       this.menuList = result.data.data.menuList
      //     })
      // },
      menuclick: () => { // slide menu click
        $('.category').stop().animate({
          'left': 0
        }, 500)
        $('.bgColor').fadeIn()
        $('html, body').css('overflow', 'hidden')
      },
      logout () {
        this.$store.dispatch('userSignOut')
        window.location.href = '/'
      },
      bgclick: () => { // back ground click
        $('.category').stop().animate({
          'left': '-1000px'
        }, 500)
        $('.bgColor').fadeOut()
        $('html, body').css('overflow', 'auto')
      },
      dep01click: function (e) { // dep1 click)
        if (this.selected1 === e) {
          this.selected1 = undefined
          this.open = true
        } else {
          this.selected1 = e
          this.open = false
        }
      },
      dep02click: function (e) { // category 2 dep click
        if (this.selected2 === e) {
          this.selected2 = undefined
          $('.depth3_' + e).stop().slideUp('fast')
        } else {
          this.selected2 = e
          $('.depth3_' + e).stop().slideDown('fast')
        }
      }
    }
  }
</script>

<style scoped>
  /* footer_wrap */
  .footer_wrap {}
  .footer_wrap .footer_btn{overflow: hidden; box-sizing: border-box; border-top: 1px solid #dadada; border-bottom: 1px solid #dadada; background: #fff;}
  .footer_wrap .footer_btn a{font-size: 14px; padding: 12px 0; font-weight: 400; line-height: 1.43; letter-spacing: normal; color: #333; position: relative; float: left; width: 25%; display: block; box-sizing: border-box; vertical-align: top; text-align: center;}
  .footer_wrap .footer_btn a span{position: absolute; top: 17px; right: 0; width: 1px; height: 10px; background: #dadada; display: block;}
  .footer_wrap .footer_text{padding: 20px 20px 68px; box-sizing: border-box; background: #f5f5f5;}
  .footer_wrap .footer_text p{font-size: 12px; font-weight: 400; line-height: 1.67; letter-spacing: normal; color: #333;}
  /* footer */
  #footer{height: 48px; width: 100%; position: fixed; bottom: 0; left: 0; background: #000; z-index: 11;}
  #footer .foot_C .foot_btn{font-size: 0;}
  #footer .foot_C .foot_btn a{display: inline-block; vertical-align:top; width: 20%; height: 48px; text-align: center; }
  #footer .foot_C .foot_btn a.hamburger_btn img{width: 22px; height:18px; margin-top: 15px;}
  #footer .foot_C .foot_btn a.history_btn img{width: 23px; height: 23px; margin-top: 13px;}
  #footer .foot_C .foot_btn a.brand_btn img{width: 31.5px; height:15px; margin-top: 17px;}
  #footer .foot_C .foot_btn a.heart_btn img{width: 20.5px; height:18.2px; margin-top: 15px;}
  #footer .foot_C .foot_btn a.mypage_btn img{width:22px; height:24px; margin-top: 12px;}

  /* category */
  .bgColor{display: none; position: fixed; top: 0; left: 0; width: 100%; height:100%; background: rgba(0,0,0,0.51); z-index: 20;}
  .category{position: fixed; top: 0; left: -1000px; z-index: 20; width:310px; height: 100%; background: #fff; overflow-y: scroll;}
  .category .category_tit{height: 64px; background: #000; box-sizing: border-box; padding: 0 20px;}
  .category .category_tit p{font-size: 16px; line-height:64px; color:#fff; letter-spacing:1.3px;}
  .cate_menu{padding: 30px 30px 0; box-sizing: border-border-box;}
  .cate_menu .cate_menu_con .top_depth01{border-bottom: 1px solid #707070; width:100$; box-sizing: border-box;}
  .cate_menu .cate_menu_con .top_depth01 > li{width:100%; margin-bottom: 20px;}
  .cate_menu .cate_menu_con .top_depth01 > li > a{display: block; overflow: hidden; letter-spacing:1.3px;}
  .cate_menu .cate_menu_con .top_depth01 > li > a span{display: inline-block; vertical-align: middle; float: right; width: 4px; height: 8px; margin-top:4px }
  .cate_menu .cate_menu_con .top_depth01 > li > a span img{vertical-align: top;}
  .cate_menu .cate_menu_con .btm_depth01{ width:100$; box-sizing: border-box; padding: 30px 0 168px;}
  .cate_menu .cate_menu_con .btm_depth01 > li{width:100%; margin-bottom: 20px;}
  .cate_menu .cate_menu_con .btm_depth01 > li > a{display: block; overflow: hidden; letter-spacing:1.3px;}
  .cate_menu .cate_menu_con .btm_depth01 > li > a span{display: inline-block; vertical-align: middle; float: right; width: 4px; height: 8px; margin-top:4px }
  .cate_menu .cate_menu_con .btm_depth01 > li > a span img{vertical-align: top;}
  .cate_menu .cate_btm .cate_btm_btn{font-size: 0;}
  .cate_menu .cate_btm .cate_btm_btn a{display: inline-block; vertical-align: top; width: 24px; height: 24px; margin-right: 50px;}
  .cate_menu .cate_btm .cate_btm_btn a:last-of-type{margin-right: 0;}

  /* cate 2depth */
  .category .category02_tit{height: 64px; background: #000; box-sizing: border-box; padding: 0 20px;}
  .category .category02_tit p{font-size: 16px; line-height:64px; color:#fff; letter-spacing:1.3px;}
  .category .category02_tit p > a{margin: 3px 20px 0 0; display: inline-block; vertical-align: middle;}
  .category .category02_tit p > a > img{width:9px; height: 17px;}
  .cate02_menu{padding: 30px 30px 0; box-sizing: border-border-box;}
  .cate02_menu > h3{margin-bottom: 30px; padding-bottom: 30px; font-size: 16px; line-height: 1.19; letter-spacing: 1.3px; color: #000; box-sizing: border-box; border-bottom: 1px solid #707070;}
  .cate02_menu .cate_menu_con .cate_dep02{width:100$; box-sizing: border-box;}
  .cate02_menu .cate_menu_con .cate_dep02 > li{width:100%; margin-bottom: 20px;}
  .cate02_menu .cate_menu_con .cate_dep02 > li > a{font-size: 16px; display: block; overflow: hidden; letter-spacing:1.3px; color: #000;}
  .cate02_menu .cate_menu_con .cate_dep02 > li > a span{display: inline-block; vertical-align: middle; float: right; width: 8px; height: 4px; margin-top:4px }
  .cate02_menu .cate_menu_con .cate_dep02 > li > a span img{vertical-align: top; display: block;}
  .cate02_menu .cate_menu_con .cate_dep02 > li > a span img.Up{display: none;}
  .cate02_menu .cate_menu_con .cate_dep02 > li.on a span img.Up{display: block;}
  .cate02_menu .cate_menu_con .cate_dep02 > li.on a span img.Down{display: none;}
  .cate02_menu .cate_depth03{ width: 100%; margin: 20px 0; padding: 20px; box-sizing: border-box; background: #f5f5f5;}
  .cate02_menu .cate_depth03 li{width: 100%; margin-bottom: 20px;}
  .cate02_menu .cate_depth03 li:last-of-type{margin-bottom: 10px;}
  .cate02_menu .cate_depth03 li a{display: block; font-size: 14px; line-height: 1.14; letter-spacing: 1.1px; color: #000; font-style: normal;}

</style>
