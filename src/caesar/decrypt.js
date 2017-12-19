import { unshift, ALPHABET } from './lib';

export default function decrypt(text, key) {
  return text.split('')
    .map(letter => unshift(letter, key, ALPHABET))
    .join('');
}
