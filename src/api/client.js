import axios from 'axios';

const client = axios.create({
	baseURL: 'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1'
})

export default{
	chartTop(params){
		return client.get('/chart.tracks.get', params);
	},
	getTrack(params){
		return client.get('/track.search', params);
	},
	getLyric(params){
		return client.get('/track.lyrics.get', params);
	}

}