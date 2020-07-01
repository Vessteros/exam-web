window.Vue = require('vue');

/** Библиотеки */
Vue.use(
    require('element-ui'),
    require('element-ui/lib/locale/lang/en')
);
Vue.use(require('element-ui/lib/theme-chalk/index.css'));
Vue.use(require('bootstrap'));
/** /Библиотеки */

/** Кастомные */
import { eventbus, config } from "./helpers/modules";

Vue.prototype.$config   = config;
Vue.prototype.$eventBus = eventbus;
/** /Кастомные */

import axios from 'axios';
Vue.prototype.$axios = axios;

Vue.component('navbar', require('./components/navbar.vue').default);
Vue.component('carousel', require('./components/carousel.vue').default);

const app = new Vue({
    el: '#exam',
});