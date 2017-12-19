import 'babel-polyfill';
import program from 'commander';

program
  .version('0.0.1')
  .command('decrypt [options]', 'decrypts a file encrypted with the caesar cipher')
  .command('encrypt [options]', 'encrypts a file with the caesar cipher')
  .command('brute-force [options]', 'encrypts a file with the caesar cipher')
  .parse(process.argv);
