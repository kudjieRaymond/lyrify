import Home from './components/Home'
import Lyrics from './components/Lyrics'

const routes = [
	{ path: '/', component: Home },
	{ path:'/Lyrics/track/:id', component: Lyrics, name: 'lyrics'}
];

export default routes;