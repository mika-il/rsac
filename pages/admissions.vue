<template>
  <div>
    <page-banner :pageBanner="pageBanner"></page-banner>
    <div class="contact-page-wrapper">
		<div class="container">
			<div class="row">
				<div class="col-md-10 col-md-offset-1">
					<div class="comment-form-wrapper contact-from clearfix">
						<div class="widget-title ">
							<h4>Application form for admission</h4>
							<p>Please complete the following information. This is the first step in the admissions process. We will review your application and contact you. </p>
              <p>For more information please  feel free to contact us  092 659 5544</p>
						</div>
             <hr>
						<form-enroll></form-enroll>
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
import PageBanner from '~/components/TheBanner'
import FormEnroll from '~/components/FormEnroll'

export default {
  components: {
    PageBanner, FormEnroll
  },
  data () {
    return {
      pageBanner: {
        title: 'Admissions',
        bg: 'background: url(/img/banner/enroll.jpg) center center no-repeat;'
      }
    }
  },
  head () {
    return {
      meta: [
        { hid: 'og-image', property: 'og:image', content: 'http://www.royalskyavaitioncenter.com/img/fb-og-admission.jpg' },
        { hid: 'og-title', property: 'og:title', content: 'สมัครเรียนหลักสูตร CPL' },
        { hid: 'og-description', property: 'og:description', content: 'สู่เส้นทางนักบินอาชีพ สถาบันการบินโรยัลสกาย เปิดรับสมัครศิษย์การบินเข้าศึกษาในหลักสูตรนักบินพาณิชย์ตรี (Commercial Pilot License:CPL)' },
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'fb-app_id', property: 'fb:app_id', content: '400736526646234' }
      ],
      title: 'สมัครเรียนหลักสูตร CPL'
    }
  }
}
</script>
