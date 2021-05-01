<template>
     <main class="w-full bg-gray-50">
         <Banner />
         <section class="w-full">
             <section class="container mx-auto py-4">
                <header class="py-4 flex flex-wrap items-center md:w-auto w-11/12 md:mx-none mx-auto">
                    <h4 class="text-4xl font-bold text-gray-700 w-full pb-4">
                        Lista de icones
                    </h4>
                    <input v-model="filter" class="md:w-3/12 w-full md:mx-1 mx-auto bg-white shadow py-2 px-4 rounded-md text-lg" placeholder="Ex. docker" type="text">
                    <button v-on:click="filterEl" class="mr-1 md:w-auto w-5/12 md:mt-0 mt-2 px-4 py-2 text-lg bg-watchos-lilac rounded-md text-white hover:bg-watchos-dragonfruit">
                        <i class='ico ico-oct-search mr-2'></i> Filtrar
                    </button>
                    <button v-on:click="resetFilter" v-if="filterStatus" class="mr-1 md:w-auto w-5/12 md:mt-0 mt-2 px-4 py-2 text-lg bg-watchos-pomagranate rounded-md text-white hover:bg-watchos-dragonfruit">
                        <i class='ico ico-mdi-reload mr-2'></i> Resetar
                    </button>
                    <section v-if="!filterStatus" class="w-full md:px-0 px-1">
                        <p class="text-sm pt-2 text-gray-500 font-serif">
                            página {{page + 1}}
                        </p>
                    </section>
                </header>
                 <section class="md:w-full w-11/12 mx-auto grid md:grid-cols-6 grid-cols-2 grid-rows gap-x-2">
                     <div :data-clipboard-text="`<i class='ico ${classe}'></i>`" v-bind:key="`classe-${index}`" v-for="(classe, index) in classes" class="copy bg-gray-100 hover:bg-gray-400 cursor-pointer space-y-4 my-1 shadow rounded-lg text-center py-2 text-5xl text-gray-600 leading-4">
                         <i :class="`ico ${classe}`"></i>
                         <span class="text-sm font-mono block px-4 break-words">
                             {{classe}}
                         </span>
                     </div>
                 </section>
                 <section v-if="!filterStatus" class="md:w-full w-11/12 mx-auto grid md:grid-cols-6 grid-cols-2 grid-rows gap-x-2">
                     <div v-on:click="prevPage" v-if="page" class="copy bg-gray-100 hover:bg-gray-400 cursor-pointer space-y-4 my-1 shadow rounded-lg text-center py-2 text-5xl text-gray-600 leading-4">
                         <i class='ico ico-fa-angle_left'></i>
                         <span class="text-sm font-mono block px-4 break-words">
                             Página anterior
                         </span>
                     </div>
                     <div v-on:click="nextPage" class="copy bg-gray-100 hover:bg-gray-400 cursor-pointer space-y-4 my-1 shadow rounded-lg text-center py-2 text-5xl text-gray-600 leading-4">
                         <i class='ico ico-fa-angle_right'></i>
                         <span class="text-sm font-mono block px-4 break-words">
                             Próxima página
                         </span>
                     </div>
                 </section>
             </section>
         </section>
         <Footer />
    </main>
</template>
<script>
import Copy from 'clipboard';
import Banner from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';

import { classes } from '../assets/js/font-icons.json';

export default {
    name: 'Icons',
    data() {
        return {
            page: 0,
            classes: classes.slice(0, 102),
            filter: '',
            filterStatus: false,
        };
    },
    methods: {
        filterEl() {
            if (!this.filter) return;
            const results = classes.filter((v) => v.indexOf(this.filter) >= 0);
            this.filterStatus = true;
            if (!results.length) {
                this.classes = [];
                return;
            }
            this.classes = results;
        },
        backToPageCurrent() {
            this.classes = classes.slice(102 * this.page, (102 * this.page) + 102);
        },
        resetFilter() {
            this.filterStatus = false;
            this.backToPageCurrent();
            this.filter = '';
        },
        nextPage() {
            this.page += 1;
            this.backToPageCurrent();
        },
        prevPage() {
            this.page -= 1;
            this.backToPageCurrent();
        },
    },
    components: {
        Banner,
        Footer,
    },
    mounted() {
        const clipboard = new Copy('.copy');
        clipboard.on('success', (e) => {
            console.log(e);
        });
    },
};
</script>
