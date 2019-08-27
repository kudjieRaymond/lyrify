<template>
  <div>
		<div v-if="error">
			{{error}}
		</div>
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

		<div v-if="searching" class="row">
			<h3 class="text-white">Searching ....</h3>
  	</div>
		<div class="row">
			<Track v-for="item in tracks" v-bind:key="item.track_id" v-bind="item.track"></Track>
		</div>
  </div>
</template>

<script>
import Track from './track.vue'
import api from '../api/client'
 
 const getTracks = (url, callback) =>{
	api.chartTop({params:{page: 1 , page_size	: 12, country: 'gh' , f_has_lyrics:1, apikey: process.env.VUE_APP_MUSIX_MATCH_KEY}})
			.then((res)=>{
				this.tracks = callback(null, res.data.message.body.track_list);
			})
			.catch(err=> {
				callback(err, null); 
				});
 }
export default {
  name: 'app',
  components: {
		Track
	},
	data(){
		return {
			track:'',
			tracks: [],
			error: '',
			searching:false,
		}
	},
	beforeRouteEnter(to, from, next){
		getTracks(to, (err, data) => {
			next(vm => vm.setData(err, data))
		})
	},
	created(){

	},
	methods:{
		searchTrack(){
			this.searching =true ;
			api.find({params: {q_track:this.track ,page_size:10, page:1 ,s_track_rating:'desc', f_has_lyrics:1, apikey: process.env.VUE_APP_MUSIX_MATCH_KEY}})
					.then((res)=>{
						this.searching =false;
						this.tracks = res.data.message.body.track_list;
					})
					.catch(err=>{console.log(err)})
		},
		setData(err, data){
			if(err){
				this.err = err.toString()
			}else{
				this.tracks = data
			}
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
