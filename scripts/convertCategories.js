#!/usr/bin/env node -r @std/esm
/* eslint-disable max-len */

// This file relies on ES6 modules so must be run through @std/esm
// You can use "npm run generate-categories-data" to do this

import csv from 'csv';
import fs from 'fs';
import util from 'util';
import { CATEGORY_IDS } from '../src/constants/categories';
import { CATEGORIES } from '../src/constants/categories';
import INDICATORS from '../src/constants/indicators';

// convert from an object to an array with a key for each indicator
const indicators = Object.entries(INDICATORS).map(([key, indicator]) => ({
  key,
  source: indicator.source,
}));

const defaultCategories = CATEGORIES;

function loadUpdateData(metaFile) {
  if (fs) {
    return (fs.readFileSync(metaFile, 'utf8'));
  }
  return '';
}

function updateCategoryData(metaFile, outputFile) {
  csv.parse(loadUpdateData(metaFile), { columns: true }, (err, data) => {
    const popups = data.map((row) => {
      if (!row.indicator) { return null; }
      const indicatorToUse = indicators.filter(indicator => indicator.source === row.indicator)[0];
      if (!indicatorToUse) { return null; }
      const popup = {
        indicator: indicatorToUse.key,
        displayMessage: row.message,
        period: row.period,
      };
      return popup;
    }).filter(popup => popup);
    for (let catIndex = 0; catIndex < defaultCategories.length; catIndex++) {
      for (let subCatIndex = 0; subCatIndex < defaultCategories[catIndex].subCategories.length; subCatIndex++) {
        for (let chartIndex = 0; chartIndex < defaultCategories[catIndex].subCategories[subCatIndex].charts.length; chartIndex++) {
          for (let popIndex = 0; popIndex < popups.length; popIndex++) {
            if (defaultCategories[catIndex].subCategories[subCatIndex].charts[chartIndex].indicatorIds.includes(popups[popIndex].indicator)) {
              defaultCategories[catIndex].subCategories[subCatIndex].charts[chartIndex].description = popups[popIndex].displayMessage;
            }
          }
        }
      }
    }
    const stream = fs.createWriteStream(outputFile, { encoding: 'utf8' });
    stream.write('/* eslint linebreak-style: [\'error\', \'unix\'] */\n/* eslint-disable max-len */\n/* eslint-disable comma-dangle */\n/* eslint-disable array-bracket-spacing */\n');
    stream.write('export const CATEGORY_IDS = ');
    stream.write(util.inspect(CATEGORY_IDS, { showHidden: false, depth: null }));
    stream.write(';\n');
    stream.write('\n');
    stream.write('export const CATEGORIES = ');
    stream.write(util.inspect(defaultCategories, { showHidden: false, depth: null, breakLength: Infinity }));
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
} else { updateCategoryData(fileNames[metaIndex], fileNames[outputfileIndex]); }
