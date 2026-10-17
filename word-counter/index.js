import fs from 'node:fs/promises';
import path from 'node:path';

const filename = process.argv[2];

if (!filename) {
  console.log('Please provide a filename.');
  console.log('Usage: npm start sample.txt');
  process.exitCode = 1;
} else {
  try {
    const filePath = path.resolve(filename);
    const content = await fs.readFile(filePath, 'utf8');

    // Count lines (an empty file has zero lines).
    const lines = content === ''
      ? 0
      : content.split(/\r\n|\n|\r/).length;

    // Count words separated by whitespace.
    const words = content.trim()
      ? content.trim().split(/\s+/).length
      : 0;

    // Count characters, including spaces and newline characters.
    const characters = content.length;

    console.log('------------------------');
    console.log(`File: ${filename}`);
    console.log(`Lines: ${lines}`);
    console.log(`Words: ${words}`);
    console.log(`Characters: ${characters}`);
    console.log('------------------------');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`Error: File "${filename}" was not found.`);
    } else {
      console.error(`Error reading file: ${error.message}`);
    }

    process.exitCode = 1;
  }
}
