/** @type {import('inquirer').Questions} */
module.exports = [
  // TODO Prompts here
  {
    name: 'userName',
    type: 'input',
    message: 'Enter your name:',
    validate: answer => !!answer
  }
]
