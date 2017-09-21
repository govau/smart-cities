#!/usr/bin/env node

// Usage: `convert.js < /path/to/cities.csv > cities.json`

const csv = require('csv');
const fs = require('fs');
const mapValues = require('lodash/mapValues');
const getStdin = require('get-stdin');
const path = require('path');

const dataShellPath = path.resolve(__dirname, '../resources/data-shell.json');
const dataShell = JSON.parse(fs.readFileSync(dataShellPath, 'utf-8'));
const dict = mapValues(dataShell.data.indices, (atts) => atts.source);

getStdin().then(rawCsv => {
  csv.parse(rawCsv, { columns: true }, (err, data) => {
    process.stdout.write(JSON.stringify(data.map((row) => ({
      name: row['Cities'],
      indices: mapValues(dict, (colKey) => {
        if (!row[colKey]) throw new Error(`Key not found! ${colKey}`);
        return row[colKey];
      })
    })), null, 2)); // pretty-print
  });
});
