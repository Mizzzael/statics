<template>
     <main class="w-full bg-gray-50">
         <Banner />
         <section class="w-full">
             <section class="container mx-auto py-4">
                <header class="py-4">
                    <input class="w-3/12 bg-white shadow py-2 px-2 rounded-md" placeholder="Ex. docker" type="text">
                </header>
                 <section class="w-full grid grid-cols-6 grid-rows gap-x-2">
                     <div :data-ico="classe" v-bind:key="`classe-${index}`" v-for="(classe, index) in classes" class="bg-gray-100 cursor-pointer space-y-4 my-1 shadow rounded-lg text-center py-2 text-5xl text-gray-600 leading-4">
                         <i :class="`ico ${classe}`"></i>
                         <span class="text-sm font-mono block px-4 break-words">
                             {{classe}}
                         </span>
                     </div>
                 </section>
             </section>
         </section>
         <Footer />
    </main>
</template>
<script>
import Banner from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';

import { classes } from '../assets/js/font-icons.json';

export default {
    name: 'Icons',
    data() {
        return {
            classes: classes.slice(0, 240),
        };
    },
    components: {
        Banner,
        Footer,
    },
};
</script>
