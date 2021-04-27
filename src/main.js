import Vue from 'vue';
import Prism from 'prismjs';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/css/tailwind.bundle.css';
import '../node_modules/prism-themes/themes/prism-synthwave84.css';
import modals from './assets/js/modals/index';

Vue.mixin({
    methods: {
        modals() {
            modals.init();
        },
        prism() {
            return Prism;
        },
        getCode(imageLink) {
            const $Prism = this.prism();
            const code = `
<!-- Image Mode -->
<img
    class="inline"
    src="${imageLink}" />
`;
            return [$Prism.highlight(code, $Prism.languages.html, 'html'), code.trim()];
        },
    },
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
