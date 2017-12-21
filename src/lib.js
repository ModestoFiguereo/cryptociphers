import fs from 'fs';

export const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
export const POLYBIUS_SQUARE = [
  ['a', 'b', 'c', 'd', 'e'],
  ['f', 'g', 'h', 'i', 'j'],
  ['k', 'l', 'm', 'n', 'o'],
  ['p', 'q', 'r', 's', 't'],
  ['u', 'v', 'w', 'x', 'y'],
];
export const POLYBIUS_SIZE = 5;

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

export async function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.toString());
      }
    });
  });
}

export async function writeFile(file, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
}

export function removeFileNameExtension(filename) {
  return filename.substr(0, filename.lastIndexOf('.'));
}

export function normalizeMessage(text) {
  return text.trim().toLowerCase().split('').filter(char => char.trim() !== '');
}
