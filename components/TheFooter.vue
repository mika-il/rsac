<template>
  	<footer>
		<div class="container">
			<div class="row">
				<div class="col-md-3 col-sm-6">
					<div class="about widget clearfix">
						<div class="logo-wrap">
						  <img src="~/assets/RSAC-Logo.png" alt="RSAC" />
						</div>
						<p>If you are looking for aviation training program, RSAC is an ideal place to develop valuable experience in competent aviation skills, and will promote the foundation for your success, in an aviation career.</p>
						<div class="social-media-icons">
							<a href="https://www.facebook.com/RoyalSkyAviationCenter" target="_blank"><i class="fa fa-facebook"></i><span>Facebook</span></a>
							<a href="https://www.youtube.com/user/RoyalSkyways" target="_blank"><i class="fa fa-youtube"></i><span>Youtube</span></a>
							<a href="#"><i class="fa fa-twitter"></i><span>Twitter</span></a>
							<a href="#"><i class="fa fa-google-plus"></i><span>Google +</span></a>
						</div>
					</div>
				</div>
				<div class="col-md-2 col-sm-6 ">
					<div class="quick-links widget clearfix">
						<h4 class="title">Quick Links</h4>
						<div class="links">
							<nuxt-link to="/admissions"><i class="fa fa-angle-double-right"></i>Apply For Admission</nuxt-link>
							<nuxt-link to="/student/"><i class="fa fa-angle-double-right"></i>Courses</nuxt-link>
							<nuxt-link to="/student/faq"><i class="fa fa-angle-double-right"></i>Faq</nuxt-link>
							<nuxt-link to="/blocktime"><i class="fa fa-angle-double-right"></i>Block Time</nuxt-link>
							<nuxt-link to="/blog"><i class="fa fa-angle-double-right"></i>Blog</nuxt-link>
							<nuxt-link to="/contact"><i class="fa fa-angle-double-right"></i>Contact Us</nuxt-link>
						</div>
					</div>
				</div>
				<div class="col-md-3 col-sm-6 ">
					<div class="tags-outer widget clearfix">
						<h4 class="title">Training Course</h4>
						<div class="tags">
							<nuxt-link to="/course/ppl"><span>PPL</span></nuxt-link>
							<nuxt-link to="/course/cpl"><span>CPL</span></nuxt-link>
							<nuxt-link to="/course/adv-cpl"><span>ADV-CPL</span></nuxt-link>
							<nuxt-link to="/course/ir"><span>IR</span></nuxt-link>
							<nuxt-link to="/course/me"><span>ME</span></nuxt-link>
							<nuxt-link to="/course/ip"><span>IP</span></nuxt-link>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="subcribe widget clearfix">
						<h4 class="title">Contact us today</h4>
						<h2>Hotline: 092 659 5544</h2>
						<h2>Phone: 02 197 2689-90</h2>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-bar">
			<div class="container">
				<h5>Copyright ©2017 RSAC. All Rights Reserved</h5>
			</div>
		</div>
		
	</footer>
</template>

<script>
export default {
  name: 'Footerbar'
}
</script>

