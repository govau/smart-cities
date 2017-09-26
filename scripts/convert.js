#!/usr/bin/env node -r @std/esm

// This file relies on ES6 modules
// so must be run via "npm run convert" which uses @std/esm

import csv from 'csv';
import mapValues from 'lodash/mapValues';
import kebabCase from 'lodash/kebabCase';
import getStdin from 'get-stdin';
import { INDICATORS } from '../src/constants';

const dict = mapValues(INDICATORS, atts => atts.source);

getStdin().then((rawCsv) => {
  csv.parse(rawCsv, { columns: true }, (err, data) => {
    process.stdout.write(JSON.stringify(data.map(row => ({
      name: row.Cities,
      id: kebabCase(row.Cities),
      indices: mapValues(dict, (colKey) => {
        if (!row[colKey]) throw new Error(`Key not found! ${colKey}`);
        return row[colKey];
      }),
    })), null, 2)); // pretty-print
  });
});
