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
 import api from './api/client'
export default {
  name: 'app',
  
	data(){
		return {
			track:'',
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
