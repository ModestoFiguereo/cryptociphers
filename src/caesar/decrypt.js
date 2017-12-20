import { unshift, normalizeMessage, ALPHABET } from '../lib';

export default function decrypt(text, key) {
  return normalizeMessage(text)
    .map(letter => unshift(letter, key, ALPHABET))
    .join('');
}
