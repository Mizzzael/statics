<template>
    <footer class="footer w-full mt-12 bg-watchos-alaskanblue">
        <section class="container mx-auto py-8">
            <section class="w-full flex flex-wrap items-center justify-center">
                <aside class="md:w-5/12 w-11/12 mx-auto px-1 py-1">
                    <section class="w-full flex flex-wrap items-center justify-center md:py-0 py-4">
                        <figure class="photo photo-rounded photo-lg ring-8 ring-white ring-opacity-70 shadow md:-mr-8 relative">
                            <img src="../assets/images/avatar.jpg" alt="">
                        </figure>
                        <div class="md:w-7/12 w-full bg-white pl-12 rounded-lg ring-8 ring-white ring-opacity-80">
                            <section class="w-full px-2 py-2">
                                <h4 class="text-lg font-serif">
                                    Machine Head
                                </h4>
                                <p class="text-sm font-mono">
                                    Desenvolvedor Web
                                </p>
                                <ul class="grid grid-cols-3 gap-2 w-6/12">
                                    <li class="text-left text-xl">
                                        <a href="https://www.linkedin.com/in/mizzzael606/" target="_blank">
                                            <i class='ico ico-fa-linkedin'></i>
                                        </a>
                                    </li>
                                    <li class="text-left text-xl">
                                        <a href="https://github.com/Mizzzael" target="_blank">
                                            <i class='ico ico-fa-github'></i>
                                        </a>
                                    </li>
                                    <li class="text-left text-xl">
                                        <a href="https://www.facebook.com/mizzzael1/" target="_blank">
                                            <i class='ico ico-fa-facebook'></i>
                                        </a>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </section>
                </aside>
                <section class="md:w-7/12">
                    <section class="w-full px-4 flex flex-wrap items-center justify-center">
                        <div class="md:w-4/12 w-6/12">
                            <p class="m-0">
                                <small class="text-sm text-gray-800">
                                    Powered Using:
                                </small>
                            </p>
                            <a href="https://tailwindcss.com/" target="_blank" class="text-sepia-50 text-lg my-1 px-4">
                                TailwindCss
                            </a>
                            <br />
                            <a href="https://www.nerdfonts.com/" target="_blank" class="text-sepia-50 text-lg my-1 px-4">
                                Nerd Fonts
                            </a>
                            <br />
                            <a href="https://svgporn.com/" target="_blank" class="text-sepia-50 text-lg my-1 px-4">
                                Svg Porn
                            </a>
                        </div>
                        <div class="md:w-4/12 w-6/12">
                            <p class="m-0">
                                <small class="text-sm text-gray-800">
                                    Menu:
                                </small>
                            </p>
                            <router-link to="cores">
                                <span class="text-sepia-50 text-lg my-1 px-4">
                                    Cores
                                </span>
                            </router-link>
                            <br />
                            <router-link to="SVG">
                                <span class="text-sepia-50 text-lg my-1 px-4">
                                    SVGs
                                </span>
                            </router-link>
                            <br />
                            <router-link to="icones">
                                <span class="text-sepia-50 text-lg my-1 px-4">
                                    Icones
                                </span>
                            </router-link>
                        </div>
                        <div class="md:w-4/12 w-11/12 mx-auto md:py-0 py-4">
                            <p class="md:text-left text-center text-lg text-white">
                                <a href="mailto: mizzzael606@gmail.com" target="_blank">
                                    <i class='ico ico-mdi-email_outline mr-2'></i>
                                    mizzzael606@gmail.com
                                </a><br />
                                <small class="text-sm text-gray-800">
                                    <i class='ico ico-oct-location mr-2'></i>Guarulhos, SP - Brazil
                                </small>
                            </p>
                        </div>
                    </section>
                </section>
            </section>
        </section>
        <section class="w-full bg-gradient-to-r from-watchos-cerulian to-watchos-oceanblue">
            <section class="container mx-auto py-2">
                <p class="md:text-lg text-sm text-white text-center font-light">
                    &copy; Todos os direitos reservados {{new Date().getFullYear()}}
                </p>
            </section>
        </section>
    </footer>
</template>
<style lang="stylus" scoped>
.footer
    background: #cf3cc8;
    background: linear-gradient( -45deg,#1871ac,#0f6d8e);
</style>
<style lang="stylus">
.photo
    overflow hidden
    & img
        width 100%
    &-rounded
        border-radius 100%
    &-xs
        width 16px
        height 16px
    &-sm
        width 32px
        height 32px
    &-md, &-tiny
        width 64px
        height 64px
    &-lg
        width 128px
        height 128px
    &-xl
        width 256px
        height 256px
    &-2xl
        width 512px
        height 512px
    &-3xl
        width 1024px
        height 1024px
    &-4xl
        width 2048px
        height 2048px
</style>
