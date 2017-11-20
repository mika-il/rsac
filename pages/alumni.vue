<template>
  <div>
        <page-banner :pageBanner="pageBanner"></page-banner>
        <div class="team-wrapper">
            <div class="container">              
			       <alumnis :alumnis="allAlumnises"></alumnis>              
            </div>
        </div>	
  </div>
</template>

<script>
import PageBanner from '~/components/TheBanner'
import Alumnis from '~/components/TheAlumni'
import allAlumnises from '~/apollo/queries/allAlumnises'

export default {
  components: {
    PageBanner, Alumnis
  },
  data () {
    return {
      pageBanner: {
        title: 'Alumnis',
        bg: 'background: url(/img/banner/enroll.jpg) center center no-repeat;'
      }
    }
  },
  apollo: {
    allAlumnises: {
      prefetch: true,
      query: allAlumnises
    }
  },
  head () {
    return {
      title: 'Alumnis | Royal Sky Aviation Center'
    }
  }
}
</script>

