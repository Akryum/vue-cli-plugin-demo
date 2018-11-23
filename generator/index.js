/** @typedef {import('@vue/cli/lib/GeneratorAPI')} GeneratorAPI */

/**
 * @param {GeneratorAPI} api
 * @param {any} options
 */
module.exports = (api, options) => {
  // TODO our generator here
  api.extendPackage({
    dependencies: {
      deepmerge: '^2.2.1'
    },
    vue: {
      pluginOptions: {
        hello: 'hello'
      }
    }
  })

  api.render('./template/')
}
