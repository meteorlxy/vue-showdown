const path = require('path')
const pkg = require('../package.json')

/**
 * Resolve path from project root /
 * @param {string} args
 */
function rootPath (...args) {
  return path.resolve(__dirname, '..', ...args)
}

/**
 * Resolve path from /src
 * @param {string} args
 */
function srcPath (...args) {
  return rootPath('src', ...args)
}

/**
 * Resolve path from /dist
 * @param {string} args
 */
function distPath (...args) {
  return rootPath('dist', ...args)
}

const banner = `\
/*!
 * ${pkg.name} - ${pkg.description}
 *
 * @version v${pkg.version}
 * @link ${pkg.homepage}
 * @license ${pkg.license}
 * @copyright 2018-${new Date().getFullYear()} meteorlxy
 */
`

module.exports = {
  rootPath,
  srcPath,
  distPath,
  banner,
}
