import { COLOR_NAMES } from './misc';

export default [
  {
    id: 'jobs',
    colorName: COLOR_NAMES.JOBS,
    name: 'Jobs & Skills',
    description: 'Jobs and Skills encompasses all key elements of employment and training in our cities, including the performance of the employment market and the skill level of the workforce.',
    subCategories: [
      {
        name: 'Employment',
        colorVariation: '100',
        indicatorIds: [
          'participationRate',
          'gdp',
        ],
      },
      {
        name: 'Education',
        colorVariation: '050',
        indicatorIds: [
          'educationalAttainmentYr12',
        ],
      },
    ],
    heroIndicatorId: 'population',
  },
  {
    id: 'housing',
    colorName: COLOR_NAMES.HOUSING,
    name: 'Housing',
    description: 'Housing encompasses three broad dimensions: the affordability of housing in our cities; the supply and diversity of new housing stock; and where housing is located, including how accessible it is to jobs and services.',
    subCategories: [
      {
        name: 'Buying houses',
        colorVariation: '100',
        indicatorIds: [],
      },
      {
        name: 'Living in houses',
        colorVariation: '050',
        indicatorIds: [],
      },
    ],
    heroIndicatorId: 'growthRate',
  },
  {
    id: 'infrastructure',
    colorName: COLOR_NAMES.INFRASTRUCTURE,
    name: 'Infrastructure & Other Things',
    navName: 'Infrastructure',
    description: 'Infrastructure and Investment encompasses all key dimensions of the city’s investment environment, with a particular focus on the quality, efficiency and effectiveness of infrastructure.',
    subCategories: [
      {
        name: 'Getting to work',
        colorVariation: '400',
        indicatorIds: [
          'jobsWalk',
          'jobsBike',
          'jobsCar',
        ],
      },
      {
        name: 'Getting around',
        colorVariation: '100',
        indicatorIds: [
          'activeJourneys',
          'publicJourneys',
        ],
      },
      {
        name: 'Infrastructure',
        colorVariation: '050',
        indicatorIds: [],
      },
    ],
    heroIndicatorId: 'population',
  },
  {
    id: 'liveability',
    colorName: COLOR_NAMES.LIVEABILITY,
    name: 'Liveability',
    description: 'Liveability and Sustainability encompasses three broad dimensions: the health and wellbeing of residents; the attractiveness and amenity of the city; and the state of the environment and the local response to climate change.',
    subCategories: [
      {
        name: 'Environment',
        colorVariation: '500',
        indicatorIds: [],
      },
      {
        name: 'Public safety',
        colorVariation: '400',
        indicatorIds: [],
      },
      {
        name: 'Life and death',
        colorVariation: '100',
        indicatorIds: [],
      },
      {
        name: 'Socioeconomic disadvantage',
        colorVariation: '050',
        indicatorIds: [],
      },
    ],
    heroIndicatorId: 'dispersion',
  },
  {
    id: 'innovation',
    colorName: COLOR_NAMES.INNOVATION,
    name: 'Innovation',
    description: 'Innovation and Digital Opportunities encompasses three broad dimensions: city productivity; innovation and entrepreneurship; and access to public data',
    subCategories: [
      {
        name: 'Data',
        colorVariation: '100',
        indicatorIds: [],
      },
      {
        name: 'Working in digital',
        colorVariation: '050',
        indicatorIds: [],
      },
    ],
    heroIndicatorId: 'population',
  },
  {
    id: 'planning',
    colorName: COLOR_NAMES.PLANNING,
    name: 'Planning',
    description: 'Governance, Planning and Regulation encompasses land use planning in cities and its administration, as well as how effectively local governance and regulation support economic, social and environmental outcomes.',
    subCategories: [
      {
        name: 'Development',
        colorVariation: '100',
        indicatorIds: [],
      },
      {
        name: 'Population',
        colorVariation: '050',
        indicatorIds: [],
      },
    ],
    heroIndicatorId: 'population',
  },
];
