import 'babel-polyfill';
import program from 'commander';
import encrypt from '../caesar/encrypt';
import { readFile, writeFile } from './lib';

program
  .version('0.1.0')
  .usage('[options]')
  .option('-f, --file <file>', 'input file with the plaintext message')
  .option('-o, --output <file>', 'output file with the encrypted message')
  .option('-k, --key <n>', 'caesar cipher key', parseInt)
  .parse(process.argv);

(async function main() {
  const { file, key, output } = program;

  const text = await readFile(file);

  const encryptedText = encrypt(text, key);

  await writeFile(output, encryptedText);

  console.log('***DONE***');
}());
