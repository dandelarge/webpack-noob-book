import {writeFileSync, readdirSync, readFileSync } from 'fs';

const inputPath = './src/';
const outputPath = './dist/lib.js';

const files = readdirSync(inputPath);

let result = '';

files.forEach((file) => {
  const fileContent = readFileSync(inputPath + '/' + file, { encoding: 'utf-8' });
  result += fileContent;
});

writeFileSync(outputPath, result);

