<template>
  <div>
    <page-banner :pageBanner="pageBanner"></page-banner>
    <!-- about wrapper -->
	<div class="about-page-wrapper">
		<div class="description container">
			<div class="row ">
				<div class="col-md-10 col-md-offset-1 ">
					<vue-markdown>{{ Pages.content}}</vue-markdown>
				</div>
			</div>
		</div>

       
	</div>
  </div>
</template>

<script>
import PageBanner from '~/components/TheBanner'
import page from '~/apollo/queries/page'
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    PageBanner, VueMarkdown
  },
  apollo: {
    Pages: {
      prefetch: true,
      query: page,
      variables () {
        return { slug: 'about' }
      }
    }
  },
  data () {
    return {
      pageBanner: {
        title: 'About Us',
        bg: 'background: url(/img/banner/about.jpg) center center no-repeat;'
      }
    }
  },
  head () {
    return {
      title: 'About Us | Royal Sky Aviation Center'
    }
  }
}
</script>

