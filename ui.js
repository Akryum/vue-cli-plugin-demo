/** @typedef {import('@vue/cli-ui/apollo-server/api/PluginApi')} PluginApi */

/**
 * @param {PluginApi} api
 * @param {any} options
 */
module.exports = (api, options) => {
  // TODO GUI Integration here
  api.describeTask({
    match: /vue-cli-service foo/,
    description: `That's a prettttttyy long description`,
    link: 'https://vuejs.org'
  })
}
