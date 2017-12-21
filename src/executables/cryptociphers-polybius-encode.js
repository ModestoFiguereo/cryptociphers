import 'babel-polyfill';
import program from 'commander';
import encode from '../polybius/encode';
import { readFile, writeFile } from './lib';

program
  .version('0.0.1')
  .usage('[options]')
  .option('-f, --file <file>', 'input file with the plaintext message')
  .option('-o, --output <file>', 'output file with the encoded message')
  .parse(process.argv);

(async function main() {
  const { file, output } = program;

  const text = await readFile(file);

  const encodedText = encode(text);

  await writeFile(output, encodedText);

  console.log('***DONE***');
}());
