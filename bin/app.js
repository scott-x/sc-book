#!/usr/bin/env node
'use strict'

var chalk = require('chalk');
var inquirer = require('inquirer');

inquirer
  .prompt([
    /* Pass your questions in here */
      {
        type: 'input',
        name: 'type',
        message: `${chalk.magenta(' Input your book name: ')}`,
        default: 'sc-book'
      },
      // {
      //   type: 'input',
      //   name: 'type',
      //   message: `${chalk.magenta(' Input Something You Like: ')}`,
      //   default: 'sth'
      // }
   
  ])
  .then(answers => {
    require('./task').run(answers.type)
  }).catch(err=>{
    console.log(err)
  })