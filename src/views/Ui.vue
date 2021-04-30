<template>
    <section class="w-full">
        <section class="w-full">
            <Header />
        </section>
        <section class="w-full">
            <header class="container mx-auto py-8">
                <h4 class="text-4xl font-bold text-gray-700">
                    Checkbox:
                </h4>
            </header>
            <section class="container mx-auto">
                <hr />
                <section class="w-full grid grid-cols-2 gap-x-2 py-4">
                    <section class="rounded-md px-4 py-2">
                        <section class="w-full py-1">
                            <pre data-target="radio-code" class="language-html font-mono w-full block rounded-lg relative"></pre>
                        </section>
                        <code class="hidden" data-name="radio-code">
                            <div class="radio radio-label radio-size-4xl rounded-full">
                                <input type="checkbox" id="namehere" name="namehere">
                                <label for="namehere"></label>
                            </div>
                        </code>
                        <div class="inline-block align-middle px-2">
                            <div class="radio radio-label lg:radio-size-4xl rounded-full">
                                <input type="checkbox" id="radiolabel" name="radiolabel">
                                <label for="radiolabel"></label>
                            </div>
                        </div>
                        <label class="text-lg align-middle inline-block text-gray-600 cursor-pointer" for="radiolabel">
                            .radio .radio-label
                        </label>
                    </section>
                    <section class="rounded-md px-4 py-2">
                        <section class="w-full py-1">
                            <pre data-target="radio-code-check" class="language-html font-mono w-full block rounded-lg relative"></pre>
                        </section>
                        <code class="hidden" data-name="radio-code-check">
                            <div class="radio radio-check lg:radio-4xl rounded-full">
                                <input type="checkbox" id="namehere" name="namehere">
                                <label for="namehere"></label>
                            </div>
                        </code>
                        <div class="inline-block align-middle px-2">
                            <div class="radio radio-check radio-4xl rounded-full">
                                <input type="checkbox" id="radiocheck" name="radiocheck">
                                <label for="radiocheck"></label>
                            </div>
                        </div>
                        <label class="text-lg align-middle inline-block text-gray-600 cursor-pointer" for="radiocheck">
                            .radio .radio-check radio-4xl
                        </label>
                        <br />
                        <br />
                        <div class="inline-block align-middle px-2">
                            <div class="radio radio-check radio-3xl rounded-full">
                                <input type="checkbox" id="radiocheck3" name="radiocheck">
                                <label for="radiocheck3"></label>
                            </div>
                        </div>
                        <label class="text-lg align-middle inline-block text-gray-600 cursor-pointer" for="radiocheck">
                            .radio .radio-check radio-3xl
                        </label>
                    </section>
                </section>
            </section>
        </section>
    </section>
</template>
<script>
import prettify from 'beautify';
import Header from '../components/Menu.vue';

export default {
    name: 'UI',
    methods: {
        htmlRenderCode(code) {
            const Prism = this.prism();
            return Prism.highlight(code, Prism.languages.html, 'html');
        },
        renderCodeHtml() {
            const targets = document.querySelectorAll('[data-target]');
            targets.forEach((v) => {
                const name = v.getAttribute('data-target');
                const code = document.querySelector(`[data-name='${name}']`).innerHTML.trim();
                const target = v;
                target.innerHTML += this.htmlRenderCode(prettify(code, { format: 'html' }));
            });
        },
    },
    components: {
        Header,
    },
    mounted() {
        this.renderCodeHtml();
    },
};
</script>
