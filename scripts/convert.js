#!/usr/bin/env node -r @std/esm

// This file relies on ES6 modules
// so must be run via "npm run generate-city-data" which uses @std/esm

import csv from 'csv';
import kebabCase from 'lodash/kebabCase';
import getStdin from 'get-stdin';
import {
  INDICATORS,
  DATA_TYPES,
} from '../src/constants';

// convert from an object to an array with a key for each indicator
const indicators = Object.entries(INDICATORS).map(([key, indicator]) => ({
  key,
  source: indicator.source,
  dataType: indicator.dataType,
}));

getStdin().then((rawCsv) => {
  csv.parse(rawCsv, { columns: true }, (err, data) => {
    const cities = data.map((row) => {
      const city = {
        name: row.Cities,
        id: kebabCase(row.Cities),
        indices: {},
      };

      // generate key/value pairs for each indicator
      indicators.forEach((indicator) => {
        if (indicator.source in row) {
          const value = row[indicator.source];

          // if the indicator should be a number, cast to number or throw an error
          if (indicator.dataType === DATA_TYPES.NUMBER) {
            if (Number.isNaN(Number(value))) {
              // if a non-number is in a column that should be numbers, throw an error
              throw new Error(`value of "${value}" for ${row.Cities} for ${indicator.source} is not a number`);
            } else {
              // note this will convert blank cells to 0
              city.indices[indicator.key] = Number(value);
            }
          } else {
            // otherwise just use the value as text
            city.indices[indicator.key] = value;
          }
        } else {
          // if the indicator source (column name) doesn't exist in the csv, throw an error
          throw new Error(`Key not found! ${indicator.source}`);
        }
      });

      return city;
    });

    process.stdout.write(JSON.stringify(cities, null, 2)); // pretty-print
  });
});
