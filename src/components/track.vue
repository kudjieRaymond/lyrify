<template>
	<div class="col-md-4">
		<div class="card mb-4 shadow-sm">
			<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
			<div class="card-body">
				<p class="card-text"><span class="description">Artists : </span>DaVido feat. Chris Brown</p>
				<p class="card-text"><font-awesome-icon icon="coffee" /><span class="description">Track : </span>Blow My Mind</p>
				<p class="card-text"><span class="description">Album : </span>Blow My Mind</p>
				<p class="card-text"><span class="description">Explicit Content : </span>Blow My Mind</p>

				<div class="d-flex justify-content-flex-end align-items-flex-end">
					<div class="btn-group">
						<button type="button" class="btn btn-block btn-outline-secondary">
							View Lyrics
							</button><font-awesome-icon icon="coffee" />
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
	}
}
</script>
<style lang="scss" scoped>
	.description{

		font-weight:bold;
	}
</style>