#! /usr/bin/env node
'use strict';

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

clear();

try {
    const appName = process.argv[2] || 'wildboar-app';
    const { spawnSync } = require('child_process');
    const url = 'https://github.com/jacobra19/wildboar.git';


    spawnSync('git', ['clone', url, `${process.cwd()}/${appName}`]);
    spawnSync('cd', [`${process.cwd()}/${appName}`]);
    spawnSync('del', [`/F /S /Q /A .git`]);
    spawnSync('rmdir', [`.git`]);

    console.log(
        chalk.yellow(
            figlet.textSync('Wildboar.js', { font: 'ANSI Shadow' })
        )
    );

    console.log(chalk.green(`Your app has been successfully installed`))

    console.log(chalk.yellow(`
        cd ${appName}
        npm install
        npm start

    `));
} catch (error) {
    console.log(
        chalk.redBright.bold(`Something went wrong, check error:`)
    );
    console.log(error);

}