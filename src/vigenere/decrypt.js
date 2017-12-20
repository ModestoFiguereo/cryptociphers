import { unshift, mod, normalizeMessage, ALPHABET } from '../lib';

export default function decrypt(text, key) {
  const encrypted = normalizeMessage(text);
  const decrypted = [];

  for (let i = 0; i < encrypted.length; i += 1) {
    const character = encrypted[i];
    const currentKey = key[mod(i, key.length)];

    decrypted.push(unshift(character, ALPHABET.indexOf(currentKey), ALPHABET));
  }

  return decrypted.join('');
}
