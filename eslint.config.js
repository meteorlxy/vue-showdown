import { meteorlxy } from '@meteorlxy/eslint-config';

export default meteorlxy(
  {
    vue: true,
  },
  {
    files: ['dev/dev.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-useless-assignment': 'off', // TODO: eslint-plugin-vue false positive?
    },
  },
);
