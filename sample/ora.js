const ora = require('ora');

const spinner = ora('Ora').start();

setTimeout(() => {
	spinner.succeed()
}, 3000);