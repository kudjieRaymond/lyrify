<template>
  <div>
			<div class="jumbotron jumbotron-fluid search-cont ">
				<div class="container">
					<h2 class="jumbotron-heading text-white mb-5">Welcome to Lyrify, Enter Any Song and we shall get the Lyrics  for you</h2>
					<form class="form-inline">
						<div class="form-group col-md-8">
						<input class="form-control ht w-100" v-model="track" type="search" placeholder="Search Track" aria-label="Search" >
						</div>
						<div class="form-group col-md-4">
							<button class="btn btn-block btn-outline-info ht" @click.prevent="searchTrack()">Search</button>
						</div>
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
		api.chartTop({params:{page: 1 , page_size	: 12, country: 'gh' , f_has_lyrics:1, apikey: 'f5ea45c1c8fb098deb912574e46f2c10'}})
			.then((res)=>{
				this.tracks = res.data.message.body.track_list;
			})
			.catch(err=>console.log(err));
	},
	methods:{
		searchTrack(){
			api.find({params: {q_track:this.track ,page_size:10, page:1 ,s_track_rating:'desc', f_has_lyrics:1, apikey: 'f5ea45c1c8fb098deb912574e46f2c10'}})
					.then((res)=>{
						this.tracks = res.data.message.body.track_list;
					})
					.catch(err=>{console.log(err)})
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
.ht{
	height:55px!important
}
.search-cont{
	background-color:  rgb(65, 14, 66)!important;
}

</style>
