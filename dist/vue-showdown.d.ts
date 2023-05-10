import showdown, { Flavor, ShowdownOptions } from 'showdown';
export { default as showdown } from 'showdown';
import * as vue from 'vue';
import { PropType, Plugin } from 'vue';

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
declare const VueShowdown: vue.DefineComponent<{
    /**
     * Raw markdown content
     */
    markdown: {
        type: PropType<string | null>;
        required: false;
        default: null;
    };
    /**
     * HTML tag of the markdown wrapper
     */
    tag: {
        type: PropType<string>;
        required: false;
        default: string;
    };
    /**
     * Showdown flavor
     *
     * @see https://github.com/showdownjs/showdown#flavors
     */
    flavor: {
        type: PropType<Flavor | null>;
        required: false;
        default: null;
    };
    /**
     * Showdown options
     *
     * @see https://github.com/showdownjs/showdown#valid-options
     */
    options: {
        type: PropType<ShowdownOptions>;
        required: false;
        default: () => {};
    };
    /**
     * Showdown extensions
     *
     * @see https://github.com/showdownjs/showdown#extensions
     */
    extensions: {
        type: PropType<Required<(string | (() => showdown.ShowdownExtension | showdown.ShowdownExtension[]) | showdown.ShowdownExtension | showdown.ShowdownExtension[])[] | null | undefined>>;
        required: false;
        default: null;
    };
    /**
     * Treat the HTML string as Vue template. Require full build of Vue (runtime + complier)
     */
    vueTemplate: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    /**
     * Define data which is available in the Vue template. Require `vueTemplate` to be enabled
     */
    vueTemplateData: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    /**
     * Raw markdown content
     */
    markdown: {
        type: PropType<string | null>;
        required: false;
        default: null;
    };
    /**
     * HTML tag of the markdown wrapper
     */
    tag: {
        type: PropType<string>;
        required: false;
        default: string;
    };
    /**
     * Showdown flavor
     *
     * @see https://github.com/showdownjs/showdown#flavors
     */
    flavor: {
        type: PropType<Flavor | null>;
        required: false;
        default: null;
    };
    /**
     * Showdown options
     *
     * @see https://github.com/showdownjs/showdown#valid-options
     */
    options: {
        type: PropType<ShowdownOptions>;
        required: false;
        default: () => {};
    };
    /**
     * Showdown extensions
     *
     * @see https://github.com/showdownjs/showdown#extensions
     */
    extensions: {
        type: PropType<Required<(string | (() => showdown.ShowdownExtension | showdown.ShowdownExtension[]) | showdown.ShowdownExtension | showdown.ShowdownExtension[])[] | null | undefined>>;
        required: false;
        default: null;
    };
    /**
     * Treat the HTML string as Vue template. Require full build of Vue (runtime + complier)
     */
    vueTemplate: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    /**
     * Define data which is available in the Vue template. Require `vueTemplate` to be enabled
     */
    vueTemplateData: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
}>>, {
    extensions: Required<(string | (() => showdown.ShowdownExtension | showdown.ShowdownExtension[]) | showdown.ShowdownExtension | showdown.ShowdownExtension[])[] | null | undefined>;
    markdown: string | null;
    tag: string;
    flavor: Flavor | null;
    options: ShowdownOptions;
    vueTemplate: boolean;
    vueTemplateData: Record<string, any>;
}>;

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
declare const VueShowdownPlugin: Plugin;

export { VueShowdown, VueShowdownPlugin, VueShowdownPlugin as default };
