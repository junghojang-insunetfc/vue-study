<template>
  <footer>{{title}} {{member}}</footer> 
</template>

<script>
export default {
  props: {
    title: {
      default: 'Copyright'
    }
  },
  computed: {
    member() {
      // debugger
      return this.$store.state.$members.member
    }
  }
}
</script>