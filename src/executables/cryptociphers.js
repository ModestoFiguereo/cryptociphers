#! /usr/bin/env node

import 'babel-polyfill';
import program from 'commander';

program
  .version('0.0.1')
  .usage('[command] [options]')
  .command('caesar [action]', 'handles caesar cipher encryption and decription')
  .command('vigenere [action]', 'handles vigenere cipher encryption and decription')
  .command('polybius [action]', 'handles polybius square encode and decode')
  .parse(process.argv);
