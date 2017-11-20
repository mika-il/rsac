<template>
	<div class="page-banner" :style="pageBanner.bg">
		<div class="container">
			<div class="parallax-mask"></div>
			<div class="section-name" >
				<h2>{{  pageBanner.title }}</h2>
				<div class="short-text">
					<h5>Home<i class="fa fa-angle-double-right"></i>{{ pageBanner.title }}</h5>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'PageBanner',
  props: [ 'pageBanner' ]
}
</script>
