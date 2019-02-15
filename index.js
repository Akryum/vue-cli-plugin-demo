/** @typedef {import('@vue/cli-service/lib/PluginAPI')} PluginAPI */

/**
 * @param {PluginAPI} api
 * @param {any} options
 */
module.exports = (api, options) => {
  // TODO our service plugin here
  api.registerCommand('foo', {
    '--bar': 'I am an argument'
  }, (args) => {
    console.log('Foo was called')
    if (args.bar) {
      console.log('Bar is there')
    }
  })
}
