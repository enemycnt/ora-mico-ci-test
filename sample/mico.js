const Spinner = require('mico-spinner')

let spinner = Spinner('Mico').start()
setTimeout(() => {
  spinner.succeed()
}, 3000)
