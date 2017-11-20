<template>
  <div>
    <page-banner :pageBanner="pageBanner"></page-banner>
        <div class="blog-page-wrapper">
		    <div class="container">
			    <div class="row">
                    No data found....
			    </div>
		    </div>
        </div>
  </div>
</template>

<script>
import PageBanner from '~/components/TheBanner'

export default {
  components: {
    PageBanner
  },
  data () {
    return {
      pageBanner: {
        title: 'Blog List',
        bg: 'background: url(/img/banner/blog.jpg) center center no-repeat;'
      }
    }
  },
  head () {
    return {
      title: 'Blog | Royal Sky Aviation Center'
    }
  }
}
</script>
