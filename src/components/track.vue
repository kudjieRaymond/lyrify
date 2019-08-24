<template>
	<div class="col-md-4">
		<div class="card mb-4 shadow-sm">
			<img class="bd-placeholder-img card-img-top"  src="../assets/thumbnail.jpg" width="100%" alt="Thumbnail">
			<div class="card-body">
				<p class="card-text"><font-awesome-icon icon="user-alt" /><span class="description">Artists : </span>{{artist_name}}</p>
				<p class="card-text"><font-awesome-icon icon="headphones-alt" /><span class="description">Track : </span>{{track_name}}</p>
				<p class="card-text"><font-awesome-icon icon="compact-disc" /><span class="description">Album : </span>{{album_name}}</p>
				<p class="card-text"><font-awesome-icon icon="exclamation-circle" /><span class="description">Explicit Content : </span>{{isExplicit}}</p>

				<div class="d-flex justify-content-flex-end align-items-flex-end">
					<div class="btn-group">
						<router-link :to="{name: 'lyrics', params: {id: track_id}}" class="btn btn-block btn-outline-secondary">View Lyrics</router-link>
						
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {

		}
	},
	computed:{
		isExplicit(){
			return this.explicit ? 'Yes' : 'No';
		}
	},
	methods:{

	},
	props: ['artist_name', 'album_name', 'track_name', 'explicit', 'track_id']
}
</script>
<style lang="scss" scoped>
	.description{
		margin-left:5px;
		font-weight:bold;
	}
</style>