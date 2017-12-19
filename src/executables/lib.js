import fs from 'fs';

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
