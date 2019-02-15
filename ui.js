/** @typedef {import('@vue/cli-ui/apollo-server/api/PluginApi')} PluginApi */

/**
 * @param {PluginApi} api
 * @param {any} options
 */
module.exports = (api, options) => {
  // TODO GUI Integration here
  api.describeTask({
    match: /vue-cli-service foo/,
    description: 'I am doing dumb things do not try me',
    link: 'https://vuejs.org',
    prompts: [
      {
        name: 'bar',
        type: 'confirm',
        message: 'Enable bar'
      }
    ],
    onBeforeRun: ({ answers, args }) => {
      if (answers.bar) args.push('--bar')
    }
  })
}
