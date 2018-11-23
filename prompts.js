/** @type {import('inquirer').Questions} */
module.exports = [
  // TODO Prompts here

  {
    name: 'examples',
    message: 'Do you want some examples?',
    type: 'confirm'
  },
  {
    name: 'moreExamples',
    type: 'confirm',
    message: 'Hello',
    when: answers => answers.examples
  },
  {
    name: 'choices',
    type: 'list',
    choices: [
      { name: 'Choice a', value: 'a' },
      { name: 'Choice b', value: 'b' }
    ]
  }
]
