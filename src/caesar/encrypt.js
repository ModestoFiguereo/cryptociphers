import { shift, ALPHABET } from './lib';

export default function encrypt(text, key) {
  return text.trim().split('')
    .map(letter => shift(letter, key, ALPHABET))
    .join('');
}
