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
        demoPlugin: {
          userName: options.userName
        }
      }
    },
    scripts: {
      'test': 'vue-cli-service foo'
    }
  })

  api.render('./template', {
    userName: options.userName
  })
}
