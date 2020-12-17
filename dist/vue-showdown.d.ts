import { ShowdownOptions, ShowdownExtension } from 'showdown';
import * as showdown from 'showdown';
export { showdown };
import { DefineComponent, PropType, VNode, RendererNode, RendererElement, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, Plugin } from 'vue';

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
declare const VueShowdown: DefineComponent<{
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
        type: PropType<"github" | "original" | "ghost" | "vanilla" | "allOn" | null>;
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
        type: PropType<(string | (() => ShowdownExtension | ShowdownExtension[]) | ShowdownExtension | ShowdownExtension[])[] | null | undefined>;
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
}, () => VNode<RendererNode, RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
    extensions: (string | (() => ShowdownExtension | ShowdownExtension[]) | ShowdownExtension | ShowdownExtension[])[] | null | undefined;
    markdown: string | null;
    tag: string;
    flavor: "github" | "original" | "ghost" | "vanilla" | "allOn" | null;
    options: ShowdownOptions;
    vueTemplate: boolean;
} & {}>, {
    extensions: (string | (() => ShowdownExtension | ShowdownExtension[]) | ShowdownExtension | ShowdownExtension[])[] | null | undefined;
    markdown: string | null;
    tag: string;
    flavor: "github" | "original" | "ghost" | "vanilla" | "allOn" | null;
    options: ShowdownOptions;
    vueTemplate: boolean;
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

export default VueShowdownPlugin;
export { VueShowdown, VueShowdownPlugin };
