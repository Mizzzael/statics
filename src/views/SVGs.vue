<template>
    <section class="w-full bg-gradient-to-r from-watchos-deepnavy via-watchos-deepnavy to-watchos-midnightblue">
        <section class="w-full">
            <Header />
        </section>
        <router-view></router-view>
        <section class="w-full">
            <Footer />
        </section>
    </section>
</template>
<script>
import Header from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'SVGs',
    components: {
        Header,
        Footer,
    },
};
</script>
