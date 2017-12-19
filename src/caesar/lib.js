export const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

export function shift(letter, key, alphabet) {
  const originalPosition = alphabet.indexOf(letter);
  const shiftedPosition = mod(originalPosition + key, alphabet.length);

  return alphabet.charAt(shiftedPosition);
}

export function unshift(letter, key, alphabet) {
  const shiftedPosition = alphabet.indexOf(letter);
  const originalPosition = mod(shiftedPosition - key, alphabet.length);

  return alphabet.charAt(originalPosition);
}

export function mod(dividend, modulus) {
  return ((dividend % modulus) + modulus) % modulus;
}
