<template>
	<div class="team-wrapper">
		<div class="container">
			<div class="section-name one">
				<h2>Our Alumni</h2>
				<div class="short-text">
					<h5>Our graduates have been employed by major airline companies</h5>
				</div>
			</div>	
			<alumnis :alumnis="alumnis"></alumnis>
			
		</div>	
	</div>		
</template>

<script>
import Alumnis from '~/components/TheAlumni'
export default {
  components: { Alumnis },
  props: ['alumnis']
}
</script>

