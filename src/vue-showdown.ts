import * as showdown from 'showdown';
import type { ConverterOptions, Flavor, ShowdownOptions } from 'showdown';
import { computed, defineComponent, h, Text } from 'vue';
import type { PropType } from 'vue';

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
export const VueShowdown = defineComponent({
  name: 'VueShowdown',

  props: {
    /**
     * Raw markdown content
     */
    markdown: {
      type: String as PropType<string | null>,
      required: false,
      default: null,
    },

    /**
     * HTML tag of the markdown wrapper
     */
    tag: {
      type: String as PropType<string>,
      required: false,
      default: 'div',
    },

    /**
     * Showdown flavor
     *
     * @see https://github.com/showdownjs/showdown#flavors
     */
    flavor: {
      type: String as PropType<Flavor | null>,
      required: false,
      default: null,
    },

    /**
     * Showdown options
     *
     * @see https://github.com/showdownjs/showdown#valid-options
     */
    options: {
      type: Object as PropType<ShowdownOptions>,
      required: false,
      default: () => ({}),
    },

    /**
     * Showdown extensions
     *
     * @see https://github.com/showdownjs/showdown#extensions
     */
    extensions: {
      type: Array as PropType<Required<ConverterOptions['extensions'] | null>>,
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
        extensions: props.extensions || undefined,
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
    const inputMarkdown = computed<string>(() => {
      // from props
      if (props.markdown !== null) {
        return props.markdown;
      }

      // from default slot
      const slot = slots.default?.()[0];
      if (slot?.type === Text) {
        return slot.children as string;
      }

      // fall back to empty string
      return '';
    });

    // the parsed HTML string
    const outputHtml = computed(() =>
      converter.value.makeHtml(inputMarkdown.value),
    );

    return () =>
      props.vueTemplate
        ? h({
            setup: () => props.vueTemplateData,
            template: `<${props.tag}>${outputHtml.value}</${props.tag}>`,
          })
        : h(props.tag, {
            innerHTML: outputHtml.value,
          });
  },
});
