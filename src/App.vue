<template>
  <div id="app">
    <Header v-show="true"></Header>
    <hr />
    <div class="container">
      <Nav v-if="true"></Nav>
      <hr />
      <section class="contents">
        <router-view></router-view>
      </section>
      <hr />
    </div>
    <Footer :title="'카피라이트'"></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Nav,
    Footer
  }
}
</script>