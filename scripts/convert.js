#!/usr/bin/env node -r @std/esm

// This file relies on ES6 modules so must be run through @std/esm
// You can use "npm run generate-city-data" to do this

import csv from 'csv';
import getStdin from 'get-stdin';
import INDICATORS from '../src/constants/indicators';

// convert from an object to an array with a key for each indicator
const indicators = Object.entries(INDICATORS).map(([key, indicator]) => ({
  key,
  source: indicator.source,
}));

getStdin().then((rawCsv) => {
  csv.parse(rawCsv, { columns: true }, (err, data) => {
    const cities = data.map((row) => {
      if (!row.Cities) return null;

      const city = {
        source: row.Cities,
        indicators: {},
      };

      // generate key/value pairs for each indicator
      indicators.forEach((indicator) => {
        if (indicator.source in row) {
          const value = row[indicator.source];

          // All data should be numeric
          if (Number.isNaN(Number(value))) {
            throw new Error(`value of "${value}" for ${row.Cities} for ${indicator.source} is not a number`);
          }

          // Skip empty cells
          if (value) {
            city.indicators[indicator.key] = Number(value);
          }
        } else {
          // if the indicator source (column name) doesn't exist in the csv, throw an error
          throw new Error(`Key not found! ${indicator.source}`);
        }
      });

      return city;
    }).filter(city => city);

    process.stdout.write(JSON.stringify(cities, null, 2)); // pretty-print
  });
});
