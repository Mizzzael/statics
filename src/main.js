import Vue from 'vue';
import Prism from 'prismjs';
import anime from 'animejs';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/css/tailwind.bundle.css';
import './assets/css/icons.css';
import 'prism-material-themes/themes/material-default.css';
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
        menuFixed() {
            let show = false;
            window.addEventListener('scroll', () => {
                const position = window.scrollY;
                if (position >= 250 && !show) {
                    show = true;
                    anime({
                        targets: '#header',
                        translateY: [-200, 2],
                        duration: 200,
                    });
                } else if (position < 250 && show) {
                    show = false;
                    anime({
                        targets: '#header',
                        translateY: [2, -200],
                        duration: 100,
                        easing: 'linear',
                    });
                }
            }, false);
        },
    },
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
