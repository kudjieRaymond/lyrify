<template>
  <div id="app">
		<nav class="navbar navbar-light bg-info">
			<a class="navbar-brand text-white logo">LYRIFY</a>
		</nav>
		<main>
			<div class="container">
				<router-view ></router-view>
			</div>
		</main>
		<footer class="text-muted bg-info pt-1">
			<div class="container text-white" >
				<p class="float-right">
					<a href="#" class="text-white">Back to top</a>
				</p>
				<p>This is a just a demo project built with Vue js </p>
			</div>	
		</footer>
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
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
main{
	background-color:  #3F0E40;
}
.logo{
	font-weight: bolder;
}
footer{
	height:50px;
}
</style>
