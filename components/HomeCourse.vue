<template>
<div class="features-wrapper one">
		<div class="container">
			<div class="section-name one">
				<h2>Flight Training Courses</h2>
				<div class="short-text">
					<h5>Professional Pilot Training</h5>
				</div>
			</div>
			<div class="row features" v-if="courses">
				<div class="col-md-4 col-sm-6" v-for="course in courses" :key="course.title">
					<div class="feature clearfix">						
						<h4>{{ course.title }}</h4>
						<p>{{ course.excerpt}}</p>
						<nuxt-link :to="'/course/'+course.slug"  class="btn btn-min btn-secondary"><span>More Detail</span></nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: ['courses']
}
</script>


