<template>
  <div id="app">
		<nav class="navbar navbar-light bg-light">
			<a class="navbar-brand">LYRIFY</a>
		</nav>
		<main>
			<div class="container">
				<router-view ></router-view>
			</div>
		</main>
  </div>
</template>

<script>
export default {
  name: 'app',
  
	data(){
		return {
			tracks: []
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
