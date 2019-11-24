require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router';

Vue.use(VueRouter);


import routes from './routes';

const router = new VueRouter({
    mode:'history',
    routes
});

import App from './App.vue';

new Vue({
    router,
    render: h=> h(App)
}).$mount('#app');