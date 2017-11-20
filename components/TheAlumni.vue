<template>
   <div class="team-members row" v-if="alumnis">
	    <div class="col-md-4 col-sm-6 col-xs-12"  v-for="alumni in alumnis" :key="alumni.title">	
			<div class="single-member">
				<div class="best-volunteer">
					<div class="voluntee-image">
						<a href="#" title=""><img :src="`/img/alumni/${alumni.imageUrl}`" :alt="alumni.title"></a>
					</div>						
					<h2><a href="#" title="">{{alumni.title}}</a></h2>
					<span><a href="#" title="">{{alumni.name}}</a></span>
					<p>{{alumni.airline}}</p>
				</div>					
			</div>
		</div>					
  </div>	
</template>

<script>
export default {
  props: ['alumnis']
}
</script>

