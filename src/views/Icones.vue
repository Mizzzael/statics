<template>
    <section class="w-full">
        <section class="w-full">
            <Header />
        </section>
        <section class="w-full">
            <header class="container mx-auto py-8">
                <h4 class="text-4xl font-bold text-gray-700">
                    Ícones:
                </h4>
                <p class="my-2 text-lg text-sepia-900">
                    Tamanho do icones em svg.<br />
                    Lembre-se de remover os atributos <span class="font-mono text-md text-sepia-600 bg-watchos-alaskanblue px-2 py-1 rounded-md">width</span> e
                    <span class="font-mono text-md text-sepia-600 bg-watchos-alaskanblue px-2 py-1 rounded-md">height</span><br />
                    <span class="font-mono text-md text-sepia-600 bg-watchos-alaskanblue px-2 py-1 rounded-md">
                        .icon-size-{size}
                    </span>
                </p>
                <section class="w-full flex flex-wrap items-end justify-start">
                    <section class="w-full py-2">
                        <pre class="language-html font-mono w-full block rounded-lg" v-html="htmlCode"></pre>
                    </section>
                    <div class="px-2 py-1 text-center leading-4">
                        <svg class="icon-size-xs inline" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                            <g>
                                <path d="M127.975926,0 C116.579432,27.9359185 109.705619,46.2092913 97.0171149,73.31478 C104.796757,81.5596475 114.3459,91.1612076 129.853677,102.005265 C113.181296,95.1459732 101.808692,88.2594065 93.3097611,81.1132005 C77.0708968,114.991716 51.6292657,163.250154 0,256 C40.5788694,232.577519 72.0348875,218.137309 101.350386,212.627303 C100.091566,207.21416 99.3758778,201.35879 99.4244875,195.249342 L99.4726349,193.949605 C100.116527,167.956688 113.640566,147.968131 129.661087,149.32531 C145.681616,150.68249 158.134196,172.866789 157.490314,198.859722 C157.369214,203.750768 156.817421,208.4559 155.853301,212.819857 C184.850516,218.491161 215.970178,232.894401 256,256 C248.106899,241.470984 241.061625,228.374136 234.333647,215.900715 C223.735984,207.688365 212.6821,196.999962 190.134286,185.429109 C205.632358,189.455404 216.728781,194.100675 225.378221,199.292967 C156.972972,71.9582954 151.433611,55.0381461 127.975926,0 Z" fill="#1793D1"></path>
                            </g>
                        </svg><br />
                        <span class="text-sm font-mono">
                            *-xs
                        </span>
                    </div>
                    <div class="px-2 py-1 text-center leading-4">
                        <svg class="icon-size-sm inline" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                            <g>
                                <path d="M127.975926,0 C116.579432,27.9359185 109.705619,46.2092913 97.0171149,73.31478 C104.796757,81.5596475 114.3459,91.1612076 129.853677,102.005265 C113.181296,95.1459732 101.808692,88.2594065 93.3097611,81.1132005 C77.0708968,114.991716 51.6292657,163.250154 0,256 C40.5788694,232.577519 72.0348875,218.137309 101.350386,212.627303 C100.091566,207.21416 99.3758778,201.35879 99.4244875,195.249342 L99.4726349,193.949605 C100.116527,167.956688 113.640566,147.968131 129.661087,149.32531 C145.681616,150.68249 158.134196,172.866789 157.490314,198.859722 C157.369214,203.750768 156.817421,208.4559 155.853301,212.819857 C184.850516,218.491161 215.970178,232.894401 256,256 C248.106899,241.470984 241.061625,228.374136 234.333647,215.900715 C223.735984,207.688365 212.6821,196.999962 190.134286,185.429109 C205.632358,189.455404 216.728781,194.100675 225.378221,199.292967 C156.972972,71.9582954 151.433611,55.0381461 127.975926,0 Z" fill="#1793D1"></path>
                            </g>
                        </svg><br />
                        <span class="text-sm font-mono">
                            *-sm
                        </span>
                    </div>
                    <div class="px-2 py-1 text-center leading-4">
                        <svg class="icon-size-tiny inline" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                            <g>
                                <path d="M127.975926,0 C116.579432,27.9359185 109.705619,46.2092913 97.0171149,73.31478 C104.796757,81.5596475 114.3459,91.1612076 129.853677,102.005265 C113.181296,95.1459732 101.808692,88.2594065 93.3097611,81.1132005 C77.0708968,114.991716 51.6292657,163.250154 0,256 C40.5788694,232.577519 72.0348875,218.137309 101.350386,212.627303 C100.091566,207.21416 99.3758778,201.35879 99.4244875,195.249342 L99.4726349,193.949605 C100.116527,167.956688 113.640566,147.968131 129.661087,149.32531 C145.681616,150.68249 158.134196,172.866789 157.490314,198.859722 C157.369214,203.750768 156.817421,208.4559 155.853301,212.819857 C184.850516,218.491161 215.970178,232.894401 256,256 C248.106899,241.470984 241.061625,228.374136 234.333647,215.900715 C223.735984,207.688365 212.6821,196.999962 190.134286,185.429109 C205.632358,189.455404 216.728781,194.100675 225.378221,199.292967 C156.972972,71.9582954 151.433611,55.0381461 127.975926,0 Z" fill="#1793D1"></path>
                            </g>
                        </svg><br />
                        <span class="text-sm font-mono">
                            *-tiny
                        </span>
                    </div>
                    <div class="px-2 py-1 text-center leading-4">
                        <svg class="icon-size-md inline" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                            <g>
                                <path d="M127.975926,0 C116.579432,27.9359185 109.705619,46.2092913 97.0171149,73.31478 C104.796757,81.5596475 114.3459,91.1612076 129.853677,102.005265 C113.181296,95.1459732 101.808692,88.2594065 93.3097611,81.1132005 C77.0708968,114.991716 51.6292657,163.250154 0,256 C40.5788694,232.577519 72.0348875,218.137309 101.350386,212.627303 C100.091566,207.21416 99.3758778,201.35879 99.4244875,195.249342 L99.4726349,193.949605 C100.116527,167.956688 113.640566,147.968131 129.661087,149.32531 C145.681616,150.68249 158.134196,172.866789 157.490314,198.859722 C157.369214,203.750768 156.817421,208.4559 155.853301,212.819857 C184.850516,218.491161 215.970178,232.894401 256,256 C248.106899,241.470984 241.061625,228.374136 234.333647,215.900715 C223.735984,207.688365 212.6821,196.999962 190.134286,185.429109 C205.632358,189.455404 216.728781,194.100675 225.378221,199.292967 C156.972972,71.9582954 151.433611,55.0381461 127.975926,0 Z" fill="#1793D1"></path>
                            </g>
                        </svg><br />
                        <span class="text-sm font-mono">
                            *-md
                        </span>
                    </div>
                    <div class="px-2 py-1 text-center leading-4">
                        <svg class="icon-size-lg inline" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                            <g>
                                <path d="M127.975926,0 C116.579432,27.9359185 109.705619,46.2092913 97.0171149,73.31478 C104.796757,81.5596475 114.3459,91.1612076 129.853677,102.005265 C113.181296,95.1459732 101.808692,88.2594065 93.3097611,81.1132005 C77.0708968,114.991716 51.6292657,163.250154 0,256 C40.5788694,232.577519 72.0348875,218.137309 101.350386,212.627303 C100.091566,207.21416 99.3758778,201.35879 99.4244875,195.249342 L99.4726349,193.949605 C100.116527,167.956688 113.640566,147.968131 129.661087,149.32531 C145.681616,150.68249 158.134196,172.866789 157.490314,198.859722 C157.369214,203.750768 156.817421,208.4559 155.853301,212.819857 C184.850516,218.491161 215.970178,232.894401 256,256 C248.106899,241.470984 241.061625,228.374136 234.333647,215.900715 C223.735984,207.688365 212.6821,196.999962 190.134286,185.429109 C205.632358,189.455404 216.728781,194.100675 225.378221,199.292967 C156.972972,71.9582954 151.433611,55.0381461 127.975926,0 Z" fill="#1793D1"></path>
                            </g>
                        </svg><br />
                        <span class="text-sm font-mono">
                            *-lg
                        </span>
                    </div>
                    <div class="px-2 py-1 text-center leading-4">
                        <svg class="icon-size-xl inline" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                            <g>
                                <path d="M127.975926,0 C116.579432,27.9359185 109.705619,46.2092913 97.0171149,73.31478 C104.796757,81.5596475 114.3459,91.1612076 129.853677,102.005265 C113.181296,95.1459732 101.808692,88.2594065 93.3097611,81.1132005 C77.0708968,114.991716 51.6292657,163.250154 0,256 C40.5788694,232.577519 72.0348875,218.137309 101.350386,212.627303 C100.091566,207.21416 99.3758778,201.35879 99.4244875,195.249342 L99.4726349,193.949605 C100.116527,167.956688 113.640566,147.968131 129.661087,149.32531 C145.681616,150.68249 158.134196,172.866789 157.490314,198.859722 C157.369214,203.750768 156.817421,208.4559 155.853301,212.819857 C184.850516,218.491161 215.970178,232.894401 256,256 C248.106899,241.470984 241.061625,228.374136 234.333647,215.900715 C223.735984,207.688365 212.6821,196.999962 190.134286,185.429109 C205.632358,189.455404 216.728781,194.100675 225.378221,199.292967 C156.972972,71.9582954 151.433611,55.0381461 127.975926,0 Z" fill="#1793D1"></path>
                            </g>
                        </svg><br />
                        <span class="text-sm font-mono">
                            *-xl
                        </span>
                    </div>
                    <div class="px-2 py-1 text-center leading-4">
                        <svg class="icon-size-2xl inline" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                            <g>
                                <path d="M127.975926,0 C116.579432,27.9359185 109.705619,46.2092913 97.0171149,73.31478 C104.796757,81.5596475 114.3459,91.1612076 129.853677,102.005265 C113.181296,95.1459732 101.808692,88.2594065 93.3097611,81.1132005 C77.0708968,114.991716 51.6292657,163.250154 0,256 C40.5788694,232.577519 72.0348875,218.137309 101.350386,212.627303 C100.091566,207.21416 99.3758778,201.35879 99.4244875,195.249342 L99.4726349,193.949605 C100.116527,167.956688 113.640566,147.968131 129.661087,149.32531 C145.681616,150.68249 158.134196,172.866789 157.490314,198.859722 C157.369214,203.750768 156.817421,208.4559 155.853301,212.819857 C184.850516,218.491161 215.970178,232.894401 256,256 C248.106899,241.470984 241.061625,228.374136 234.333647,215.900715 C223.735984,207.688365 212.6821,196.999962 190.134286,185.429109 C205.632358,189.455404 216.728781,194.100675 225.378221,199.292967 C156.972972,71.9582954 151.433611,55.0381461 127.975926,0 Z" fill="#1793D1"></path>
                            </g>
                        </svg><br />
                        <span class="text-sm font-mono">
                            *-2xl
                        </span>
                    </div>
                    <div class="px-2 py-1 text-center leading-4">
                        <svg class="icon-size-3xl inline" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                            <g>
                                <path d="M127.975926,0 C116.579432,27.9359185 109.705619,46.2092913 97.0171149,73.31478 C104.796757,81.5596475 114.3459,91.1612076 129.853677,102.005265 C113.181296,95.1459732 101.808692,88.2594065 93.3097611,81.1132005 C77.0708968,114.991716 51.6292657,163.250154 0,256 C40.5788694,232.577519 72.0348875,218.137309 101.350386,212.627303 C100.091566,207.21416 99.3758778,201.35879 99.4244875,195.249342 L99.4726349,193.949605 C100.116527,167.956688 113.640566,147.968131 129.661087,149.32531 C145.681616,150.68249 158.134196,172.866789 157.490314,198.859722 C157.369214,203.750768 156.817421,208.4559 155.853301,212.819857 C184.850516,218.491161 215.970178,232.894401 256,256 C248.106899,241.470984 241.061625,228.374136 234.333647,215.900715 C223.735984,207.688365 212.6821,196.999962 190.134286,185.429109 C205.632358,189.455404 216.728781,194.100675 225.378221,199.292967 C156.972972,71.9582954 151.433611,55.0381461 127.975926,0 Z" fill="#1793D1"></path>
                            </g>
                        </svg><br />
                        <span class="text-sm font-mono">
                            *-3xl
                        </span>
                    </div>
                    <div class="px-2 py-1 text-center leading-4">
                        <svg class="icon-size-4xl inline" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                            <g>
                                <path d="M127.975926,0 C116.579432,27.9359185 109.705619,46.2092913 97.0171149,73.31478 C104.796757,81.5596475 114.3459,91.1612076 129.853677,102.005265 C113.181296,95.1459732 101.808692,88.2594065 93.3097611,81.1132005 C77.0708968,114.991716 51.6292657,163.250154 0,256 C40.5788694,232.577519 72.0348875,218.137309 101.350386,212.627303 C100.091566,207.21416 99.3758778,201.35879 99.4244875,195.249342 L99.4726349,193.949605 C100.116527,167.956688 113.640566,147.968131 129.661087,149.32531 C145.681616,150.68249 158.134196,172.866789 157.490314,198.859722 C157.369214,203.750768 156.817421,208.4559 155.853301,212.819857 C184.850516,218.491161 215.970178,232.894401 256,256 C248.106899,241.470984 241.061625,228.374136 234.333647,215.900715 C223.735984,207.688365 212.6821,196.999962 190.134286,185.429109 C205.632358,189.455404 216.728781,194.100675 225.378221,199.292967 C156.972972,71.9582954 151.433611,55.0381461 127.975926,0 Z" fill="#1793D1"></path>
                            </g>
                        </svg><br />
                        <span class="text-sm font-mono">
                            *-4xl
                        </span>
                    </div>
                    <div class="px-2 py-1 text-center leading-4">
                        <svg class="icon-size-5xl inline" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                            <g>
                                <path d="M127.975926,0 C116.579432,27.9359185 109.705619,46.2092913 97.0171149,73.31478 C104.796757,81.5596475 114.3459,91.1612076 129.853677,102.005265 C113.181296,95.1459732 101.808692,88.2594065 93.3097611,81.1132005 C77.0708968,114.991716 51.6292657,163.250154 0,256 C40.5788694,232.577519 72.0348875,218.137309 101.350386,212.627303 C100.091566,207.21416 99.3758778,201.35879 99.4244875,195.249342 L99.4726349,193.949605 C100.116527,167.956688 113.640566,147.968131 129.661087,149.32531 C145.681616,150.68249 158.134196,172.866789 157.490314,198.859722 C157.369214,203.750768 156.817421,208.4559 155.853301,212.819857 C184.850516,218.491161 215.970178,232.894401 256,256 C248.106899,241.470984 241.061625,228.374136 234.333647,215.900715 C223.735984,207.688365 212.6821,196.999962 190.134286,185.429109 C205.632358,189.455404 216.728781,194.100675 225.378221,199.292967 C156.972972,71.9582954 151.433611,55.0381461 127.975926,0 Z" fill="#1793D1"></path>
                            </g>
                        </svg><br />
                        <span class="text-sm font-mono">
                            *-5xl
                        </span>
                    </div>
                    <div class="px-2 py-1 text-center leading-4">
                        <svg class="icon-size-6xl inline" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                            <g>
                                <path d="M127.975926,0 C116.579432,27.9359185 109.705619,46.2092913 97.0171149,73.31478 C104.796757,81.5596475 114.3459,91.1612076 129.853677,102.005265 C113.181296,95.1459732 101.808692,88.2594065 93.3097611,81.1132005 C77.0708968,114.991716 51.6292657,163.250154 0,256 C40.5788694,232.577519 72.0348875,218.137309 101.350386,212.627303 C100.091566,207.21416 99.3758778,201.35879 99.4244875,195.249342 L99.4726349,193.949605 C100.116527,167.956688 113.640566,147.968131 129.661087,149.32531 C145.681616,150.68249 158.134196,172.866789 157.490314,198.859722 C157.369214,203.750768 156.817421,208.4559 155.853301,212.819857 C184.850516,218.491161 215.970178,232.894401 256,256 C248.106899,241.470984 241.061625,228.374136 234.333647,215.900715 C223.735984,207.688365 212.6821,196.999962 190.134286,185.429109 C205.632358,189.455404 216.728781,194.100675 225.378221,199.292967 C156.972972,71.9582954 151.433611,55.0381461 127.975926,0 Z" fill="#1793D1"></path>
                            </g>
                        </svg><br />
                        <span class="text-sm font-mono">
                            *-6xl
                        </span>
                    </div>
                    <div class="px-2 py-1 text-center leading-4">
                        <svg class="icon-size-7xl inline" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                            <g>
                                <path d="M127.975926,0 C116.579432,27.9359185 109.705619,46.2092913 97.0171149,73.31478 C104.796757,81.5596475 114.3459,91.1612076 129.853677,102.005265 C113.181296,95.1459732 101.808692,88.2594065 93.3097611,81.1132005 C77.0708968,114.991716 51.6292657,163.250154 0,256 C40.5788694,232.577519 72.0348875,218.137309 101.350386,212.627303 C100.091566,207.21416 99.3758778,201.35879 99.4244875,195.249342 L99.4726349,193.949605 C100.116527,167.956688 113.640566,147.968131 129.661087,149.32531 C145.681616,150.68249 158.134196,172.866789 157.490314,198.859722 C157.369214,203.750768 156.817421,208.4559 155.853301,212.819857 C184.850516,218.491161 215.970178,232.894401 256,256 C248.106899,241.470984 241.061625,228.374136 234.333647,215.900715 C223.735984,207.688365 212.6821,196.999962 190.134286,185.429109 C205.632358,189.455404 216.728781,194.100675 225.378221,199.292967 C156.972972,71.9582954 151.433611,55.0381461 127.975926,0 Z" fill="#1793D1"></path>
                            </g>
                        </svg><br />
                        <span class="text-sm font-mono">
                            *-7xl
                        </span>
                    </div>
                </section>

                <section class="w-full mt-12">
                    <header class="w-full py-4">
                        <h4 class="text-2xl font-light text-gray-700">
                            Lista de ícones:
                        </h4>
                    </header>
                    <section class="w-full py-1">
                        <div class="text-md font-light text-magenta-800 text-left font-mono">
                        Browsers
                        </div>
                    </section>
                    <section class="w-full grid grid-cols-11 gap-x-4 py-1">
                        <div v-bind:key="`browser-${index}`" v-for="(browser, index) in browsers" class="bg-gray-50 rounded-md py-2 text-center font-mono my-2">
                            <img :modal-target="`modal ${browser.name}`" class="icon-size-5xl inline cursor-pointer" :src="`/assets/icons/${browser.filename}`" :alt="browser.name"><br />
                            <span :modal-target="`modal ${browser.name}`" class="font-mono text-sm py-1 cursor-pointer">
                                {{browser.name}}
                            </span>
                            <section :modal-name="`modal ${browser.name}`" class="modal hidden opacity-0 fixed w-full h-full left-0 top-0">
                                <section class="container mx-auto h-full">
                                    <section class="w-full h-full flex flex-wrap items-center justify-center">
                                        <section class="modal-content w-6/12 mx-auto bg-white rounded-md shadow opacity-0">
                                            <header class="w-full px-4 py-6 relative">
                                                <h4 class="text-left text-xl text-watchos-oceanblue">
                                                    {{browser.name}} Icon
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
                                                         <img class="icon-size-xs inline" :src="`/assets/icons/${browser.filename}`" :alt="browser.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xs
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-sm inline" :src="`/assets/icons/${browser.filename}`" :alt="browser.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-sm
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-md inline" :src="`/assets/icons/${browser.filename}`" :alt="browser.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-md
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-tiny inline" :src="`/assets/icons/${browser.filename}`" :alt="browser.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-tiny
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-lg inline" :src="`/assets/icons/${browser.filename}`" :alt="browser.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-lg
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-xl inline" :src="`/assets/icons/${browser.filename}`" :alt="browser.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-2xl inline" :src="`/assets/icons/${browser.filename}`" :alt="browser.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-2xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-3xl inline" :src="`/assets/icons/${browser.filename}`" :alt="browser.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-3xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-4xl inline" :src="`/assets/icons/${browser.filename}`" :alt="browser.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-4xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-5xl inline" :src="`/assets/icons/${browser.filename}`" :alt="browser.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-5xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-6xl inline" :src="`/assets/icons/${browser.filename}`" :alt="browser.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-6xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-7xl inline" :src="`/assets/icons/${browser.filename}`" :alt="browser.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-7xl
                                                         </span>
                                                     </section>
                                                </section>
                                                <pre class="language-html font-mono w-full block rounded-lg" v-html="getCode(`${baseUrl}assets/icons/${browser.filename}`)[0]">
                                                </pre>
                                                <footer class="flex flex-wrap items-center justify-end py-2 mb-4 px-2">
                                                    <button :data-clipboard-text="getCode(`${baseUrl}assets/icons/${browser.filename}`)[1]" class="copy bg-sepia-100 text-sepia-900 hover:bg-magenta-50 hover:text-magenta-default px-6 py-1 rounded-lg text-lg transition duration-900 linear">
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

                    <section class="w-full py-1">
                        <div class="text-md font-light text-magenta-800 text-left font-mono">
                        Redes Sociais
                        </div>
                    </section>
                    <section class="w-full grid grid-cols-11 gap-x-4 py-1">
                        <div v-bind:key="`social-${index}`" v-for="(social, index) in socialmedia" class="bg-gray-50 rounded-md py-2 text-center font-mono my-2">
                            <img :modal-target="`modal ${social.name}`" class="icon-size-5xl inline cursor-pointer" :src="`/assets/icons/${social.filename}`" :alt="social.name"><br />
                            <span :modal-target="`modal ${social.name}`" class="font-mono text-sm py-1 cursor-pointer">
                                {{social.name}}
                            </span>
                            <section :modal-name="`modal ${social.name}`" class="modal hidden opacity-0 fixed w-full h-full left-0 top-0">
                                <section class="container mx-auto h-full">
                                    <section class="w-full h-full flex flex-wrap items-center justify-center">
                                        <section class="modal-content w-6/12 mx-auto bg-white rounded-md shadow opacity-0">
                                            <header class="w-full px-4 py-6 relative">
                                                <h4 class="text-left text-xl text-watchos-oceanblue">
                                                    {{social.name}} Icon
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
                                                         <img class="icon-size-xs inline" :src="`/assets/icons/${social.filename}`" :alt="social.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xs
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-sm inline" :src="`/assets/icons/${social.filename}`" :alt="social.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-sm
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-md inline" :src="`/assets/icons/${social.filename}`" :alt="social.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-md
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-tiny inline" :src="`/assets/icons/${social.filename}`" :alt="social.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-tiny
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-lg inline" :src="`/assets/icons/${social.filename}`" :alt="social.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-lg
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-xl inline" :src="`/assets/icons/${social.filename}`" :alt="social.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-2xl inline" :src="`/assets/icons/${social.filename}`" :alt="social.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-2xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-3xl inline" :src="`/assets/icons/${social.filename}`" :alt="social.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-3xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-4xl inline" :src="`/assets/icons/${social.filename}`" :alt="social.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-4xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-5xl inline" :src="`/assets/icons/${social.filename}`" :alt="social.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-5xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-6xl inline" :src="`/assets/icons/${social.filename}`" :alt="social.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-6xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-7xl inline" :src="`/assets/icons/${social.filename}`" :alt="social.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-7xl
                                                         </span>
                                                     </section>
                                                </section>
                                                <pre class="language-html font-mono w-full block rounded-lg" v-html="getCode(`${baseUrl}assets/icons/${social.filename}`)[0]">
                                                </pre>
                                                <footer class="flex flex-wrap items-center justify-end py-2 mb-4 px-2">
                                                    <button :data-clipboard-text="getCode(`${baseUrl}assets/icons/${social.filename}`)[1]" class="copy bg-sepia-100 text-sepia-900 hover:bg-magenta-50 hover:text-magenta-default px-6 py-1 rounded-lg text-lg transition duration-900 linear">
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

                    <section class="w-full py-1">
                        <div class="text-md font-light text-magenta-800 text-left font-mono">
                        Mensageiros
                        </div>
                    </section>
                    <section class="w-full grid grid-cols-11 gap-x-4 py-1">
                        <div v-bind:key="`messenger-${index}`" v-for="(messenger, index) in messengers" class="bg-gray-50 rounded-md py-2 text-center font-mono my-2">
                            <img :modal-target="`modal ${messenger.name}`" class="icon-size-5xl inline cursor-pointer" :src="`/assets/icons/${messenger.filename}`" :alt="messenger.name"><br />
                            <span :modal-target="`modal ${messenger.name}`" class="font-mono text-sm py-1 cursor-pointer">
                                {{messenger.name}}
                            </span>
                            <section :modal-name="`modal ${messenger.name}`" class="modal hidden opacity-0 fixed w-full h-full left-0 top-0">
                                <section class="container mx-auto h-full">
                                    <section class="w-full h-full flex flex-wrap items-center justify-center">
                                        <section class="modal-content w-6/12 mx-auto bg-white rounded-md shadow opacity-0">
                                            <header class="w-full px-4 py-6 relative">
                                                <h4 class="text-left text-xl text-watchos-oceanblue">
                                                    {{messenger.name}} Icon
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
                                                         <img class="icon-size-xs inline" :src="`/assets/icons/${messenger.filename}`" :alt="messenger.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xs
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-sm inline" :src="`/assets/icons/${messenger.filename}`" :alt="messenger.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-sm
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-md inline" :src="`/assets/icons/${messenger.filename}`" :alt="messenger.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-md
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-tiny inline" :src="`/assets/icons/${messenger.filename}`" :alt="messenger.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-tiny
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-lg inline" :src="`/assets/icons/${messenger.filename}`" :alt="messenger.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-lg
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-xl inline" :src="`/assets/icons/${messenger.filename}`" :alt="messenger.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-2xl inline" :src="`/assets/icons/${messenger.filename}`" :alt="messenger.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-2xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-3xl inline" :src="`/assets/icons/${messenger.filename}`" :alt="messenger.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-3xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-4xl inline" :src="`/assets/icons/${messenger.filename}`" :alt="messenger.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-4xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-5xl inline" :src="`/assets/icons/${messenger.filename}`" :alt="messenger.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-5xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-6xl inline" :src="`/assets/icons/${messenger.filename}`" :alt="messenger.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-6xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-7xl inline" :src="`/assets/icons/${messenger.filename}`" :alt="messenger.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-7xl
                                                         </span>
                                                     </section>
                                                </section>
                                                <pre class="language-html font-mono w-full block rounded-lg" v-html="getCode(`${baseUrl}assets/icons/${messenger.filename}`)[0]">
                                                </pre>
                                                <footer class="flex flex-wrap items-center justify-end py-2 mb-4 px-2">
                                                    <button :data-clipboard-text="getCode(`${baseUrl}assets/icons/${messenger.filename}`)[1]" class="copy bg-sepia-100 text-sepia-900 hover:bg-magenta-50 hover:text-magenta-default px-6 py-1 rounded-lg text-lg transition duration-900 linear">
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

                    <section class="w-full py-1">
                        <div class="text-md font-light text-magenta-800 text-left font-mono">
                        Código
                        </div>
                    </section>
                    <section class="w-full grid grid-cols-11 gap-x-4 py-1">
                        <div v-bind:key="`code-${index}`" v-for="(code, index) in coding" class="bg-gray-50 rounded-md py-2 text-center font-mono my-2">
                            <img :modal-target="`modal ${code.name}`" class="icon-size-5xl inline cursor-pointer" :src="`/assets/icons/${code.filename}`" :alt="code.name"><br />
                            <span :modal-target="`modal ${code.name}`" class="font-mono text-sm py-1 cursor-pointer">
                                {{code.name}}
                            </span>
                            <section :modal-name="`modal ${code.name}`" class="modal hidden opacity-0 fixed w-full h-full left-0 top-0">
                                <section class="container mx-auto h-full">
                                    <section class="w-full h-full flex flex-wrap items-center justify-center">
                                        <section class="modal-content w-6/12 mx-auto bg-white rounded-md shadow opacity-0">
                                            <header class="w-full px-4 py-6 relative">
                                                <h4 class="text-left text-xl text-watchos-oceanblue">
                                                    {{code.name}} Icon
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
                                                         <img class="icon-size-xs inline" :src="`/assets/icons/${code.filename}`" :alt="code.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xs
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-sm inline" :src="`/assets/icons/${code.filename}`" :alt="code.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-sm
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-md inline" :src="`/assets/icons/${code.filename}`" :alt="code.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-md
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-tiny inline" :src="`/assets/icons/${code.filename}`" :alt="code.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-tiny
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-lg inline" :src="`/assets/icons/${code.filename}`" :alt="code.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-lg
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-xl inline" :src="`/assets/icons/${code.filename}`" :alt="code.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-2xl inline" :src="`/assets/icons/${code.filename}`" :alt="code.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-2xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-3xl inline" :src="`/assets/icons/${code.filename}`" :alt="code.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-3xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-4xl inline" :src="`/assets/icons/${code.filename}`" :alt="code.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-4xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-5xl inline" :src="`/assets/icons/${code.filename}`" :alt="code.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-5xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-6xl inline" :src="`/assets/icons/${code.filename}`" :alt="code.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-6xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-7xl inline" :src="`/assets/icons/${code.filename}`" :alt="code.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-7xl
                                                         </span>
                                                     </section>
                                                </section>
                                                <pre class="language-html font-mono w-full block rounded-lg" v-html="getCode(`${baseUrl}assets/icons/${code.filename}`)[0]">
                                                </pre>
                                                <footer class="flex flex-wrap items-center justify-end py-2 mb-4 px-2">
                                                    <button :data-clipboard-text="getCode(`${baseUrl}assets/icons/${code.filename}`)[1]" class="copy bg-sepia-100 text-sepia-900 hover:bg-magenta-50 hover:text-magenta-default px-6 py-1 rounded-lg text-lg transition duration-900 linear">
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

                    <section class="w-full py-1">
                        <div class="text-md font-light text-magenta-800 text-left font-mono">
                        Design
                        </div>
                    </section>
                    <section class="w-full grid grid-cols-11 gap-x-4 py-1">
                        <div v-bind:key="`ds-${index}`" v-for="(ds, index) in design" class="bg-gray-50 rounded-md py-2 text-center font-mono my-2">
                            <img :modal-target="`modal ${ds.name}`" class="icon-size-5xl inline cursor-pointer" :src="`/assets/icons/${ds.filename}`" :alt="ds.name"><br />
                            <span :modal-target="`modal ${ds.name}`" class="font-mono text-sm py-1 cursor-pointer">
                                {{ds.name}}
                            </span>
                            <section :modal-name="`modal ${ds.name}`" class="modal hidden opacity-0 fixed w-full h-full left-0 top-0">
                                <section class="container mx-auto h-full">
                                    <section class="w-full h-full flex flex-wrap items-center justify-center">
                                        <section class="modal-content w-6/12 mx-auto bg-white rounded-md shadow opacity-0">
                                            <header class="w-full px-4 py-6 relative">
                                                <h4 class="text-left text-xl text-watchos-oceanblue">
                                                    {{ds.name}} Icon
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
                                                         <img class="icon-size-xs inline" :src="`/assets/icons/${ds.filename}`" :alt="ds.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xs
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-sm inline" :src="`/assets/icons/${ds.filename}`" :alt="ds.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-sm
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-md inline" :src="`/assets/icons/${ds.filename}`" :alt="ds.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-md
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-tiny inline" :src="`/assets/icons/${ds.filename}`" :alt="ds.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-tiny
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-lg inline" :src="`/assets/icons/${ds.filename}`" :alt="ds.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-lg
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-xl inline" :src="`/assets/icons/${ds.filename}`" :alt="ds.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-2xl inline" :src="`/assets/icons/${ds.filename}`" :alt="ds.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-2xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-3xl inline" :src="`/assets/icons/${ds.filename}`" :alt="ds.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-3xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-4xl inline" :src="`/assets/icons/${ds.filename}`" :alt="ds.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-4xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-5xl inline" :src="`/assets/icons/${ds.filename}`" :alt="ds.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-5xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-6xl inline" :src="`/assets/icons/${ds.filename}`" :alt="ds.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-6xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-7xl inline" :src="`/assets/icons/${ds.filename}`" :alt="ds.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-7xl
                                                         </span>
                                                     </section>
                                                </section>
                                                <pre class="language-html font-mono w-full block rounded-lg" v-html="getCode(`${baseUrl}assets/icons/${ds.filename}`)[0]">
                                                </pre>
                                                <footer class="flex flex-wrap items-center justify-end py-2 mb-4 px-2">
                                                    <button :data-clipboard-text="getCode(`${baseUrl}assets/icons/${ds.filename}`)[1]" class="copy bg-sepia-100 text-sepia-900 hover:bg-magenta-50 hover:text-magenta-default px-6 py-1 rounded-lg text-lg transition duration-900 linear">
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

                    <section class="w-full py-1">
                        <div class="text-md font-light text-magenta-800 text-left font-mono">
                        Money
                        </div>
                    </section>
                    <section class="w-full grid grid-cols-11 gap-x-4 py-1">
                        <div v-bind:key="`ds-${index}`" v-for="(mn, index) in money" class="bg-gray-50 rounded-md py-2 text-center font-mono my-2">
                            <img :modal-target="`modal ${mn.name}`" class="icon-size-5xl inline cursor-pointer" :src="`/assets/icons/${mn.filename}`" :alt="mn.name"><br />
                            <span :modal-target="`modal ${mn.name}`" class="font-mono text-sm py-1 cursor-pointer">
                                {{mn.name}}
                            </span>
                            <section :modal-name="`modal ${mn.name}`" class="modal hidden opacity-0 fixed w-full h-full left-0 top-0">
                                <section class="container mx-auto h-full">
                                    <section class="w-full h-full flex flex-wrap items-center justify-center">
                                        <section class="modal-content w-6/12 mx-auto bg-white rounded-md shadow opacity-0">
                                            <header class="w-full px-4 py-6 relative">
                                                <h4 class="text-left text-xl text-watchos-oceanblue">
                                                    {{mn.name}} Icon
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
                                                         <img class="icon-size-xs inline" :src="`/assets/icons/${mn.filename}`" :alt="mn.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xs
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-sm inline" :src="`/assets/icons/${mn.filename}`" :alt="mn.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-sm
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-md inline" :src="`/assets/icons/${mn.filename}`" :alt="mn.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-md
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-tiny inline" :src="`/assets/icons/${mn.filename}`" :alt="mn.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-tiny
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-lg inline" :src="`/assets/icons/${mn.filename}`" :alt="mn.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-lg
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-xl inline" :src="`/assets/icons/${mn.filename}`" :alt="mn.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-2xl inline" :src="`/assets/icons/${mn.filename}`" :alt="mn.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-2xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-3xl inline" :src="`/assets/icons/${mn.filename}`" :alt="mn.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-3xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-4xl inline" :src="`/assets/icons/${mn.filename}`" :alt="mn.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-4xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-5xl inline" :src="`/assets/icons/${mn.filename}`" :alt="mn.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-5xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-6xl inline" :src="`/assets/icons/${mn.filename}`" :alt="mn.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-6xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-7xl inline" :src="`/assets/icons/${mn.filename}`" :alt="mn.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-7xl
                                                         </span>
                                                     </section>
                                                </section>
                                                <pre class="language-html font-mono w-full block rounded-lg" v-html="getCode(`${baseUrl}assets/icons/${mn.filename}`)[0]">
                                                </pre>
                                                <footer class="flex flex-wrap items-center justify-end py-2 mb-4 px-2">
                                                    <button :data-clipboard-text="getCode(`${baseUrl}assets/icons/${mn.filename}`)[1]" class="copy bg-sepia-100 text-sepia-900 hover:bg-magenta-50 hover:text-magenta-default px-6 py-1 rounded-lg text-lg transition duration-900 linear">
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

                    <section class="w-full py-1">
                        <div class="text-md font-light text-magenta-800 text-left font-mono">
                        OS
                        </div>
                    </section>
                    <section class="w-full grid grid-cols-11 gap-x-4 py-1">
                        <div v-bind:key="`os-${index}`" v-for="(sistemOP, index) in syop" class="bg-gray-50 rounded-md py-2 text-center font-mono my-2">
                            <img :modal-target="`modal ${sistemOP.name}`" class="icon-size-5xl inline cursor-pointer" :src="`/assets/icons/${sistemOP.filename}`" :alt="sistemOP.name"><br />
                            <span :modal-target="`modal ${sistemOP.name}`" class="font-mono text-sm py-1 cursor-pointer">
                                {{sistemOP.name}}
                            </span>
                            <section :modal-name="`modal ${sistemOP.name}`" class="modal hidden opacity-0 fixed w-full h-full left-0 top-0">
                                <section class="container mx-auto h-full">
                                    <section class="w-full h-full flex flex-wrap items-center justify-center">
                                        <section class="modal-content w-6/12 mx-auto bg-white rounded-md shadow opacity-0">
                                            <header class="w-full px-4 py-6 relative">
                                                <h4 class="text-left text-xl text-watchos-oceanblue">
                                                    {{sistemOP.name}} Icon
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
                                                         <img class="icon-size-xs inline" :src="`/assets/icons/${sistemOP.filename}`" :alt="sistemOP.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xs
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-sm inline" :src="`/assets/icons/${sistemOP.filename}`" :alt="sistemOP.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-sm
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-md inline" :src="`/assets/icons/${sistemOP.filename}`" :alt="sistemOP.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-md
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-tiny inline" :src="`/assets/icons/${sistemOP.filename}`" :alt="sistemOP.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-tiny
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-lg inline" :src="`/assets/icons/${sistemOP.filename}`" :alt="sistemOP.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-lg
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-xl inline" :src="`/assets/icons/${sistemOP.filename}`" :alt="sistemOP.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-2xl inline" :src="`/assets/icons/${sistemOP.filename}`" :alt="sistemOP.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-2xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-3xl inline" :src="`/assets/icons/${sistemOP.filename}`" :alt="sistemOP.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-3xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-4xl inline" :src="`/assets/icons/${sistemOP.filename}`" :alt="sistemOP.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-4xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-5xl inline" :src="`/assets/icons/${sistemOP.filename}`" :alt="sistemOP.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-5xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-6xl inline" :src="`/assets/icons/${sistemOP.filename}`" :alt="sistemOP.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-6xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-7xl inline" :src="`/assets/icons/${sistemOP.filename}`" :alt="sistemOP.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-7xl
                                                         </span>
                                                     </section>
                                                </section>
                                                <pre class="language-html font-mono w-full block rounded-lg" v-html="getCode(`${baseUrl}assets/icons/${sistemOP.filename}`)[0]">
                                                </pre>
                                                <footer class="flex flex-wrap items-center justify-end py-2 mb-4 px-2">
                                                    <button :data-clipboard-text="getCode(`${baseUrl}assets/icons/${sistemOP.filename}`)[1]" class="copy bg-sepia-100 text-sepia-900 hover:bg-magenta-50 hover:text-magenta-default px-6 py-1 rounded-lg text-lg transition duration-900 linear">
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

                    <section class="w-full py-1">
                        <div class="text-md font-light text-magenta-800 text-left font-mono">
                        Produtividade
                        </div>
                    </section>
                    <section class="w-full grid grid-cols-11 gap-x-4 py-1">
                        <div v-bind:key="`pr-${index}`" v-for="(pr, index) in produtivity" class="bg-gray-50 rounded-md py-2 text-center font-mono my-2">
                            <img :modal-target="`modal ${pr.name}`" class="icon-size-5xl inline cursor-pointer" :src="`/assets/icons/${pr.filename}`" :alt="pr.name"><br />
                            <span :modal-target="`modal ${pr.name}`" class="font-mono text-sm py-1 cursor-pointer">
                                {{pr.name}}
                            </span>
                            <section :modal-name="`modal ${pr.name}`" class="modal hidden opacity-0 fixed w-full h-full left-0 top-0">
                                <section class="container mx-auto h-full">
                                    <section class="w-full h-full flex flex-wrap items-center justify-center">
                                        <section class="modal-content w-6/12 mx-auto bg-white rounded-md shadow opacity-0">
                                            <header class="w-full px-4 py-6 relative">
                                                <h4 class="text-left text-xl text-watchos-oceanblue">
                                                    {{pr.name}} Icon
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
                                                         <img class="icon-size-xs inline" :src="`/assets/icons/${pr.filename}`" :alt="pr.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xs
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-sm inline" :src="`/assets/icons/${pr.filename}`" :alt="pr.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-sm
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-md inline" :src="`/assets/icons/${pr.filename}`" :alt="pr.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-md
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-tiny inline" :src="`/assets/icons/${pr.filename}`" :alt="pr.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-tiny
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-lg inline" :src="`/assets/icons/${pr.filename}`" :alt="pr.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-lg
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-xl inline" :src="`/assets/icons/${pr.filename}`" :alt="pr.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-2xl inline" :src="`/assets/icons/${pr.filename}`" :alt="pr.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-2xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-3xl inline" :src="`/assets/icons/${pr.filename}`" :alt="pr.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-3xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-4xl inline" :src="`/assets/icons/${pr.filename}`" :alt="pr.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-4xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-5xl inline" :src="`/assets/icons/${pr.filename}`" :alt="pr.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-5xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-6xl inline" :src="`/assets/icons/${pr.filename}`" :alt="pr.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-6xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-7xl inline" :src="`/assets/icons/${pr.filename}`" :alt="pr.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-7xl
                                                         </span>
                                                     </section>
                                                </section>
                                                <pre class="language-html font-mono w-full block rounded-lg" v-html="getCode(`${baseUrl}assets/icons/${pr.filename}`)[0]">
                                                </pre>
                                                <footer class="flex flex-wrap items-center justify-end py-2 mb-4 px-2">
                                                    <button :data-clipboard-text="getCode(`${baseUrl}assets/icons/${pr.filename}`)[1]" class="copy bg-sepia-100 text-sepia-900 hover:bg-magenta-50 hover:text-magenta-default px-6 py-1 rounded-lg text-lg transition duration-900 linear">
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

                    <section class="w-full py-1">
                        <div class="text-md font-light text-magenta-800 text-left font-mono">
                        Video
                        </div>
                    </section>
                    <section class="w-full grid grid-cols-11 gap-x-4 py-1">
                        <div v-bind:key="`pr-${index}`" v-for="(vd, index) in video" class="bg-gray-50 rounded-md py-2 text-center font-mono my-2">
                            <img :modal-target="`modal ${vd.name}`" class="icon-size-5xl inline cursor-pointer" :src="`/assets/icons/${vd.filename}`" :alt="vd.name"><br />
                            <span :modal-target="`modal ${vd.name}`" class="font-mono text-sm py-1 cursor-pointer">
                                {{vd.name}}
                            </span>
                            <section :modal-name="`modal ${vd.name}`" class="modal hidden opacity-0 fixed w-full h-full left-0 top-0">
                                <section class="container mx-auto h-full">
                                    <section class="w-full h-full flex flex-wrap items-center justify-center">
                                        <section class="modal-content w-6/12 mx-auto bg-white rounded-md shadow opacity-0">
                                            <header class="w-full px-4 py-6 relative">
                                                <h4 class="text-left text-xl text-watchos-oceanblue">
                                                    {{vd.name}} Icon
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
                                                         <img class="icon-size-xs inline" :src="`/assets/icons/${vd.filename}`" :alt="vd.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xs
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-sm inline" :src="`/assets/icons/${vd.filename}`" :alt="vd.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-sm
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-md inline" :src="`/assets/icons/${vd.filename}`" :alt="vd.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-md
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-tiny inline" :src="`/assets/icons/${vd.filename}`" :alt="vd.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-tiny
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-lg inline" :src="`/assets/icons/${vd.filename}`" :alt="vd.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-lg
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-xl inline" :src="`/assets/icons/${vd.filename}`" :alt="vd.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-2xl inline" :src="`/assets/icons/${vd.filename}`" :alt="vd.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-2xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-3xl inline" :src="`/assets/icons/${vd.filename}`" :alt="vd.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-3xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-4xl inline" :src="`/assets/icons/${vd.filename}`" :alt="vd.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-4xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-5xl inline" :src="`/assets/icons/${vd.filename}`" :alt="vd.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-5xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-6xl inline" :src="`/assets/icons/${vd.filename}`" :alt="vd.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-6xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-7xl inline" :src="`/assets/icons/${vd.filename}`" :alt="vd.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-7xl
                                                         </span>
                                                     </section>
                                                </section>
                                                <pre class="language-html font-mono w-full block rounded-lg" v-html="getCode(`${baseUrl}assets/icons/${vd.filename}`)[0]">
                                                </pre>
                                                <footer class="flex flex-wrap items-center justify-end py-2 mb-4 px-2">
                                                    <button :data-clipboard-text="getCode(`${baseUrl}assets/icons/${vd.filename}`)[1]" class="copy bg-sepia-100 text-sepia-900 hover:bg-magenta-50 hover:text-magenta-default px-6 py-1 rounded-lg text-lg transition duration-900 linear">
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

                    <section class="w-full py-1">
                        <div class="text-md font-light text-magenta-800 text-left font-mono">
                        Musica
                        </div>
                    </section>
                    <section class="w-full grid grid-cols-11 gap-x-4 py-1">
                        <div v-bind:key="`ms-${index}`" v-for="(ms, index) in music" class="bg-gray-50 rounded-md py-2 text-center font-mono my-2">
                            <img :modal-target="`modal ${ms.name}`" class="icon-size-5xl inline cursor-pointer" :src="`/assets/icons/${ms.filename}`" :alt="ms.name"><br />
                            <span :modal-target="`modal ${ms.name}`" class="font-mono text-sm py-1 cursor-pointer">
                                {{ms.name}}
                            </span>
                            <section :modal-name="`modal ${ms.name}`" class="modal hidden opacity-0 fixed w-full h-full left-0 top-0">
                                <section class="container mx-auto h-full">
                                    <section class="w-full h-full flex flex-wrap items-center justify-center">
                                        <section class="modal-content w-6/12 mx-auto bg-white rounded-md shadow opacity-0">
                                            <header class="w-full px-4 py-6 relative">
                                                <h4 class="text-left text-xl text-watchos-oceanblue">
                                                    {{ms.name}} Icon
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
                                                         <img class="icon-size-xs inline" :src="`/assets/icons/${ms.filename}`" :alt="ms.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xs
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-sm inline" :src="`/assets/icons/${ms.filename}`" :alt="ms.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-sm
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-md inline" :src="`/assets/icons/${ms.filename}`" :alt="ms.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-md
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-tiny inline" :src="`/assets/icons/${ms.filename}`" :alt="ms.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-tiny
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-lg inline" :src="`/assets/icons/${ms.filename}`" :alt="ms.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-lg
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-xl inline" :src="`/assets/icons/${ms.filename}`" :alt="ms.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-2xl inline" :src="`/assets/icons/${ms.filename}`" :alt="ms.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-2xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-3xl inline" :src="`/assets/icons/${ms.filename}`" :alt="ms.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-3xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-4xl inline" :src="`/assets/icons/${ms.filename}`" :alt="ms.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-4xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-5xl inline" :src="`/assets/icons/${ms.filename}`" :alt="ms.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-5xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-6xl inline" :src="`/assets/icons/${ms.filename}`" :alt="ms.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-6xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-7xl inline" :src="`/assets/icons/${ms.filename}`" :alt="ms.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-7xl
                                                         </span>
                                                     </section>
                                                </section>
                                                <pre class="language-html font-mono w-full block rounded-lg" v-html="getCode(`${baseUrl}assets/icons/${ms.filename}`)[0]">
                                                </pre>
                                                <footer class="flex flex-wrap items-center justify-end py-2 mb-4 px-2">
                                                    <button :data-clipboard-text="getCode(`${baseUrl}assets/icons/${ms.filename}`)[1]" class="copy bg-sepia-100 text-sepia-900 hover:bg-magenta-50 hover:text-magenta-default px-6 py-1 rounded-lg text-lg transition duration-900 linear">
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

                    <section class="w-full py-1">
                        <div class="text-md font-light text-magenta-800 text-left font-mono">
                        Moedas Digitais
                        </div>
                    </section>
                    <section class="w-full grid grid-cols-11 gap-x-4 py-1">
                        <div v-bind:key="`cc-${index}`" v-for="(cc, index) in cryptocurrency" class="bg-gray-50 rounded-md py-2 text-center font-mono my-2">
                            <img :modal-target="`modal ${cc.name}`" class="icon-size-5xl inline cursor-pointer" :src="`/assets/icons/${cc.filename}`" :alt="cc.name"><br />
                            <span :modal-target="`modal ${cc.name}`" class="font-mono text-sm py-1 cursor-pointer">
                                {{cc.name}}
                            </span>
                            <section :modal-name="`modal ${cc.name}`" class="modal hidden opacity-0 fixed w-full h-full left-0 top-0">
                                <section class="container mx-auto h-full">
                                    <section class="w-full h-full flex flex-wrap items-center justify-center">
                                        <section class="modal-content w-6/12 mx-auto bg-white rounded-md shadow opacity-0">
                                            <header class="w-full px-4 py-6 relative">
                                                <h4 class="text-left text-xl text-watchos-oceanblue">
                                                    {{cc.name}} Icon
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
                                                         <img class="icon-size-xs inline" :src="`/assets/icons/${cc.filename}`" :alt="cc.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xs
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-sm inline" :src="`/assets/icons/${cc.filename}`" :alt="cc.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-sm
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-md inline" :src="`/assets/icons/${cc.filename}`" :alt="cc.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-md
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-tiny inline" :src="`/assets/icons/${cc.filename}`" :alt="cc.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-tiny
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-lg inline" :src="`/assets/icons/${cc.filename}`" :alt="cc.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-lg
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-xl inline" :src="`/assets/icons/${cc.filename}`" :alt="cc.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-2xl inline" :src="`/assets/icons/${cc.filename}`" :alt="cc.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-2xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-3xl inline" :src="`/assets/icons/${cc.filename}`" :alt="cc.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-3xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-4xl inline" :src="`/assets/icons/${cc.filename}`" :alt="cc.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-4xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-5xl inline" :src="`/assets/icons/${cc.filename}`" :alt="cc.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-5xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-6xl inline" :src="`/assets/icons/${cc.filename}`" :alt="cc.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-6xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-7xl inline" :src="`/assets/icons/${cc.filename}`" :alt="cc.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-7xl
                                                         </span>
                                                     </section>
                                                </section>
                                                <pre class="language-html font-mono w-full block rounded-lg" v-html="getCode(`${baseUrl}assets/icons/${cc.filename}`)[0]">
                                                </pre>
                                                <footer class="flex flex-wrap items-center justify-end py-2 mb-4 px-2">
                                                    <button :data-clipboard-text="getCode(`${baseUrl}assets/icons/${cc.filename}`)[1]" class="copy bg-sepia-100 text-sepia-900 hover:bg-magenta-50 hover:text-magenta-default px-6 py-1 rounded-lg text-lg transition duration-900 linear">
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
                    <section class="w-full py-1">
                        <div class="text-md font-light text-magenta-800 text-left font-mono">
                        Outros
                        </div>
                    </section>
                    <section class="w-full grid grid-cols-11 gap-x-4 py-1">
                        <div v-bind:key="`ot-${index}`" v-for="(ot, index) in other" class="bg-gray-50 rounded-md py-2 text-center font-mono my-2">
                            <img :modal-target="`modal ${ot.name}`" class="icon-size-5xl inline cursor-pointer" :src="`/assets/icons/${ot.filename}`" :alt="ot.name"><br />
                            <span :modal-target="`modal ${ot.name}`" class="font-mono text-sm py-1 cursor-pointer">
                                {{ot.name}}
                            </span>
                            <section :modal-name="`modal ${ot.name}`" class="modal hidden opacity-0 fixed w-full h-full left-0 top-0">
                                <section class="container mx-auto h-full">
                                    <section class="w-full h-full flex flex-wrap items-center justify-center">
                                        <section class="modal-content w-6/12 mx-auto bg-white rounded-md shadow opacity-0">
                                            <header class="w-full px-4 py-6 relative">
                                                <h4 class="text-left text-xl text-watchos-oceanblue">
                                                    {{ot.name}} Icon
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
                                                         <img class="icon-size-xs inline" :src="`/assets/icons/${ot.filename}`" :alt="ot.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xs
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-sm inline" :src="`/assets/icons/${ot.filename}`" :alt="ot.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-sm
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-md inline" :src="`/assets/icons/${ot.filename}`" :alt="ot.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-md
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-tiny inline" :src="`/assets/icons/${ot.filename}`" :alt="ot.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-tiny
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-lg inline" :src="`/assets/icons/${ot.filename}`" :alt="ot.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-lg
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-xl inline" :src="`/assets/icons/${ot.filename}`" :alt="ot.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-2xl inline" :src="`/assets/icons/${ot.filename}`" :alt="ot.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-2xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-3xl inline" :src="`/assets/icons/${ot.filename}`" :alt="ot.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-3xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-4xl inline" :src="`/assets/icons/${ot.filename}`" :alt="ot.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-4xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-5xl inline" :src="`/assets/icons/${ot.filename}`" :alt="ot.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-5xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-6xl inline" :src="`/assets/icons/${ot.filename}`" :alt="ot.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-6xl
                                                         </span>
                                                     </section>
                                                     <section class="bg-gray-50 leading-4 py-2 rounded-lg shadow my-1">
                                                         <img class="icon-size-7xl inline" :src="`/assets/icons/${ot.filename}`" :alt="ot.name">
                                                         <br />
                                                         <span class="text-sm">
                                                             *-7xl
                                                         </span>
                                                     </section>
                                                </section>
                                                <pre class="language-html font-mono w-full block rounded-lg" v-html="getCode(`${baseUrl}assets/icons/${ot.filename}`)[0]">
                                                </pre>
                                                <footer class="flex flex-wrap items-center justify-end py-2 mb-4 px-2">
                                                    <button :data-clipboard-text="getCode(`${baseUrl}assets/icons/${ot.filename}`)[1]" class="copy bg-sepia-100 text-sepia-900 hover:bg-magenta-50 hover:text-magenta-default px-6 py-1 rounded-lg text-lg transition duration-900 linear">
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
            </header>
        </section>
    </section>
</template>
<script>
import Copy from 'clipboard';
import Header from '../components/Header.vue';
import Icons from '../assets/js/icons.json';

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
export default {
    name: 'Icons',
    data() {
        return {
            htmlCode: '',
            browsers,
            coding,
            messengers,
            socialmedia,
            design,
            syop,
            music,
            money,
            video,
            produtivity,
            cryptocurrency,
            other,
            baseUrl: `${window.location.protocol}//${window.location.hostname}/`,
        };
    },
    methods: {
        loadPrism() {
            const Prism = this.prism();
            const code = (`<!--
    Ex: Usando a o logo do Arch Linux:
-->
<svg class="...icon-size-xs">...</svg>
<svg class="...icon-size-sm">...</svg>
<svg class="...icon-size-md">...</svg>
<svg class="...icon-size-lg">...</svg>
<svg class="...icon-size-xs">...</svg>
<svg class="...icon-size-2xs">...</svg>
<svg class="...icon-size-3xs">...</svg>
<svg class="...icon-size-4xs">...</svg>
<svg class="...icon-size-5xs">...</svg>
<svg class="...icon-size-6xs">...</svg>
<svg class="...icon-size-7xs">...</svg>`).trim();
            this.htmlCode = Prism.highlight(code, Prism.languages.html, 'html');
        },
    },
    components: {
        Header,
    },
    mounted() {
        const clipboard = new Copy('.copy');
        clipboard.on('success', (e) => {
            console.log(e);
        });
        this.modals();
        this.loadPrism();
    },
};
</script>
