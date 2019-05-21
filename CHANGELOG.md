## [2.4.1](https://github.com/meteorlxy/vue-showdown/compare/v2.4.0...v2.4.1) (2019-05-21)


### Bug Fixes

* remove Object.entries to be compatible with IE11 ([#8](https://github.com/meteorlxy/vue-showdown/issues/8)) ([944ca30](https://github.com/meteorlxy/vue-showdown/commit/944ca30))



# [2.4.0](https://github.com/meteorlxy/vue-showdown/compare/v2.3.0...v2.4.0) (2019-02-17)


### Features

* add vue-template prop (close [#5](https://github.com/meteorlxy/vue-showdown/issues/5)) ([daa487c](https://github.com/meteorlxy/vue-showdown/commit/daa487c))



# [2.3.0](https://github.com/meteorlxy/vue-showdown/compare/v2.2.2...v2.3.0) (2018-12-21)


### Features

* add types declaration ([e2e621e](https://github.com/meteorlxy/vue-showdown/commit/e2e621e))
* do not bundle showdown ([851ce0b](https://github.com/meteorlxy/vue-showdown/commit/851ce0b))



## [2.2.2](https://github.com/meteorlxy/vue-showdown/compare/v2.2.1...v2.2.2) (2018-12-21)


### Bug Fixes

* minimize build broke due to typo in rollup config ([1f35a1b](https://github.com/meteorlxy/vue-showdown/commit/1f35a1b))



## [2.2.1](https://github.com/meteorlxy/vue-showdown/compare/v2.2.0...v2.2.1) (2018-12-19)



# [2.2.0](https://github.com/meteorlxy/vue-showdown/compare/v2.1.0...v2.2.0) (2018-12-18)



# [2.1.0](https://github.com/meteorlxy/vue-showdown/compare/v2.0.2...v2.1.0) (2018-12-18)


### Features

* modifications about default options ([9eb73f7](https://github.com/meteorlxy/vue-showdown/commit/9eb73f7))



## [2.0.2](https://github.com/meteorlxy/vue-showdown/compare/v2.0.1...v2.0.2) (2018-09-09)



## [2.0.1](https://github.com/meteorlxy/vue-showdown/compare/v2.0.0...v2.0.1) (2018-07-17)



# [2.0.0](https://github.com/meteorlxy/vue-showdown/compare/v1.0.0...v2.0.0) (2018-07-17)

### Breaking changes

- `import VueShowdown from 'vue-showdown'` will get a Vue Plugin, which should be involved by `Vue.use(VueShowdown, options)`
- `import { VueShowdown } from 'vue-showdown'` will get a Vue Component, which should be involved by `Vue.component('VueShowdown ', VueShowdown )`

### Features

- Support options of `showdown.js` (see https://github.com/showdownjs/showdown)

### Others

- Refactor the codebase
- Use `rollup` to build dist files
- Use `vuepress` to build docs


# 1.0.0 (2017-10-19)

### Features

- Vue component for `showdown.js`
- Use `prop` or `slot` to pass the markdown text into the component

