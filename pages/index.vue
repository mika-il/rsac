<template>
<div>
  <HomeSlider :slides="Pages.slides" />
  <HomeCourses :courses="getCourse" />
  <home-info></home-info>
  <home-alumni :alumnis="Pages.alumnis"></home-alumni>
</div>
</template>

<script>
import HomeSlider from '~/components/HomeSlider'
import HomeCourses from '~/components/HomeCourse'
import HomeInfo from '~/components/HomeInfo'
import HomeAlumni from '~/components/HomeAlumni'
import home from '~/apollo/queries/home'

export default {
  components: {
    HomeSlider, HomeCourses, HomeInfo, HomeAlumni
  },
  apollo: {
    Pages: {
      prefetch: true,
      query: home,
      variables () {
        return { slug: 'home' }
      }
    }
  },
  computed: {
    getCourse () {
      return this.Pages.blogs.filter((course) => course.categories.indexOf('Course') > -1)
    }
  },
  head () {
    return {
      meta: [
        { hid: 'og-image', property: 'og:image', content: 'http://www.royalskyavaitioncenter.com/img/fb-og-rsac.jpg' },
        { hid: 'og-title', property: 'og:title', content: 'Royal Sky Aviation Center สถาบันการบินโรยัลสกาย' },
        { hid: 'og-description', property: 'og:description', content: 'เปิดเส้นทางก้าวตามฝัน สู่การนักบินอาชีพ Airline Pilot Start here' },
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'fb-app_id', property: 'fb:app_id', content: '400736526646234' }
      ],
      title: (this.Pages ? 'Royal Sky Aviation Center' : 'Loading...')
    }
  }
}
</script>

