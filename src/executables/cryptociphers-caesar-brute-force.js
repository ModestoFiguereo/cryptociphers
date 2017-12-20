import 'babel-polyfill';
import program from 'commander';
import decrypt from '../caesar/decrypt';
import { readFile, writeFile, removeFileNameExtension } from './lib';

program
  .version('0.0.1')
  .usage('[options]')
  .option('-f, --file <file>', 'input file with the encrypted message')
  .parse(process.argv);

(async function main() {
  const { file } = program;

  const encryptedText = await readFile(file);

  const guesses = [];

  for (let key = 0; key <= 25; key += 1) {
    const plaintext = decrypt(encryptedText, key);

    guesses.push(plaintext);
  }

  const outputFilename = `${removeFileNameExtension(file)}-brute-force.txt`;
  await writeFile(
    outputFilename,
    guesses.map((text, idx) => `***With key: ${idx}.***\n${text}`).join('\n\n')
  );

  console.log(`Output file: "${outputFilename}"`);
  console.log('***DONE***');
}());
