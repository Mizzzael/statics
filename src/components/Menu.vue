<template>
    <section id="banner" class="banner w-full">
        <header class="header mx-auto container py-4">
            <section class="md:w-full w-10/12 mx-auto py-4 rounded-lg bg-gray-100 shadow-xl ring-4 ring-opacity-50 ring-gray-100">
                <section class="w-full flex flex-wrap items-center justify-center">
                    <div class="px-2 md:w-4/12 w-11/12 mx-auto md:text-left text-center">
                        <router-link to="/">
                            <span class="text-2xl">
                                Ornara<span class="px-2 text-watchos-dragonfruit font-bold">XDR</span>
                            </span>
                        </router-link>
                    </div>
                    <div class="px-2 md:w-6/12 w-11/12 mx-auto">
                        <nav class="w-full flex flex-wrap items-center md:justify-end justify-center">
                            <router-link to="cores">
                                <span class="md:px-4 px-2 mx-1 text-md font-mono">
                                    Cores
                                </span>
                            </router-link>
                            <router-link to="SVG">
                                <span class="md:px-4 px-2 mx-1 text-md font-mono">
                                    SVGs
                                </span>
                            </router-link>
                            <router-link to="icones">
                                <span class="md:px-4 px-2 mx-1 text-md font-mono">
                                    Icones
                                </span>
                            </router-link>
                            <a class="md:px-4 px-2 mx-1 text-md font-mono" href="">
                                Desenhos
                            </a>
                        </nav>
                    </div>
                </section>
            </section>
        </header>
        <section id="header" class="header header-float mx-auto container py-4 fixed left-0 right-0 top-0">
            <section class="md:w-full w-10/12 mx-auto py-4 rounded-lg bg-gray-100 shadow-xl ring-4 ring-opacity-50 ring-gray-100">
                <section class="w-full flex flex-wrap items-center justify-center">
                    <div class="px-2 md:w-4/12 w-11/12 mx-auto md:text-left text-center">
                        <router-link to="/">
                            <span class="text-2xl">
                                Ornara<span class="px-2 text-watchos-dragonfruit font-bold">XDR</span>
                            </span>
                        </router-link>
                    </div>
                    <div class="px-2 md:w-6/12 w-11/12 mx-auto">
                        <nav class="w-full flex flex-wrap items-center md:justify-end justify-center">
                            <router-link to="cores">
                                <span class="md:px-4 px-2 mx-1 text-md font-mono">
                                    Cores
                                </span>
                            </router-link>
                            <router-link to="SVG">
                                <span class="md:px-4 px-2 mx-1 text-md font-mono">
                                    SVGs
                                </span>
                            </router-link>
                            <router-link to="icones">
                                <span class="md:px-4 px-2 mx-1 text-md font-mono">
                                    Icones
                                </span>
                            </router-link>
                            <a class="md:px-4 px-2 mx-1 text-md font-mono" href="">
                                Desenhos
                            </a>
                        </nav>
                    </div>
                </section>
            </section>
        </section>
    </section>
</template>
<style lang="stylus" scoped>
.header
    z-index 999999

.header-float
    transform translateY(-200px)
</style>
<script>
export default {
    name: 'Menu',
    mounted() {
        this.menuFixed();
    },
};
</script>
