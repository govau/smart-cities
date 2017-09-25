#!/usr/bin/env node

// Usage: `convert.js < /path/to/cities.csv > cities.json`

const csv = require('csv');
const mapValues = require('lodash/mapValues');
const kebabCase = require('lodash/kebabCase');
const getStdin = require('get-stdin');
const dataShell = require('../src/constants/data-shell.json');

const dict = mapValues(dataShell.data.indices, atts => atts.source);

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
