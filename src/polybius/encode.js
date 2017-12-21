import { mod, ALPHABET, normalizeMessage, POLYBIUS_SIZE } from '../lib';

export default function encode(text) {
  const plain = normalizeMessage(text);
  const encoded = [];

  for (let i = 0; i < plain.length; i += 1) {
    const character = plain[i];
    const index = ALPHABET.indexOf(character);

    const column = mod(index, POLYBIUS_SIZE);
    const row = (index - column) / POLYBIUS_SIZE;

    encoded.push(`${row + 1}${column + 1}`);
  }

  return encoded.join(' ');
}
