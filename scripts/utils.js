const path = require('path')

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

/**
 * Join relative path from static directory (for output filename)
 * @param {string} args
 */
function assetsPath (...args) {
  return path.posix.join('static', ...args)
}

module.exports = {
  rootPath,
  srcPath,
  distPath,
  assetsPath
}
