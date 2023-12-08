import {writeFileSync, readdirSync, readFileSync } from 'fs';
import config from './concat.config.js';

const inputPath = config.inputDir;
const outputFile = config.outputFile;
const hashOutput = config.hashOutput;

	const files = readdirSync(inputPath);

	let result = '';

	files.forEach((file) => {
	  const fileContent = readFileSync(inputPath + '/' + file, { encoding: 'utf-8' });
	  result += fileContent;
	});

	let outFileName = outputFile;
	if (hashOutput) {
		console.log('hashOutput is true');

		const newHash = Date.now() + Math.random();
		outFileName = outputFile.replace('.js', `.${newHash}.js`);
	}

	writeFileSync(outFileName, result);
