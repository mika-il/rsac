<template>
<div class="slider-section" v-if="slides">
		<div class="slider-active">
            <no-ssr placeholder="Loading...">
                <agile :autoplay="true" :arrows="false" >
  
                    <div v-for="slide in slides" :key="slide.title" class="single-slider slider-screen nrbop bg-black-alfa-40" :style="{ 'background-image': `url(slides/${slide.imageUrl})` }">
                        <div class="container">
                            <div class="slider-content text-white">
                                <h2 class="text-orange">{{ slide.title }}</h2>
                                <p>{{ slide.description }}</p>                            
                                <div class="slider_button"><nuxt-link to="/admissions">Apply Now</nuxt-link></div>
                            </div>
                        </div>				
                    </div>
               </agile>
              </no-ssr>			
		</div>
</div>
</template>

<script>

export default {
  props: ['slides']
}
</script>

