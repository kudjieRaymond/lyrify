<template>
  <div>
			
		<div class="row">
			<Track v-for="item in tracks" v-bind:key="item.track_id" v-bind="item.track"></Track>
		</div>
  </div>
</template>

<script>
import Track from './track.vue'
import api from '../api/client'
 
export default {
  name: 'app',
  components: {
		Track
	},
	data(){
		return {
			tracks: []
		}
	},
	created(){
		api.chartTop({params:{page: 1 , page_size	: 12, country: 'us' , f_has_lyrics:1, apikey: 'f5ea45c1c8fb098deb912574e46f2c10'}})
			.then((res)=>{
				this.tracks = res.data.message.body.track_list;
			})
			.catch(err=>console.log(err));
	},
	method:{
		
	}
	
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
