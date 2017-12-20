import { shift, mod, ALPHABET } from '../lib';

export default function encrypt(text, key) {
  const plain = text.trim().toLowerCase().split('').filter(char => char.trim() !== '');
  const encrypted = [];

  for (let i = 0; i < plain.length; i += 1) {
    const character = plain[i];
    const currentKey = key[mod(i, key.length)];

    encrypted.push(shift(character, ALPHABET.indexOf(currentKey), ALPHABET));
  }

  return encrypted.join('');
}
