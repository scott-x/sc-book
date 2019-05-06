const { copy } = require('slimz');
const path = require('path');
var chalk = require('chalk');
/**
file structure of temp:

		temp
		├── type1
		├── type2
		└── typen
**/

async function run(appName){
	try{
        let From = path.resolve(__dirname,'../temp/'+'sc-book'+'/');
        let To = './'+appName;
        await copy(From,To);
        console.log(`${chalk.green.bold('   cd '+appName)}, then edit the SUMMARY.md(the menu of your book). `);
        console.log(`   Once ready, run ${chalk.green.bold('gitbook init')}, it will generate the book menu automaticlly`);
        console.log(`   To launch the server, run ${chalk.green.bold('gitbook serve')}`)
        console.log(`   To build your book, run ${chalk.green.bold('gitbook build')}`)
        console.log(`   For more details, please visit ${chalk.green.bold('https://www.npmjs.com/package/gitbook')}`)
	}catch(err){
		console.log(err)
	}
}

module.exports={
	run
}