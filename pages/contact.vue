<template>
<div>
    <page-banner :pageBanner="pageBanner"></page-banner>

	<div class="contact-page-wrapper">
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<div class="row">
						<div class="widget">
								<i class="fa fa-map-marker"></i>
								<p>8/39 Chuanchuen Modus-Vibhavadi, Vibhavadi-Rangsit Rd., Sanambin, Bangkok, Thailand 10210</p>
							</div>
							<div class="widget">
								<i class="fa fa-phone"></i>
								<p><strong>Hotline: </strong> 092 659 5544</p>
								<p><strong>Phone: </strong> 02 197 2689</p>
							</div>
							<div class="widget">
								<i class="fa fa-envelope"></i>
								<p><a href="mailto:marketing@royalskyways.co.th">marketing@royalskyways.co.th</a></p>
							</div>
					</div>
				</div>
				<div class="col-md-8">
					<div class="comment-form-wrapper contact-from clearfix">
						<div class="widget-title ">
							<h4>Contact Form</h4>
							<p>Please contact us using the form below for faster processing of your request, and we will reply you in short notice.</p>
						</div>
						<hr>
						<form-contact></form-contact>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import PageBanner from '~/components/TheBanner'
import FormContact from '~/components/FormContact'

export default {
  components: {
    PageBanner, FormContact
  },
  data () {
    return {
      pageBanner: {
        title: 'Contact Us',
        bg: 'background: url(/img/banner/contact.jpg) center center no-repeat;'
      }
    }
  }
}
</script>
