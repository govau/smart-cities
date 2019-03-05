#!/usr/bin/env node -r @std/esm
/* eslint-disable max-len */

// This file relies on ES6 modules so must be run through @std/esm
// You can use "npm run generate-indicators-data" to do this

import csv from 'csv';
import fs from 'fs';
import util from 'util';
import INDICATORSDEFAULT from '../src/constants/indicators';

// convert from an object to an array with a key for each indicator
const indicatorsDefault = Object.entries(INDICATORSDEFAULT).map(([key, indicator]) => ({
  key,
  indicatorProp: indicator,
}));

function loadUpdateData(metadataFilename) {
  if (fs) {
    return (fs.readFileSync(metadataFilename, 'utf8'));
  }
  return '';
}
function updateIndicatorsData(metadataFilename, outputFileName) {
  csv.parse(loadUpdateData(metadataFilename), { columns: true }, (err, data) => {
    const popups = data.map((row) => {
      if (!row.indicator) { return null; }
      const popup = {
        indicator: row.indicator,
        displayMessage: row.message,
        period: row.period,
      };
      return popup;
    }).filter(popup => popup);
    const result = {};
    for (let indicIndex = 0; indicIndex < indicatorsDefault.length; indicIndex++) {
      result[indicatorsDefault[indicIndex].key] = indicatorsDefault[indicIndex].indicatorProp;
      for (let popIndex = 0; popIndex < popups.length; popIndex++) {
        if (indicatorsDefault[indicIndex].indicatorProp.source === popups[popIndex].indicator) {
          result[indicatorsDefault[indicIndex].key].lastUpdated = popups[popIndex].period;
        }
      }
    }
    const stream = fs.createWriteStream(outputFileName);
    stream.write('/* eslint linebreak-style: [\'error\', \'unix\'] */\n/* eslint-disable max-len */\n/* eslint-disable comma-dangle */\n/* eslint-disable array-bracket-spacing */\n');
    // stream.write('import { FORMATS } from \'./misc\';\n');
    stream.write('\nexport default ');
    stream.write(util.inspect(result, { showHidden: false, depth: null, breakLength: 250 }));
    stream.write(';');
    stream.write('\n');
    stream.end();
  });
}

function validateParameters() {
  const fileParams = process.argv.map((a, index) => { if (a === '-metaFile' || a === '-outFile') { return { Param: a, Index: index + 1 }; } return null; }).filter(mi => mi);
  if (fileParams.length !== 2) { return []; }
  const metaFileIndex = fileParams[0].Param === '-metaFile' ? fileParams[0].Index : fileParams[1].Index;
  const outputFileIndex = fileParams[1].Param === '-outFile' ? fileParams[1].Index : fileParams[0].Index;
  return [process.argv[metaFileIndex], process.argv[outputFileIndex]];
}

const metaIndex = 0;
const outputfileIndex = 1;
const fileNames = validateParameters();

if (fileNames.length !== 2 || !(fileNames[metaIndex] && fileNames[outputfileIndex])) {
  console.log('**** Required files not specified, command must have switches -metaFile and -outFile specified. ****');
} else { updateIndicatorsData(fileNames[metaIndex], fileNames[outputfileIndex]); }

