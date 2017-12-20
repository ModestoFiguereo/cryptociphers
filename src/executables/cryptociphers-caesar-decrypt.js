import 'babel-polyfill';
import program from 'commander';
import decrypt from '../caesar/decrypt';
import { readFile, writeFile } from './lib';

program
  .version('0.0.1')
  .usage('[options]')
  .option('-f, --file <file>', 'input file with the plaintext message')
  .option('-o, --output <file>', 'output file with the encrypted message')
  .option('-k, --key <n>', 'caesar cipher key', parseInt)
  .parse(process.argv);

(async function main() {
  const { file, key, output } = program;

  const encryptedText = await readFile(file);

  const plaintext = decrypt(encryptedText, key);

  await writeFile(output, plaintext);

  console.log('***DONE***');
}());
