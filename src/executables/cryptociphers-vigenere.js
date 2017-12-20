import 'babel-polyfill';
import program from 'commander';

program
  .version('0.0.1')
  .command('decrypt [options]', 'decrypts a file encrypted with the vigenere cipher')
  .command('encrypt [options]', 'encrypts a file with the vigenere cipher')
  .parse(process.argv);

// TODO: kasiski analysis attack.
