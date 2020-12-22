import { createApp } from 'vue'
import Vuex from 'vuex';
import App from './App.vue'

import router from './_helper/router'
import { store } from './_store';

createApp(App).use(router, store, Vuex).mount('#app')
