<template>
  <div>
			<div class="jumbotron jumbotron-fluid">
				<div class="container">
					<form class="form-inline">
						<input class="form-control mr-sm-2" v-model="track" type="search" placeholder="Search Track" aria-label="Search">
						<button class="btn btn-outline-success my-2 my-sm-0" type="button" @click.prevent="searchTrack()">Search</button>
					</form>
				</div>
			</div>
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
			track:'',
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
	methods:{
		searchTrack(){
			api.find({params: {q_track:this.track ,page_size:10, page:1 ,s_track_rating:'desc', f_has_lyrics:1, apikey: 'f5ea45c1c8fb098deb912574e46f2c10'}})
					.then((res)=>{
						console.log(res.data.message.body.track_list);
						this.tracks = res.data.message.body.track_list;
					})
		}
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
