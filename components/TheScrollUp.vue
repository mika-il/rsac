<template>
  <a  href="#"  v-scroll-to="'#container'" id="scrollUp" v-show="showScrollUp"><i class="fa fa-angle-up"></i></a>
</template>

<script>
export default {
  data () {
    return {
      showScrollUp: false
    }
  },
  methods: {
    handleScroll () {
      if (window.scrollY > 700) {
        this.showScrollUp = true
      } else {
        this.showScrollUp = false
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

