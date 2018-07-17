import resolve from 'rollup-plugin-node-resolve'
import cjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

const utils = require('./utils')

export default [
  {
    file: 'vue-showdown.js',
    format: 'umd'
  },
  {
    file: 'vue-showdown.min.js',
    format: 'umd'
  },
  {
    file: 'vue-showdown.common.js',
    format: 'cjs'
  },
  {
    file: 'vue-showdown.esm.js',
    format: 'es'
  }
].map(opts => {
  const config = {
    input: utils.srcPath('index.js'),
    output: {
      file: opts.file,
      format: opts.format,
      dir: utils.distPath(),
      name: 'VueShowdown'
    },
    plugins: [
      resolve(),
      cjs(),
      babel()
    ]
  }
  if (/min\.js$/.test(opts.file)) {
    config.plugins.push(uglify())
  }
  return config
})
