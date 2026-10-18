import { readFile } from 'node:fs/promises';
import path from 'node:path';

const filename = process.argv[2];

if (!filename) {
  console.log('Palihog hatag og filename.');
  console.log('Example: npm start sample.txt');
  process.exit(1);
}

try {
  const fullPath = path.resolve(filename);
  const text = await readFile(fullPath, 'utf8');

  const lines = text.split('\n').length;
  const words = text.trim().split(/\s+/).length;
  const characters = text.length;

  console.log(`File: ${filename}`);
  console.log(`Lines: ${lines}`);
  console.log(`Words: ${words}`);
  console.log(`Characters: ${characters}`);
} catch (err) {
  if (err.code === 'ENOENT') {
    console.log(`Error: wala makita ang file nga "${filename}"`);
  } else {
    console.log(`Error: ${err.message}`);
  }
  process.exit(1);
}