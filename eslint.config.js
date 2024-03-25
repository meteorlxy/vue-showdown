import { meteorlxy } from '@meteorlxy/eslint-config';

export default meteorlxy(
  {
    typescript: {
      tsconfigPath: ['./tsconfig.json', './dev/tsconfig.json'],
    },
    vue: true,
  },
  {
    files: ['dev/dev.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
);
