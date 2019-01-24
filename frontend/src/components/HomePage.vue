<template>
  <div>
    <div>
      <h1 style="margin-top: -35px; margin-left: -8px;color: #c113b9; font-family: cursive; position: fixed;  top: 35px; width: 100%; background: #000">TRAVELLERS</h1>
    </div>
    <header-nav style="position: fixed; top: 50px; overflow: hidden; width: 100%; background-color: #000"></header-nav>

    <keep-alive>
      <router-view style="margin-top: 120px; margin-left: 10px; margin-right: 10px;"></router-view>
    </keep-alive>

    <footer-nav></footer-nav>
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

</style>
