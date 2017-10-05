import {
  COLOR_NAMES,
  AGGREGATION_METHODS,
} from './misc';

export default [
  {
    id: 'jobs',
    colorName: COLOR_NAMES.JOBS,
    name: 'Jobs & Skills',
    description: 'Jobs and Skills encompasses all key elements of employment and training in our cities, including the performance of the employment market and the skill level of the workforce.',
    heroIndicator: {
      id: 'population',
      aggregationMethod: AGGREGATION_METHODS.SUM,
    },
  },
  {
    id: 'housing',
    colorName: COLOR_NAMES.HOUSING,
    name: 'Housing',
    description: 'Housing encompasses three broad dimensions: the affordability of housing in our cities; the supply and diversity of new housing stock; and where housing is located, including how accessible it is to jobs and services.',
    heroIndicator: {
      id: 'growthRate',
      aggregationMethod: AGGREGATION_METHODS.AVERAGE,
    },
  },
  {
    id: 'infrastructure',
    colorName: COLOR_NAMES.INFRASTRUCTURE,
    name: 'Infrastructure & Other Things',
    navName: 'Infrastructure',
    description: 'Infrastructure and Investment encompasses all key dimensions of the city’s investment environment, with a particular focus on the quality, efficiency and effectiveness of infrastructure.',
    heroIndicator: {
      id: 'population',
      aggregationMethod: AGGREGATION_METHODS.AVERAGE,
    },
  },
  {
    id: 'liveability',
    colorName: COLOR_NAMES.LIVEABILITY,
    name: 'Liveability',
    description: 'Liveability and Sustainability encompasses three broad dimensions: the health and wellbeing of residents; the attractiveness and amenity of the city; and the state of the environment and the local response to climate change.',
    heroIndicator: {
      id: 'dispersion',
      aggregationMethod: AGGREGATION_METHODS.AVERAGE,
    },
  },
  {
    id: 'innovation',
    colorName: COLOR_NAMES.INNOVATION,
    name: 'Innovation',
    description: 'Innovation and Digital Opportunities encompasses three broad dimensions: city productivity; innovation and entrepreneurship; and access to public data',
    heroIndicator: {
      id: 'population',
      aggregationMethod: AGGREGATION_METHODS.AVERAGE,
    },
  },
  {
    id: 'planning',
    colorName: COLOR_NAMES.PLANNING,
    name: 'Planning',
    description: 'Governance, Planning and Regulation encompasses land use planning in cities and its administration, as well as how effectively local governance and regulation support economic, social and environmental outcomes.',
    heroIndicator: {
      id: 'population',
      aggregationMethod: AGGREGATION_METHODS.AVERAGE,
    },
  },
];
