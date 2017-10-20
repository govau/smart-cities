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
        tint: '040',
        shade: '600',
        summaryIndicatorIds: [
          'unemploymentRateGeneral',
          'unemploymentRateIndigenous',
          'employmentGrowth',
        ],
        charts: [
          {
            name: 'Youth unemployment',
            longDescription: 'TODO',
            indicatorIds: [
              'unemploymentRateYouth',
            ],
          },
          {
            name: 'Unemployment rate',
            longDescription: 'TODO',
            indicatorIds: [
              'unemploymentRateGeneral',
            ],
          },
          {
            name: 'Indigenous unemployment',
            longDescription: 'TODO',
            indicatorIds: [
              'unemploymentRateIndigenous',
            ],
          },
          {
            name: 'Participation rate',
            longDescription: 'TODO',
            indicatorIds: [
              'participationRateGeneral',
              'participationRateFemale',
              'participationRateMale',
            ],
          },
          {
            name: 'Employment growth',
            longDescription: 'TODO',
            indicatorIds: [
              'employmentGrowth',
            ],
          },
        ],
      },
      {
        name: 'Education',
        tint: '060',
        shade: '700',
        summaryIndicatorIds: [
          'educationalAttainmentYr12',
        ],
        charts: [],
      },
    ],
    heroIndicatorId: 'unemploymentRateYouth',
  },
  {
    id: 'housing',
    colorName: COLOR_NAMES.HOUSING,
    name: 'Housing',
    description: 'Housing encompasses three broad dimensions: the affordability of housing in our cities; the supply and diversity of new housing stock; and where housing is located, including how accessible it is to jobs and services.',
    subCategories: [
      {
        name: 'Buying houses',
        tint: '040',
        shade: '600',
        summaryIndicatorIds: [],
        charts: [],
      },
      {
        name: 'Living in houses',
        tint: '060',
        shade: '700',
        summaryIndicatorIds: [],
        charts: [],
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
        tint: '040',
        shade: '600',
        summaryIndicatorIds: [
          'jobsCar',
        ],
        charts: [],
      },
      {
        name: 'Getting around',
        tint: '060',
        shade: '700',
        summaryIndicatorIds: [
          'activeJourneys',
          'publicJourneys',
        ],
        charts: [],
      },
      {
        name: 'Infrastructure',
        tint: '080',
        shade: '800',
        summaryIndicatorIds: [],
        charts: [],
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
        tint: '040',
        shade: '600',
        summaryIndicatorIds: [],
        charts: [],
      },
      {
        name: 'Public safety',
        tint: '060',
        shade: '700',
        summaryIndicatorIds: [],
        charts: [],
      },
      {
        name: 'Life and death',
        tint: '080',
        shade: '800',
        summaryIndicatorIds: [],
        charts: [],
      },
      {
        name: 'Socioeconomic disadvantage',
        tint: '100',
        shade: '900',
        summaryIndicatorIds: [],
        charts: [],
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
        tint: '040',
        shade: '600',
        summaryIndicatorIds: [],
        charts: [],
      },
      {
        name: 'Working in digital',
        tint: '060',
        shade: '700',
        summaryIndicatorIds: [],
        charts: [],
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
        tint: '040',
        shade: '600',
        summaryIndicatorIds: [],
        charts: [],
      },
      {
        name: 'Population',
        tint: '060',
        shade: '700',
        summaryIndicatorIds: [],
        charts: [],
      },
    ],
    heroIndicatorId: 'population',
  },
];
