import 'babel-polyfill';
import program from 'commander';

program
  .version('0.0.1')
  .command('encode [options]', 'encodes a file with the polybius square')
  .command('decode [options]', 'decodes a file encrypted with the polybius square')
  .parse(process.argv);
