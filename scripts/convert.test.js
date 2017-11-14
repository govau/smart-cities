const mockCsvData = `Cities,"Population, All persons, People","Population, persons, Annual Growth %"
Greater Sydney,4920000,0.021
Greater Perth,2040000,0.016`;

const expectedOutputObject = [
  {
    id: 'greater-sydney',
    shortName: 'Sydney',
    description: 'Description of Sydney',
    name: 'Greater Sydney',
    indices: {
      population: 4920000,
      growthRate: 0.021
    },
  },
  {
    id: 'greater-perth',
    shortName: 'Perth',
    description: 'Description of Perth',
    name: 'Greater Perth',
    indices: {
      population: 2040000,
      growthRate: 0.016
    },
  },
];

jest.mock('../src/constants', () => ({
  INDICATORS: {
    population: {
      name: 'The population indicator name',
      source: 'Population, All persons, People',
    },
    growthRate: {
      name: 'Annual population growth rate',
      source: 'Population, persons, Annual Growth %',
    },
  },
  CITIES: {
    'Greater Sydney': {
      id: 'greater-sydney',
      shortName: 'Sydney',
      description: 'Description of Sydney',
    },
    'Greater Perth': {
      id: 'greater-perth',
      shortName: 'Perth',
      description: 'Description of Perth',
    },
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
