/** @typedef {import('@vue/cli-service/lib/PluginAPI')} PluginAPI */

/**
 * @param {PluginAPI} api
 * @param {any} options
 */
module.exports = (api, options) => {
  // TODO our service plugin here
  api.registerCommand('foo', {
    '--bar': 'Thats a pretty argument'
  }, (args) => {
    console.log('Foo was called!', args)

    console.log('env', process.env.FOO, process.env.BAR)
  })
}
