<template>
    <section class="w-full bg-white py-2">
        <section class="container mx-auto absolute-height">
            <header class="py-4 flex flex-wrap items-center md:w-auto w-11/12 md:mx-none mx-auto mb-4">
                <h4 class="text-4xl font-bold text-gray-700 w-full">
                    Lista:
                </h4>
                <router-link to="/SVG">
                    <span class="text-xl">
                        <i class='ico ico-weather-direction_left'></i> Voltar
                    </span>
                </router-link>
            </header>
            <section class="md:w-full w-11/12 mx-auto grid 2xl:grid-cols-11 grid-cols-3 gap-x-4 py-1">
                <div v-bind:key="`icon-${index}`" v-for="(item, index) in items" class="bg-gray-50 rounded-md py-2 text-center font-mono my-2">
                    <img :modal-target="`modal ${item.name}`" class="icon-size-5xl inline cursor-pointer" :src="`assets/icons/${item.filename}`" :alt="item.name"><br />
                    <span :modal-target="`modal ${item.name}`" class="font-mono text-sm py-1 cursor-pointer">
                        {{item.name}}
                    </span>
                    <section :modal-name="`modal ${item.name}`" class="modal hidden opacity-0 fixed w-full h-full left-0 top-0">
                        <section class="container mx-auto h-full">
                            <section class="w-full h-full flex flex-wrap items-center justify-center">
                                <section class="modal-content w-6/12 mx-auto bg-white rounded-md shadow opacity-0">
                                    <header class="w-full px-4 py-6 relative">
                                        <h4 class="text-left text-xl text-watchos-oceanblue">
                                            {{item.name}} Icon
                                        </h4>
                                        <button class="modal-close absolute top-4 right-4 focus:outline-none shadow-md px-1 py-1 rounded-md">
                                            <svg class="icon-size-2xl stroke-current text-magenta-900" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25 7L7 25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M25 25L7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                    </header>
                                    <section class="w-full px-4">
                                            <section class="w-full grid grid-cols-6 gap-x-4 py-1">
                                                <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                    <img class="icon-size-xs inline" :src="`assets/icons/${item.filename}`" :alt="item.name">
                                                    <br />
                                                    <span class="text-sm">
                                                        *-xs
                                                    </span>
                                                </section>
                                                <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                    <img class="icon-size-sm inline" :src="`assets/icons/${item.filename}`" :alt="item.name">
                                                    <br />
                                                    <span class="text-sm">
                                                        *-sm
                                                    </span>
                                                </section>
                                                <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                    <img class="icon-size-md inline" :src="`assets/icons/${item.filename}`" :alt="item.name">
                                                    <br />
                                                    <span class="text-sm">
                                                        *-md
                                                    </span>
                                                </section>
                                                <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                    <img class="icon-size-tiny inline" :src="`assets/icons/${item.filename}`" :alt="item.name">
                                                    <br />
                                                    <span class="text-sm">
                                                        *-tiny
                                                    </span>
                                                </section>
                                                <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                    <img class="icon-size-lg inline" :src="`assets/icons/${item.filename}`" :alt="item.name">
                                                    <br />
                                                    <span class="text-sm">
                                                        *-lg
                                                    </span>
                                                </section>
                                                <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                    <img class="icon-size-xl inline" :src="`assets/icons/${item.filename}`" :alt="item.name">
                                                    <br />
                                                    <span class="text-sm">
                                                        *-xl
                                                    </span>
                                                </section>
                                                <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                    <img class="icon-size-2xl inline" :src="`assets/icons/${item.filename}`" :alt="item.name">
                                                    <br />
                                                    <span class="text-sm">
                                                        *-2xl
                                                    </span>
                                                </section>
                                                <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                    <img class="icon-size-3xl inline" :src="`assets/icons/${item.filename}`" :alt="item.name">
                                                    <br />
                                                    <span class="text-sm">
                                                        *-3xl
                                                    </span>
                                                </section>
                                                <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                    <img class="icon-size-4xl inline" :src="`assets/icons/${item.filename}`" :alt="item.name">
                                                    <br />
                                                    <span class="text-sm">
                                                        *-4xl
                                                    </span>
                                                </section>
                                                <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                    <img class="icon-size-5xl inline" :src="`assets/icons/${item.filename}`" :alt="item.name">
                                                    <br />
                                                    <span class="text-sm">
                                                        *-5xl
                                                    </span>
                                                </section>
                                                <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                    <img class="icon-size-6xl inline" :src="`assets/icons/${item.filename}`" :alt="item.name">
                                                    <br />
                                                    <span class="text-sm">
                                                        *-6xl
                                                    </span>
                                                </section>
                                                <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                    <img class="icon-size-7xl inline" :src="`assets/icons/${item.filename}`" :alt="item.name">
                                                    <br />
                                                    <span class="text-sm">
                                                        *-7xl
                                                    </span>
                                                </section>
                                        </section>
                                        <pre class="language-html font-mono w-full block rounded-lg" v-html="getCode(`${baseUrl}assets/icons/${item.filename}`)[0]">
                                        </pre>
                                        <footer class="flex flex-wrap items-center justify-end py-2 mb-4 px-2">
                                            <button :data-clipboard-text="getCode(`${baseUrl}assets/icons/${item.filename}`)[1]" class="copy bg-sepia-100 text-sepia-900 hover:bg-magenta-50 hover:text-magenta-default px-6 py-1 rounded-lg text-lg transition duration-900 linear">
                                                Copiar
                                            </button>
                                        </footer>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </div>
            </section>
        </section>
    </section>
</template>
<script>
import Copy from 'clipboard';
import Icons from '../../assets/js/icons.json';

const {
    browsers,
    coding,
    messengers,
    socialmedia,
    design,
    syop,
    music,
    video,
    money,
    produtivity,
    cryptocurrency,
    other,
} = Icons.icons;

const routes = {
    browsers,
    codigos: coding,
    mensagens: messengers,
    socialmedia,
    design,
    os: syop,
    musicas: music,
    video,
    dinheiro: money,
    produtividade: produtivity,
    'moedas-digitais': cryptocurrency,
    outros: other,
};

export default {
    name: 'List',
    data() {
        return {
            items: [],
            baseUrl: `${window.location.protocol}//${window.location.hostname}/`,
        };
    },
    updated() {
        this.modals();
    },
    mounted() {
        const clipboard = new Copy('.copy');
        const rr = this.$router.history.current.path.split('/')[2];
        this.items = routes[rr];
        clipboard.on('success', (e) => {
            console.log(e);
        });
    },
};
</script>
