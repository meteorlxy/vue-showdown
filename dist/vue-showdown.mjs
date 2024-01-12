/*!
 * vue-showdown - Use showdown as a vue component
 *
 * @version v4.2.0
 * @link https://vue-showdown.js.org
 * @license MIT
 * @copyright 2018-2024 meteorlxy
 */

import showdown from 'showdown';
export { default as showdown } from 'showdown';
import { defineComponent, computed, Text, h } from 'vue';

/**
 * The VueShowdown component
 *
 * @example
 * ```html
 * <template>
 *  <VueShowdown markdown="# Hello, world" />
 * </template>
 *
 * <script>
 * import { defineComponent } from 'vue';
 * import { VueShowdown } from 'vue-showdown';
 *
 * export default defineComponent({
 *   components: {
 *     VueShowdown,
 *   },
 * });
 * </script>
 * ```
 *
 * @public
 */
const VueShowdown = defineComponent({
    name: 'VueShowdown',
    props: {
        /**
         * Raw markdown content
         */
        markdown: {
            type: String,
            required: false,
            default: null,
        },
        /**
         * HTML tag of the markdown wrapper
         */
        tag: {
            type: String,
            required: false,
            default: 'div',
        },
        /**
         * Showdown flavor
         *
         * @see https://github.com/showdownjs/showdown#flavors
         */
        flavor: {
            type: String,
            required: false,
            default: null,
        },
        /**
         * Showdown options
         *
         * @see https://github.com/showdownjs/showdown#valid-options
         */
        options: {
            type: Object,
            required: false,
            default: () => ({}),
        },
        /**
         * Showdown extensions
         *
         * @see https://github.com/showdownjs/showdown#extensions
         */
        extensions: {
            type: Array,
            required: false,
            default: null,
        },
        /**
         * Treat the HTML string as Vue template. Require full build of Vue (runtime + complier)
         */
        vueTemplate: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * Define components which are available in the Vue template. Require `vueTemplate` to be enabled
         */
        vueTemplateComponents: {
            type: Object,
            required: false,
            default: () => ({}),
        },
        /**
         * Define data which is available in the Vue template. Require `vueTemplate` to be enabled
         */
        vueTemplateData: {
            type: Object,
            required: false,
            default: () => ({}),
        },
    },
    setup(props, { slots }) {
        // the showdown converter instance ref
        const converter = computed(() => {
            const instance = new showdown.Converter({
                extensions: props.extensions ?? undefined,
            });
            if (props.flavor !== null) {
                instance.setFlavor(props.flavor);
            }
            Object.entries(props.options).forEach(([key, value]) => {
                instance.setOption(key, value);
            });
            return instance;
        });
        // the raw markdown string
        const inputMarkdown = computed(() => {
            // from props
            if (props.markdown !== null) {
                return props.markdown;
            }
            // from default slot
            const slot = slots.default?.()[0];
            if (slot?.type === Text) {
                return slot.children;
            }
            // fall back to empty string
            return '';
        });
        // the parsed HTML string
        const outputHtml = computed(() => converter.value.makeHtml(inputMarkdown.value));
        return () => props.vueTemplate
            ? h({
                components: props.vueTemplateComponents,
                setup: () => props.vueTemplateData,
                template: `<${props.tag}>${outputHtml.value}</${props.tag}>`,
            })
            : h(props.tag, {
                innerHTML: outputHtml.value,
            });
    },
});

/**
 * The VueShowdown plugin
 *
 * @example
 * ```ts
 * import { createApp } from 'vue';
 * import { VueShowdownPlugin } from 'vue-showdown';
 *
 * const app = createApp();
 * app.use(VueShowdownPlugin);
 * ```
 *
 * @public
 */
const VueShowdownPlugin = {
    install(app, { flavor = null, options = {}, } = {}) {
        // set default flavor
        if (flavor !== null) {
            showdown.setFlavor(flavor);
        }
        // set default options (override flavor)
        Object.entries(options).forEach(([key, value]) => {
            showdown.setOption(key, value);
        });
        // register vue-showdown component globally
        // eslint-disable-next-line vue/match-component-file-name
        app.component('VueShowdown', VueShowdown);
    },
};

export { VueShowdown, VueShowdownPlugin, VueShowdownPlugin as default };
