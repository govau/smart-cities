import { COLOR_NAMES } from './misc';

export const CATEGORY_IDS = {
  OVERVIEW: 'overview',
  CONTEXT: 'context',
  JOBS: 'jobs',
  HOUSING: 'housing',
  INFRASTRUCTURE: 'infrastructure',
  LIVEABILITY: 'liveability',
  INNOVATION: 'innovation',
  PLANNING: 'planning',
};

export const CATEGORIES = [
  {
    id: CATEGORY_IDS.CONTEXT,
    colorName: COLOR_NAMES.CONTEXT,
    navName: 'Context',
    name: 'Cities Context',
    description: 'Contextual indicators can help to understand why a city performs the way it does and what policies may be effective for improving economic performance and quality of life.',
    shortDescription: 'Contextual indicators can help to understand why a city performs the way it does and what policies may be effective for improving economic performance and quality of life.',
    heroIndicatorId: 'population',
    overviewIndicatorIds: [
      'growthRate',
      'population10yr',
    ],
    subCategories: [
      {
        name: 'Planning',
        highlightColorLight: 'PLANNING_040',
        highlightColorDark: 'PLANNING_500',
        iconId: 'planningLocalGovernment',
        summaryIndicatorIds: [
          'indigenousPopulation',
          'growthRate',
          'population10yr',
        ],
        charts: [
          {
            name: 'Total population',
            indicatorIds: [
              'population',
            ],
          },
          {
            name: 'Population growth',
            indicatorIds: [
              'growthRate',
              'population10yr',
            ],
          },
          {
            name: 'Indigenous population',
            indicatorIds: [
              'indigenousPopulation',
            ],
          },
          {
            name: 'Population density',
            indicatorIds: [
              'populationDensity',
            ],
          },
          {
            name: 'Age dependency ratio',
            stacked: true,
            indicatorIds: [
              'dependencyRatio14OrYounger',
              'dependencyRatio15To64',
              'dependencyRatio65OrOlder',
            ],
          },
          {
            name: 'Dependency, not of working age',
            indicatorIds: [
              'dependencyRatioNotWorkingAge',
            ],
          },
          {
            name: 'Dependency ratio median age',
            indicatorIds: [
              'dependencyRatioMedianAge',
            ],
          },
          {
            name: 'Disability rate',
            indicatorIds: [
              'disabilityRate',
            ],
          },
        ],
      },
      {
        name: 'Housing',
        highlightColorLight: 'HOUSING_040',
        highlightColorDark: 'HOUSING_500',
        iconId: 'housingHousingAffordability',
        summaryIndicatorIds: [
          'tenureRatioOwnedOutright',
          'tenureRatioMortgage',
          'tenureRatioRented',
        ],
        charts: [
          {
            name: 'Dwelling type ratio',
            stacked: true,
            indicatorIds: [
              'dwellingApartment',
              'dwellingSemi',
              'dwellingHouse',
              'dwellingOther',
            ],
          },
          {
            name: 'Average household size',
            indicatorIds: [
              'householdSize',
            ],
          },
          {
            name: 'Housing tenure',
            stacked: true,
            indicatorIds: [
              'tenureRatioOwnedOutright',
              'tenureRatioMortgage',
              'tenureRatioRented',
              'tenureRatioOther',
            ],
          },
          {
            name: 'Median house price',
            indicatorIds: [
              'medianHousePrice',
            ],
          },
        ],
      },
      {
        name: 'Liveability',
        highlightColorLight: 'LIVEABILITY_040',
        highlightColorDark: 'LIVEABILITY_500',
        iconId: 'liveabilityLiveability',
        summaryIndicatorIds: [
          'lifeExpectancy',
          'shareInBottomIncomeQuintile',
          'socioEconomicIndex',
        ],
        charts: [
          {
            name: 'Life expectancy at birth',
            indicatorIds: [
              'lifeExpectancy',
            ],
          },
          {
            name: 'Households in bottom 20% income',
            indicatorIds: [
              'shareInBottomIncomeQuintile',
            ],
          },
          {
            name: 'Socio-economic indexes for areas',
            indicatorIds: [
              'socioEconomicIndex',
            ],
          },
          {
            name: 'Languages other than English',
            indicatorIds: [
              'languagesOtherThanEnglish',
            ],
          },
        ],
      },
      {
        name: 'Jobs & Skills',
        highlightColorLight: 'JOBS_040',
        highlightColorDark: 'JOBS_500',
        iconId: 'jobsEmployment',
        summaryIndicatorIds: [
          'goodsProducingSector',
          'marketServices',
          'nonMarketServices',
        ],
        charts: [
          {
            name: 'Industry share of employment',
            stacked: true,
            indicatorIds: [
              'goodsProducingSector',
              'marketServices',
              'nonMarketServices',
            ],
          },
        ],
      },
    ],
  },
  {
    id: CATEGORY_IDS.JOBS,
    colorName: COLOR_NAMES.JOBS,
    iconId: 'jobsEmployment',
    name: 'Jobs & Skills',
    description: 'Jobs and Skills encompasses all key elements of employment and training in our cities, including the performance of the employment market and the skill level of the workforce.',
    shortDescription: 'Boost employment by supporting skills & industry development, & diverse economic growth.',
    heroIndicatorId: 'unemploymentRateYouth',
    overviewIndicatorIds: [
      'employmentGrowth',
      'unemploymentRateYouth',
    ],
    subCategories: [
      {
        name: 'Employment',
        highlightColorLight: 'JOBS_040',
        highlightColorDark: 'JOBS_600',
        iconId: 'jobsEmployment',
        summaryIndicatorIds: [
          'unemploymentRateGeneral',
          'unemploymentRateIndigenous',
          'employmentGrowth',
        ],
        charts: [
          {
            name: 'Unemployment',
            indicatorIds: [
              'unemploymentRateGeneral',
            ],
          },
          {
            name: 'Unemployment ratios',
            indicatorIds: [
              'unemploymentRateYouth',
              'unemploymentRateIndigenous',
            ],
          },
          {
            name: 'Participation rate',
            indicatorIds: [
              'participationRateGeneral',
            ],
          },
          {
            name: 'Participation by gender',
            indicatorIds: [
              'participationRateFemale',
              'participationRateMale',
            ],
          },
          {
            name: 'Employment growth',
            indicatorIds: [
              'employmentGrowth',
            ],
          },
        ],
      },
      {
        name: 'Education',
        highlightColorLight: 'JOBS_060',
        highlightColorDark: 'JOBS_700',
        iconId: 'jobsEducation',
        summaryIndicatorIds: [
          'educationalAttainmentYr12',
        ],
        charts: [
          {
            name: 'Education Year 12',
            indicatorIds: [
              'educationalAttainmentYr12',
            ],
          },
          {
            name: 'Education Certificate',
            indicatorIds: [
              'educationalAttainmentCertificate',
            ],
          },
          {
            name: 'Education Tertiary',
            indicatorIds: [
              'educationalAttainmentTertiary',
            ],
          },
        ],
      },
    ],
  },
  {
    id: CATEGORY_IDS.HOUSING,
    colorName: COLOR_NAMES.HOUSING,
    iconId: 'housingHousingAffordability',
    name: 'Housing',
    description: 'Housing encompasses three broad dimensions: the affordability of housing in our cities; the supply and diversity of new housing stock; and where housing is located, including how accessible it is to jobs and services.',
    shortDescription: 'Improve housing supply and affordability, & encourage appropriate densities & diversity of housing options.',
    heroIndicatorId: 'dwellingPriceToIncomeRatio',
    overviewIndicatorIds: [
      'dwellingPriceToIncomeRatio',
    ],
    subCategories: [
      {
        name: 'Housing affordability',
        highlightColorLight: 'HOUSING_040',
        highlightColorDark: 'HOUSING_600',
        iconId: 'housingHousingAffordability',
        summaryIndicatorIds: [
          'residentialBuildingApprovalsTotal',
          'mortgageStress',
          'medianHousePrice',
        ],
        charts: [
          {
            name: 'Public housing units',
            indicatorIds: [
              'publicHousingUnits',
            ],
          },
          {
            name: 'Housing construction costs',
            indicatorIds: [
              'housingConstructionCosts',
            ],
          },
          {
            name: 'Mortgage stress',
            indicatorIds: [
              'mortgageStress',
            ],
          },
          {
            name: 'Dwelling price to income ratio',
            indicatorIds: [
              'dwellingPriceToIncomeRatio',
            ],
          },
          {
            name: 'Total residential building approvals',
            indicatorIds: [
              'residentialBuildingApprovalsTotal',
            ],
          },
          {
            name: 'Residential building approvals and growth',
            indicatorIds: [
              'residentialBuildingApprovalsGrowth',
            ],
          },
        ],
      },
      {
        name: 'Living affordability',
        highlightColorLight: 'HOUSING_060',
        highlightColorDark: 'HOUSING_700',
        iconId: 'housingLivingAffordability',
        summaryIndicatorIds: [
          'rentStress',
          'homelessnessRate',
          'householdSize',
        ],
        charts: [
          {
            name: 'Homelessness rate',
            indicatorIds: [
              'homelessnessRate',
            ],
          },
          {
            name: 'Rent stress',
            indicatorIds: [
              'rentStress',
            ],
          },
        ],
      },
    ],
  },
  {
    id: CATEGORY_IDS.INFRASTRUCTURE,
    colorName: COLOR_NAMES.INFRASTRUCTURE,
    iconId: 'infrastructureGettingToWork',
    name: 'Infrastructure and Investment',
    navName: 'Infrastructure',
    description: 'Infrastructure and Investment encompasses all key dimensions of the city’s investment environment, with a particular focus on the quality, efficiency and effectiveness of infrastructure.',
    shortDescription: 'Improve accessibility & productivity in cities with high quality, efficient and effective infrastructure & transport solutions.',
    heroIndicatorId: 'jobsCar',
    overviewIndicatorIds: [
      'jobsCar',
    ],
    subCategories: [
      {
        name: 'Getting to work',
        highlightColorLight: 'INFRASTRUCTURE_040',
        highlightColorDark: 'INFRASTRUCTURE_600',
        iconId: 'infrastructureGettingToWork',
        summaryIndicatorIds: [
          'jobsCar',
          'activeJourneys',
          'peakDelay',
        ],
        charts: [
          {
            name: 'Jobs accessible within 30 minutes by car',
            indicatorIds: [
              'jobsCar',
            ],
          },
          {
            name: 'Share of work trips by public transport',
            indicatorIds: [
              'publicJourneys',
            ],
          },
          {
            name: 'Share of work trips by active transport',
            indicatorIds: [
              'activeJourneys',
            ],
          },
          {
            name: 'Peak travel delay',
            indicatorIds: [
              'peakDelay',
            ],
          },
        ],
      },
    ],
  },
  {
    id: CATEGORY_IDS.LIVEABILITY,
    colorName: COLOR_NAMES.LIVEABILITY,
    iconId: 'liveabilityLiveability',
    name: 'Liveability',
    description: 'Liveability and Sustainability encompasses three broad dimensions: the health and wellbeing of residents; the attractiveness and amenity of the city; and the state of the environment and the local response to climate change.',
    shortDescription: 'Aims to improve safety, social cohesion and health in our cities. The Government also aims to improve air quality, access to green space and active transport, while acting to reduce carbon emissions.',
    heroIndicatorId: 'accessToGreenSpace',
    overviewIndicatorIds: [
      'accessToGreenSpace',
    ],
    subCategories: [
      {
        name: 'Environment',
        highlightColorLight: 'LIVEABILITY_040',
        highlightColorDark: 'LIVEABILITY_600',
        iconId: 'liveabilityEnvironment',
        summaryIndicatorIds: [
          'accessToPublicTransport',
          'grossParklandArea',
          'greenhouseGasEmissions',
        ],
        charts: [
          {
            name: 'Access to green space',
            indicatorIds: [
              'accessToGreenSpace',
            ],
          },
          {
            name: 'Gross parkland area',
            indicatorIds: [
              'grossParklandArea',
            ],
          },
          {
            name: 'Air pollution, more than 10 parts per million',
            indicatorIds: [
              'airPollutionPm10',
            ],
          },
          {
            name: 'Air pollution, less than 2.5 parts per million',
            indicatorIds: [
              'airPollutionPm2point5',
            ],
          },
          {
            name: 'Climate emissions',
            indicatorIds: [
              'greenhouseGasEmissions',
            ],
          },
          {
            name: 'Energy efficiency of buildings',
            indicatorIds: [
              'energyEfficiencyOfBuildings',
            ],
          },
          {
            name: 'Access to public transport',
            indicatorIds: [
              'accessToPublicTransport',
            ],
          },
        ],
      },
      {
        name: 'Liveability',
        highlightColorLight: 'LIVEABILITY_060',
        highlightColorDark: 'LIVEABILITY_700',
        iconId: 'liveabilityLiveability',
        summaryIndicatorIds: [
          'volunteeringRate',
          // 'perceivedSafety',
          'adultObesity',
        ],
        charts: [
          {
            name: 'Volunteering',
            indicatorIds: [
              'volunteeringRate',
            ],
          },
        ],
      },
      {
        name: 'Public safety',
        highlightColorLight: 'LIVEABILITY_080',
        highlightColorDark: 'LIVEABILITY_800',
        iconId: 'liveabilityPublicSafety',
        summaryIndicatorIds: [
          // 'perceivedSafety',
          'homicideRate',
          'crisisSupport',
        ],
        charts: [
          {
            name: 'Homicide rate',
            indicatorIds: [
              'homicideRate',
            ],
          },
          // {
          //   name: 'Perceived safety',
          //   indicatorIds: [
          //     'perceivedSafety',
          //   ],
          // },
          {
            name: 'Support in times of crisis',
            indicatorIds: [
              'crisisSupport',
            ],
          },
        ],
      },
      {
        name: 'Wellbeing',
        highlightColorLight: 'LIVEABILITY_100',
        highlightColorDark: 'LIVEABILITY_900',
        iconId: 'liveabilityLifeAndDeath',
        summaryIndicatorIds: [
          'adultObesity',
          'suicideRate',
        ],
        charts: [
          {
            name: 'Adult obesity rate',
            indicatorIds: [
              'adultObesity',
            ],
          },
          {
            name: 'Suicide rate',
            indicatorIds: [
              'suicideRate',
            ],
          },
        ],
      },
    ],
  },
  {
    id: CATEGORY_IDS.INNOVATION,
    colorName: COLOR_NAMES.INNOVATION,
    iconId: 'innovationInnovation',
    name: 'Innovation and Digital Opportunities',
    navName: 'Innovation',
    description: 'Innovation and Digital Opportunities encompasses three broad dimensions: city productivity; innovation and entrepreneurship; and access to public data',
    shortDescription: 'Aims to harness the productive potential of information and communications technologies & the digital economy, and to make data publicly available where practical.',
    heroIndicatorId: 'newBusinessEntrants',
    overviewIndicatorIds: [
      'newBusinessEntrants',
    ],
    subCategories: [
      {
        name: 'Innovation',
        highlightColorLight: 'INNOVATION_040',
        highlightColorDark: 'INNOVATION_600',
        iconId: 'innovationInnovation',
        summaryIndicatorIds: [
          'householdsWithBroadband',
          'patentApplications',
        ],
        charts: [
          {
            name: 'Households with broadband',
            indicatorIds: [
              'householdsWithBroadband',
            ],
          },
          {
            name: 'Patent applications',
            indicatorIds: [
              'patentApplications',
            ],
          },
        ],
      },
      {
        name: 'Digital business',
        highlightColorLight: 'INNOVATION_060',
        highlightColorDark: 'INNOVATION_700',
        iconId: 'innovationDigital',
        summaryIndicatorIds: [
          'newBusinessEntrants',
          'knowledgeWorkersRatio',
          'linkedInConnectivityLocal',
        ],
        charts: [
          {
            name: 'Knowledge workers ratio',
            indicatorIds: [
              'knowledgeWorkersRatio',
            ],
          },
          {
            name: 'New business entrants and exits',
            indicatorIds: [
              'newBusinessEntrants',
              'newBusinessExits',
            ],
          },
          {
            name: 'LinkedIn connectivity',
            stacked: true,
            indicatorIds: [
              'linkedInConnectivityLocal',
              'linkedInConnectivityRestOfNation',
              'linkedInConnectivityInternational',
            ],
          },
        ],
      },
    ],
  },
  {
    id: CATEGORY_IDS.PLANNING,
    colorName: COLOR_NAMES.PLANNING,
    iconId: 'planningLocalGovernment',
    name: 'Planning',
    description: 'Governance, Planning and Regulation encompasses land use planning in cities and its administration, as well as how effectively local governance and regulation support economic, social and environmental outcomes.',
    shortDescription: 'Aims to deliver coordinated and integrated policy, planning and investment across all levels of government.',
    heroIndicatorId: 'population',
    overviewIndicatorIds: [],
    subCategories: [
      {
        name: 'Planning',
        highlightColorLight: 'PLANNING_040',
        highlightColorDark: 'PLANNING_500',
        iconId: 'planningLocalGovernment',
        summaryIndicatorIds: [
          'indigenousPopulation',
          'growthRate',
          'population10yr',
        ],
        charts: [
          {
            name: 'Total population',
            indicatorIds: [
              'population',
            ],
          },
          {
            name: 'Population growth',
            indicatorIds: [
              'growthRate',
              'population10yr',
            ],
          },
          {
            name: 'Indigenous population',
            indicatorIds: [
              'indigenousPopulation',
            ],
          },
          {
            name: 'Population density',
            indicatorIds: [
              'populationDensity',
            ],
          },
          {
            name: 'Age dependency ratio',
            stacked: true,
            indicatorIds: [
              'dependencyRatio14OrYounger',
              'dependencyRatio15To64',
              'dependencyRatio65OrOlder',
            ],
          },
          {
            name: 'Dependency, not of working age',
            indicatorIds: [
              'dependencyRatioNotWorkingAge',
            ],
          },
          {
            name: 'Dependency ratio median age',
            indicatorIds: [
              'dependencyRatioMedianAge',
            ],
          },
          {
            name: 'Disability rate',
            indicatorIds: [
              'disabilityRate',
            ],
          },
        ],
      },
      {
        name: 'Local government',
        highlightColorLight: 'PLANNING_060',
        highlightColorDark: 'PLANNING_600',
        iconId: 'planningLocalGovernment',
        summaryIndicatorIds: [
          'dispersion',
        ],
        charts: [
          {
            name: 'Local government dispersion',
            indicatorIds: [
              'dispersion',
            ],
          },
        ],
      },
    ],
  },
];
