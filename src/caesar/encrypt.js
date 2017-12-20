import { shift, normalizeMessage, ALPHABET } from '../lib';

export default function encrypt(text, key) {
  return normalizeMessage(text)
    .map(letter => shift(letter, key, ALPHABET))
    .join('');
}
