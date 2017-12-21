import { POLYBIUS_SQUARE } from '../lib';

export default function decode(text) {
  const encoded = text.trim().split(' ');
  const decoded = [];

  for (let i = 0; i < encoded.length; i += 1) {
    const [row, column] = encoded[i];

    decoded.push(POLYBIUS_SQUARE[row - 1][column - 1]);
  }

  return decoded.join('');
}
