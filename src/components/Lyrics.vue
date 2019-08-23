<template>
	<div>
		<div class="row">
			<a @click="$router.go(-1)" class="btn btn-primary text-white" style="margin-bottom:20px; width:140px;"> Go Back</a>
		</div>
		<div class="row">
			<div class="card">
				<h5 class="card-header">{{track.track_name}}</h5>
				<div class="card-body">
					<p class="card-text">{{lyrics.lyrics_body}}</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="card details">
				<ul class="list-group list-group-flush">
					<li class="list-group-item"><span class="descr">Album Name : </span>{{track.album_name}}</li>
					<li class="list-group-item"><span class="descr">Artist Name : </span>{{track.artist_name}}</li>
					<li class="list-group-item"><span class="descr">Song Genre : </span>{{songGenre}}</li>
					<li class="list-group-item"><span class="descr">Explicit Content : </span>{{track.explicit}}</li>
					<li class="list-group-item"><span class="descr">Release Date : </span>{{track.updated_time | formatDate}}</li>

				</ul>
			</div>
		</div>
  </div>
</template>
<script>
import api from '../api/client'

export default {
	name:'lyrics',
	data(){
		return{
			lyrics:{
				lyrics_id: null,
				lyrics_body: '',
			},
			track:{
				track_name: '',
				album_name : '',
				artist_name : '',
				explicit: null,
				upated_time: null,
				primary_genres:{
					music_genre_list:[]
				}
			}
		}
	},
	created(){
		api.getLyric({params: {track_id: this.$route.params.id, apikey:'f5ea45c1c8fb098deb912574e46f2c10'}})
		.then((res)=>{
			this.lyrics = res.data.message.body.lyrics;
			return api.getTrack({params: {track_id: this.$route.params.id, apikey:'f5ea45c1c8fb098deb912574e46f2c10'}})
		})
		.then((res)=>{
			this.track = res.data.message.body.track;
		})
		.catch(err=>{console.log(err)})
	}, 
	computed:{
		songGenre(){
			return this.track.primary_genres.music_genre_list.length !== 0 ? this.track.primary_genres.music_genre_list[0].music_genre.music_genre_name : 'Genre Not Available'
		}
	},  
	props:[] 
}
</script>
<style lang="scss" scoped>
.details{
	width:100%;
	text-align: left;
	margin-top:30px;
	.list-group-item{
		background-color: rgb(250, 247, 244);
	}
}
.descr{
		margin-left:5px;
		font-weight:bold;
	}

</style>