<template>
  <section class="w-full">
    <section class="w-full">
        <Header />
    </section>
    <section class="w-full">
        <section class="container mx-auto py-8">
            <header class="w-full mx-auto">
                <h4 class="text-4xl font-bold text-gray-700">
                    Lista de cores
                </h4>
                <p class="my-2 text-lg text-sepia-900">
                    Abaixo serve uma lista de cores que pode ser usado dentro desta configuração do Tailwind Css.
                </p>
                <section class="w-full py-2">
                    <pre class='language-css font-mono w-full block rounded-lg' v-html="cssCode">
                    </pre>
                    <p class="text-sepia-900 text-lg font-mono my-1">
                        .text-sepia-900
                    </p>
                    <button class="bg-sepia-900 text-lg px-4 py-1 font-mono text-sepia-200 rounded-md ring-4 ring-sepia-500">
                        .bg-sepia-900 .ring-sepia-500
                    </button>
                </section>
            </header>
            <section class="w-full py-4">

                <section class="w-11/12 mx-auto py-2">
                    <section class="w-full py-1 px-1 shadow rounded">
                        <section class="w-full mx-auto flex flex-row gab-x-2 items-center py-4 px-2">
                            <div class="w-36 flex-shrink-0 space-y-3">
                                <h5 class="text-lg font-bold px-4 py-1 leading-4">
                                    Magenta<br />
                                    <span class="text-sm font-code font-light text-magenta-default">
                                        #ff317b
                                    </span><br />
                                    <span class="text-sm text-gray-600 font-code font-light">
                                        *-magenta-*
                                    </span>
                                </h5>
                            </div>
                            <div class="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-11 gap-x-4 gap-y-3 2xl:gap-x-2">
                                <div class="space-y-1.5">
                                    <div class=" bg-magenta-default h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        default<br />
                                        #ff317b
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-magenta-50 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        50<br />
                                        #ff97bc
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-magenta-100 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        100<br />
                                        #fe7eac
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-magenta-200 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        200<br />
                                        #fe659c
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-magenta-300 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        300<br />
                                        #fd4c8c
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-magenta-400 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        400<br />
                                        #fc347c
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-magenta-500 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        500<br />
                                        #fc1b6c
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-magenta-600 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        600<br />
                                        #f9045c
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-magenta-700 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        700<br />
                                        #df0553
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-magenta-800 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        800<br />
                                        #c5054a
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-magenta-900 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        900<br />
                                        #ac0441
                                    </span>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>

                <section class="w-11/12 mx-auto py-2">
                    <section class="w-full py-1 px-1 shadow rounded">
                        <section class="w-full mx-auto flex flex-row gab-x-2 items-center py-4 px-2">
                            <div class="w-36 flex-shrink-0 space-y-3">
                                <h5 class="text-lg font-bold px-4 py-1 leading-4">
                                    Red Sun
                                </h5>
                                <span class="text-sm text-gray-600 font-code font-light">
                                    *-redsun-*
                                </span>
                            </div>
                            <div class="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                                <div class="space-y-1.5">
                                    <div class=" bg-redsun-50 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        50<br />
                                        #fdece7
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-redsun-100 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        100<br />
                                        #fbd9d0
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-redsun-200 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        200<br />
                                        #f9c7b8
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-redsun-300 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        300<br />
                                        #f7b4a1
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-redsun-400 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        400<br />
                                        #f4a28a
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-redsun-500 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        500<br />
                                        #f28f73
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-redsun-600 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        600<br />
                                        #ef7d5c
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-redsun-700 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        700<br />
                                        #ed6b45
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-redsun-800 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        800<br />
                                        #ea582f
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-redsun-900 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        900<br />
                                        #e74618
                                    </span>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>

                <section class="w-11/12 mx-auto py-2">
                    <section class="w-full py-1 px-1 shadow rounded">
                        <section class="w-full mx-auto flex flex-row gab-x-2 items-center py-4 px-2">
                            <div class="w-36 flex-shrink-0 space-y-3">
                                <h5 class="text-lg font-bold px-4 py-1 leading-4">
                                    Sépia
                                </h5>
                                <span class="text-sm text-gray-600 font-code font-light">
                                    *-sepia-*
                                </span>
                            </div>
                            <div class="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                                <div class="space-y-1.5">
                                    <div class=" bg-sepia-50 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        50<br />
                                        #f7f2ee
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-sepia-100 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        100<br />
                                        #efe5dc
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-sepia-200 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        200<br />
                                        #e6d7cb
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-sepia-300 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        300<br />
                                        #decaba
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-sepia-400 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        400<br />
                                        #d5bda9
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-sepia-500 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        500<br />
                                        #cdb098
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-sepia-600 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        600<br />
                                        #c4a388
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-sepia-700 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        700<br />
                                        #bb9677
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-sepia-800 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        800<br />
                                        #b28967
                                    </span>
                                </div>
                                <div class="space-y-1.5">
                                    <div class=" bg-sepia-900 h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        900<br />
                                        #a97c56
                                    </span>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>

                <section class="w-11/12 mx-auto py-4 mt-6">
                    <h4 class="text-2xl font-bold text-gray-700 leading-4">
                        watchOS-colors<br />
                        <span class="text-sm text-gray-600 font-code font-light">
                            *-watchos-*
                        </span>
                    </h4>
                </section>
                <section class="w-11/12 mx-auto">
                    <section class="w-full py-1 px-0 rounded">
                        <section class="w-full mx-auto flex flex-row gab-x-2 items-center py-4">
                            <div class="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-11 gap-x-4 gap-y-3 2xl:gap-x-2">
                                <div :key="`color-watchos-${index}`" v-for="(color, index) in watchos" class="space-y-1.5">
                                    <div :class="`bg-watchos-${color[0]} h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0 shadow`"></div>
                                    <span class="text-sm py-1 font-code leading-2 block">
                                        {{color[0]}}<br />
                                        {{color[1]}}
                                    </span>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import customColors from '../assets/js/watchos';

const { watchos } = customColors;

export default {
    name: 'Colors',
    data() {
        return {
            watchos,
            cssCode: '',
        };
    },
    methods: {
        loadPrism() {
            const Prism = this.prism();
            const code = (`<!--
    Ex: Usando a cor Sépia:
-->
<p class="text-sepia-900 text-lg font-mono my-1">
    .text-sepia-900
</p>
<button class="bg-sepia-900 text-lg px-4 py-1 font-mono text-sepia-200 rounded-md ring-4 ring-sepia-500">
    .bg-sepia-900 .ring-sepia-500
</button>`).trim();
            this.cssCode = Prism.highlight(code, Prism.languages.html, 'html');
        },
    },
    components: {
        Header,
    },
    mounted() {
        this.loadPrism();
    },
};
</script>
