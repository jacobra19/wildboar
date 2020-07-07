// const chalk = require('chalk');
// const clear = require('clear');
// const figlet = require('figlet');

// // clear();

// // console.log(
// //   chalk.redBright(
// //     figlet.textSync('Wildboar',{})
// //   ),
// //   chalk.yellow(
// //     figlet.textSync('Wildboar')
// //   )
// // );

// // console.log(chalk.red.bgYellow('Hello'),chalk.green.bgYellow('world!'));

// // console.log(`
// // CPU: ${chalk.red('90%')}
// //     RAM: ${chalk.green('40%')}
// // DISK: ${chalk.yellow('70%')}
// // `);


// // console.log(chalk.green(
// //     'I am a green line ' +
// //     chalk.blue.underline.bold('with a blue substring') +
// //     ' that becomes green again!'
// // ));

// // #! /usr/bin/env node

// 'use strict';

// const appName = process.argv[2] || 'wildboar-app';
// const { spawnSync } = require('child_process');
// const url = 'https://github.com/jacobra19/wildboar.git';

// // git clone --depth=1 --branch=master git://someserver/somerepo dirformynewrepo
// // // rm -rf ./dirformynewrepo/.git

// // spawnSync('git', ['clone -depth=1 --branch=master', url, `${process.cwd()}/${appName}`]);

// // spawnSync('cd', [`${process.cwd()}/${appName}`]);
// // spawnSync('del', ['.gitignore']);

// // try {
// //     console.log('Your app has been successfully installed');
// //     console.log(`$ cd ${appName}`);
// //     console.log(`$ npm install`);
// //     console.log('$ npm start');
// // } catch (error) {
// //     console.log('error', error)
// // }

// console.log(chalk.green(`
// Your app has been successfully installed

// cd ${appName}
// npm install
// npm start

// `));