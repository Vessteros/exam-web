window.Vue = require('vue');

/** Стили */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './../css/style.css';
/** /Стили */

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

Vue.component('app-index-header', require('./components/index/app-header.vue').default);
Vue.component('app-index-main', require('./components/index/app-main.vue').default);
Vue.component('app-index-carousel', require('./components/index/app-carousel.vue').default);
Vue.component('app-index-desc', require('./components/index/app-desc.vue').default);
Vue.component('app-index-advantages', require('./components/index/app-advantages.vue').default);
Vue.component('app-index-pre-logic-desc', require('./components/index/app-pre-logic-desc.vue').default);
Vue.component('app-index-logic-main', require('./components/index/app-logic-main.vue').default);
Vue.component('app-index-filter-form', require('./components/index/app-filter-form.vue').default);
Vue.component('app-index-cafe-list', require('./components/index/app-cafe-list.vue').default);
Vue.component('app-index-menu-list', require('./components/index/app-menu-list.vue').default);
Vue.component('app-index-menu-set', require('./components/index/app-menu-set.vue').default);
Vue.component('app-index-options-form', require('./components/index/app-options-form.vue').default);
Vue.component('app-index-additional-options', require('./components/index/app-additional-options.vue').default);
Vue.component('app-index-order-price-computing', require('./components/index/app-order-price-computing.vue').default);
Vue.component('app-index-order-popup', require('./components/index/app-order-popup.vue').default);
Vue.component('app-index-order-pos', require('./components/index/app-order-pos.vue').default);
Vue.component('app-index-menu-separator', require('./components/index/app-menu-separator.vue').default);
Vue.component('app-index-footer-separator', require('./components/index/app-footer-separator.vue').default);

Vue.component('app-admin-header', require('./components/admin/app-header.vue').default);
Vue.component('app-admin-main', require('./components/admin/app-main.vue').default);
Vue.component('app-admin-page-title', require('./components/admin/app-page-title.vue').default);
Vue.component('app-admin-filter-form', require('./components/admin/app-filter-form.vue').default);
Vue.component('app-admin-delete-popup', require('./components/admin/app-delete-popup.vue').default);
Vue.component('app-admin-update-popup', require('./components/admin/app-update-popup.vue').default);
Vue.component('app-admin-create-popup', require('./components/admin/app-create-popup.vue').default);
Vue.component('app-admin-cafe-list', require('./components/admin/app-cafe-list.vue').default);

Vue.component('app-footer', require('./components/app-footer.vue').default);

const app = new Vue({
    el: '#exam',
});