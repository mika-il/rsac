<template>
  <div>
   <page-banner :pageBanner="pageBanner"></page-banner>
   <div class="causes-page-wrapper single-cause">
		<div class="container">
			<div class="row cause">
				<div class="col-md-10 col-md-offset-1" v-if="Blogs">
          <div class="meta">
           <h2>{{Blogs.title}}</h2>
          </div>
          
           <vue-markdown>{{ Blogs.content}}</vue-markdown>
         
				</div>
			</div>
		</div>
   </div>
  </div>
</template>

<script>
import blogs from '~/apollo/queries/blogs'
import VueMarkdown from 'vue-markdown'
import PageBanner from '~/components/TheBanner'

export default {
  apollo: {
    Blogs: {
      prefetch: ({ route }) => ({ slug: route.params.id }),
      query: blogs,
      variables () {
        return { slug: this.$route.params.id }
      }
    }
  },
  components: {
    PageBanner, VueMarkdown
  },
  data () {
    return {
      pageBanner: {
        title: 'Course',
        bg: 'background: url(/img/banner/enroll.jpg) center center no-repeat;'
      }
    }
  }
}
</script>