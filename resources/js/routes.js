import Home from './pages/Home';
import About from './pages/About';


export default  [
    {
        path: '/',
        component: Home,
        name: 'home'
    },

    {
        path: '/about',
        component: About,
        name: 'about'
    }
]