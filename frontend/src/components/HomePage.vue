<template>
  <div>
    <div>
      <h1 class="heading">TRAVELLERS</h1>
    </div>
    <header-nav class="header-nav"></header-nav>

    <keep-alive>
      <router-view class="router-view"></router-view>
    </keep-alive>

    <footer-nav class="footer-nav"></footer-nav>
  </div>
</template>

<script>
/* eslint-disable */
  import headerNav from './header-nav-main.vue'
  import FooterNav from './Footer-Nav.vue'
  // import footNav from 'components/foot-nav.vue'
  // import firebase from 'firebase'

  export default {
    name: 'HomePage',
    components: {
      headerNav,
      FooterNav
    },
    data () {
      return {
        // loginOn: firebase.auth().currentUser
      }
    }
  }
</script>

<style scoped>
  h1.heading{margin-top: -35px; margin-left: -8px;color: #c113b9; font-family: cursive; position: fixed;  top: 35px; width: 100%; background: #000}
  .header-nav {position: fixed; top: 50px; overflow: hidden; width: 100%; background-color: #000; left: 0px}
  .router-view {margin-top: 120px; margin-left: 0px;}
  .footer-nav {margin-top: 60px}

</style>
