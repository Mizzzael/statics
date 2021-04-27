<template>
  <header class="w-full">
    <section class="container mx-auto py-4 px-1">
        <section class="w-full flex flex-wrap items-center justify-center">
            <div class="w-4/12">
                <h2 class="text-2xl">
                    Ornara <span class="text-magenta-900 font-bold px-1">XDR</span>
                </h2>
            </div>
            <div class="w-8/12">
                <Menu />
            </div>
        </section>
    </section>
    <hr />
</header>
</template>

<script>
import Menu from './Menu.vue';

export default {
    name: 'Header',
    components: {
        Menu,
    },
};
</script>
