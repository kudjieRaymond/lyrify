<template>
  <div id="app">
		<nav class="navbar navbar-light bg-light">
			<a class="navbar-brand">LYRIFY</a>
			<form class="form-inline">
				<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
				<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>
		</nav>
		<main>
			<div class="container">
				<div class="row">
					<Track v-for="track in tracks" v-bind:key="track.track_id"></Track>
				</div>
			</div>
		</main>
  </div>
</template>

<script>
import Track from './components/track.vue'
import api from './api/client'
 
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
				console.log(res.data.message.body);
				this.tracks = res.data.message.body.track_list;
			})
			.catch(err=>console.log(err));
	},
	methods:{

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
