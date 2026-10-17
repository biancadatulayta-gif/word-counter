# Word & Line Counter CLI

A simple Node.js command-line application that counts the lines, words, and characters in a text file.

## Requirements
- Node.js
- npm

## Setup
1. Open this folder in VS Code.
2. Open the terminal in the project folder.
3. Run `npm install` if needed.

## Usage
Run the program with a text filename:

```bash
npm start sample.txt
```

If you do not provide a filename, the program displays usage instructions. If the file does not exist, it displays a helpful error message.

## Features
- Counts lines
- Counts words
- Counts characters
- Reads files with `fs/promises`
- Uses `process.argv` to read the filename
- Uses `path` to resolve the file path
- Handles file errors with `try/catch`

## Files
- `index.js` — main CLI program
- `sample.txt` — sample text to count
- `package.json` — npm project configuration
