const mockCsvData = `Cities,"Population, All persons, People","Population, persons, Annual Growth %"
Greater Sydney,4920000,0.021
Greater Perth,2040000,0.016`;

const expectedOutputObject = [
  {
    source: 'Greater Sydney',
    indicators: {
      population: 4920000,
      growthRate: 0.021
    },
  },
  {
    source: 'Greater Perth',
    indicators: {
      population: 2040000,
      growthRate: 0.016
    },
  },
];

jest.mock('../src/constants/indicators', () => ({
  population: {
    name: 'The population indicator name',
    source: 'Population, All persons, People',
  },
  growthRate: {
    name: 'Annual population growth rate',
    source: 'Population, persons, Annual Growth %',
  },
}));

jest.mock('get-stdin', () => () => Promise.resolve(mockCsvData));
process.stdout.write = jest.fn();

it('Converts the data correctly', async () => {
  require('./convert');

  await new Promise(process.nextTick);
  const rawOutput = process.stdout.write.mock.calls[0];
  expect(JSON.parse(rawOutput)).toEqual(expectedOutputObject);
});
