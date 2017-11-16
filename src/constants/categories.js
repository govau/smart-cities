/* eslint-disable max-len */
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
    colorName: COLOR_NAMES.PRIMARY,
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
        colorName: COLOR_NAMES.PLANNING,
        iconId: 'planningPlanning',
        summaryIndicatorIds: [
          'indigenousPopulation',
          'growthRate',
          'population10yr',
        ],
        charts: [
          {
            name: 'Population',
            axisTitle: '',
            description: 'This shows the population size.\n\nSource: ABS - Regional Population Growth',
            indicatorIds: [
              'population',
            ],
          },
          {
            name: 'Annual population growth',
            axisTitle: 'Growth rate',
            description: 'This shows the percentage change in the level of the population on the preceding year, and the average annual percentage change over the past ten years.\n\nSource: ABS - Regional Population Growth',
            indicatorIds: [
              'growthRate',
              'population10yr',
            ],
          },
          {
            name: 'Proportion of population that is Indigenous',
            axisTitle: 'Indigenous status, percentage of total population',
            description: 'This shows the proportion of the population that identifies as Aboriginal or Torres Strait Islander.\n\nSource: ABS - Census 2016',
            indicatorIds: [
              'indigenousPopulation',
            ],
          },
          {
            name: 'Population density',
            axisTitle: 'Persons per square kilometre',
            description: 'This shows the number of persons per square kilometre. \n\nSource: ABS - Regional Population Growth',
            indicatorIds: [
              'populationDensity',
            ],
          },
          {
            name: 'Population breakdown by age',
            axisTitle: 'Share of the population',
            description: 'This shows the share of population aged 0 to 14, 15 to 64, and 65 and over. \n\nSource: ABS - Regional Population Growth',
            stacked: true,
            indicatorIds: [
              'dependencyRatio14OrYounger',
              'dependencyRatio15To64',
              'dependencyRatio65OrOlder',
            ],
          },
          {
            name: 'Population share not of working age',
            axisTitle: '',
            description: 'This shows the number of persons of non-working age (0-14 and 65+) per person of working age (15-64) \n\nSource: ABS - Regional Population Growth',
            indicatorIds: [
              'dependencyRatioNotWorkingAge',
            ],
          },
          {
            name: 'Median age',
            axisTitle: '',
            description: 'This shows the median age. \n\nSource: ABS - Regional Population Growth',
            indicatorIds: [
              'dependencyRatioMedianAge',
            ],
          },
          {
            name: 'Proportion of population with a disability',
            axisTitle: 'Population share with disability',
            description: 'This shows the proportion of the population that self identifies as having disability. \n\nSource: ABS - Disability, Ageing and Carers',
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
        colorName: COLOR_NAMES.HOUSING,
        iconId: 'housingHousingAffordability',
        summaryIndicatorIds: [
          'tenureRatioOwnedOutright',
          'tenureRatioMortgage',
          'tenureRatioRented',
        ],
        charts: [
          {
            name: 'Dwelling type breakdown',
            axisTitle: 'Share of dwellings',
            description: 'This shows the share of dwellings that are detached houses, semi detached, apartments, or other dwellings. \n\nSource: ABS Census 2016',
            stacked: true,
            indicatorIds: [
              'dwellingApartment',
              'dwellingSemi',
              'dwellingHouse',
              'dwellingOther',
            ],
          },
          {
            name: 'Persons per dwelling',
            axisTitle: '',
            description: 'This shows the average number of people per occupied dwelling.\n\nSource: ABS - Census 2016',
            indicatorIds: [
              'householdSize',
            ],
          },
          {
            name: 'Housing tenure',
            axisTitle: 'Occupied share',
            description: 'This shows the share of occupied private residential dwellings that are owned outright by the occupier, owned with a mortgage, are rented, or other. \n\nSource: ABS Census 2016',
            stacked: true,
            indicatorIds: [
              'tenureRatioOwnedOutright',
              'tenureRatioMortgage',
              'tenureRatioRented',
              'tenureRatioOther',
            ],
          },
          {
            name: 'Median dwelling price',
            axisTitle: '',
            description: 'This shows the median price over 12 months for detached and non-detached dwellings.\n\nSource: CoreLogic ',
            indicatorIds: [
              'medianHousePrice',
              'medianUnitPrice',
            ],
          },
        ],
      },
      {
        name: 'Liveability',
        highlightColorLight: 'LIVEABILITY_040',
        highlightColorDark: 'LIVEABILITY_500',
        colorName: COLOR_NAMES.LIVEABILITY,
        iconId: 'liveabilityLiveability',
        summaryIndicatorIds: [
          'lifeExpectancy',
          'shareInBottomIncomeQuintile',
          'socioEconomicIndex',
        ],
        charts: [
          {
            name: 'Life expectancy at birth',
            axisTitle: '',
            description: 'This shows the number of years a person born today is expected to live.\n\nSource: ABS - Life Tables, States, Territories and Australia',
            min: 70,
            max: 90,
            indicatorIds: [
              'lifeExpectancy',
            ],
          },
          {
            name: 'Households in lowest household income quintile',
            axisTitle: 'Share in bottom household income quintile',
            description: 'This shows the share of households in bottom 20% of the national household income distribution.\n\nSource: ABS - Census 2016',
            indicatorIds: [
              'shareInBottomIncomeQuintile',
            ],
          },
          {
            name: 'Index of relative socio-economic disadvantage',
            axisTitle: 'Socio-economic indexes for areas',
            description: 'This shows an index of relative socio-economic disadvantage. A low score indicates relatively greater disadvantage.\n\nSource: ABS - Census 2011',
            indicatorIds: [
              'socioEconomicIndex',
            ],
          },
          {
            name: 'Languages spoken other than English',
            axisTitle: 'Language other than English spoken at home',
            description: 'This shows the proportion of residents who speak a language other than English at home. \n\nSource: ABS Census 2016',
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
        colorName: COLOR_NAMES.JOBS,
        iconId: 'jobsEmployment',
        summaryIndicatorIds: [
          'goodsProducingSector',
          'marketServices',
          'nonMarketServices',
        ],
        charts: [
          {
            name: 'Industry sector share of employment',
            axisTitle: 'Proportion of employed persons',
            description: 'This shows the proportion of employed persons that work in goods producing, market services, and non-market services industries.\n\nSource: ABS - Labour Force',
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
            name: 'Unemployment rate',
            axisTitle: '',
            description: 'This shows the average unemployment rate for 12 months for all persons. \n\nSource: ABS Labour Force',
            indicatorIds: [
              'unemploymentRateGeneral',
            ],
          },
          {
            name: 'Youth unemployment rate',
            axisTitle: 'Average youth unemployment rate',
            description: 'This shows the average youth unemployment rate for 12 months. \n\nSource: ABS Labour Force',
            indicatorIds: [
              'unemploymentRateYouth',
            ],
          },
          {
            name: 'Indigenous unemployment rate',
            axisTitle: 'Average indigenous unemployment rate',
            description: 'This shows the average indigenous unemployment rate for 12 months. \n\nSource: ABS Labour Force',
            indicatorIds: [
              'unemploymentRateIndigenous',
            ],
          },
          {
            name: 'Participation rate',
            axisTitle: '',
            description: 'This shows the share of the civilian population in the labour force. \n\nSource: ABS - Labour Force',
            indicatorIds: [
              'participationRateGeneral',
            ],
          },
          {
            name: 'Participation rate by gender',
            axisTitle: '',
            description: 'This shows the share of the male and female civilian populations in the labour force. \n\nSource: ABS Labour Force',
            indicatorIds: [
              'participationRateFemale',
              'participationRateMale',
            ],
          },
          {
            name: 'Annual employment growth',
            axisTitle: 'Annual growth in number of jobs',
            description: 'This shows the percentage change in the level of employment in the current year compared to the previous year. \n\nSource: ABS Labour Force',
            indicatorIds: [
              'employmentGrowth',
            ],
          },
          {
            name: 'Industry sector share of employment',
            axisTitle: 'Proportion of employed persons',
            description: 'This shows the proportion of employed persons that work in goods producing, market services, and non-market services industries.\n\nSource: ABS - Labour Force',
            stacked: true,
            indicatorIds: [
              'goodsProducingSector',
              'marketServices',
              'nonMarketServices',
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
            name: 'Completed year 12',
            axisTitle: '',
            description: 'This shows the proportion of a city’s population that have completed year 12. \n\nSource: ABS Census 2016',
            indicatorIds: [
              'educationalAttainmentYr12',
            ],
          },
          {
            name: 'Completed Certificate 3,4 or Diploma',
            axisTitle: '',
            description: 'This shows the proportion of a city’s population that have completed certificate Level III qualifications or higher. \n\nSource: ABS Census 2016',
            indicatorIds: [
              'educationalAttainmentCertificate',
            ],
          },
          {
            name: 'Completed bachelor degree or higher',
            axisTitle: '',
            description: 'This shows the proportion of a city’s population that have completed a bachelor degree or higher. \n\nSource: ABS Census 2016',
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
          'mortgageStress',
          'medianHousePrice',
          'medianUnitPrice',
        ],
        charts: [
          {
            name: 'Public and community housing units',
            axisTitle: 'units per 100,000 persons',
            description: 'This shows the number of public and community housing units per 100,000 people. \n\nSource: ABS Census 2016',
            indicatorIds: [
              'publicHousingUnits',
            ],
          },
          {
            name: 'Median annual household income',
            axisTitle: '',
            description: 'This shows the median annual household income.\n\nSource: ABS - Census 2016',
            indicatorIds: [
              'householdIncome',
            ],
          },
          {
            name: 'Average housing construction costs',
            axisTitle: 'Housing construction cost, $/m²',
            description: 'This shows the average cost per square metre of constructing a new detached house in a city. \n\nSource: Rawlinsons Guide to Construction Costs',
            indicatorIds: [
              'housingConstructionCosts',
            ],
          },
          {
            name: 'Households in mortgage stress',
            axisTitle: 'Proportion of households under mortgage stress',
            description: 'This shows the proportion of occupied households for which mortgage payments make up 30 per cent or more of household income. \n\nSource: ABS Census 2016',
            indicatorIds: [
              'mortgageStress',
            ],
          },
          {
            name: 'Median dwelling price',
            axisTitle: '',
            description: 'This shows the median price over 12 months for detached and non-detached dwellings.\n\nSource: CoreLogic ',
            indicatorIds: [
              'medianHousePrice',
              'medianUnitPrice',
            ],
          },
          {
            name: 'Dwelling price to household income ratio',
            axisTitle: 'Ratio',
            description: 'This shows the ratio of the median dwelling price to median annual household income. \n\nSource: Corelogic ',
            indicatorIds: [
              'dwellingPriceToIncomeRatio',
            ],
          },
          {
            name: 'Population change per residential building approval',
            axisTitle: 'Residential building approvals per annual population change',
            description: 'The ratio of annual population change to annual residential building approvals, calculated as a five-year average \n\nSource: ABS - Building Approvals 2017, ABS - Regional Population Growth 2016',
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
            name: 'Persons per dwelling',
            axisTitle: 'Number of people',
            description: 'This shows the average number of people per occupied dwelling. \n\nSource: ABS - Census 2016',
            indicatorIds: [
              'householdSize',
            ],
          },
          {
            name: 'Homeless per 100k people',
            axisTitle: 'Homelessness per 100,000 persons',
            description: 'This shows the number of homeless people per 100,000 people. \n\nSource: ABS Census 2011',
            indicatorIds: [
              'homelessnessRate',
            ],
          },
          {
            name: 'Households in rent stress',
            axisTitle: 'Proportion of households under rent stress',
            description: 'This shows the proportion of occupied households for which rent payments make up 30 per cent or more of household income. \n\nSource: ABS Census 2016',
            indicatorIds: [
              'rentStress',
            ],
          },
          {
            name: 'Dwelling type breakdown',
            axisTitle: 'Share of dwellings',
            description: 'This shows the share of dwellings that are detached houses, semi detached, apartments, or other dwellings. \n\nSource: ABS Census 2016',
            stacked: true,
            indicatorIds: [
              'dwellingApartment',
              'dwellingSemi',
              'dwellingHouse',
              'dwellingOther',
            ],
          },
          {
            name: 'Housing tenure',
            axisTitle: 'Occupied share',
            description: 'This shows the share of occupied private residential dwellings that are owned outright by the occupier, owned with a mortgage, are rented, or other. \n\nSource: ABS Census 2016',
            stacked: true,
            indicatorIds: [
              'tenureRatioOwnedOutright',
              'tenureRatioMortgage',
              'tenureRatioRented',
              'tenureRatioOther',
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
            name: 'Jobs accessible by car within 30 minutes',
            axisTitle: 'Proportion of jobs accessible within 30 minutes by car',
            description: 'This shows the share of jobs in a city that can be reached by car in a commute of 30 minutes or less during the morning peak. \n\nSource: SGS Economics and Planning ',
            max: 1,
            indicatorIds: [
              'jobsCar',
            ],
          },
          {
            name: 'Public transport use',
            axisTitle: 'Proportion of journeys to work by public transport',
            description: 'This shows the proportion of journeys to work that are taken by public transport. \n\nSource: ABS Census 2016 ',
            indicatorIds: [
              'publicJourneys',
            ],
          },
          {
            name: 'Proportion of population that walk or cycle to work',
            axisTitle: 'Proportion of journeys to work by active transport',
            description: 'This shows the proportion of journeys to work that are taken by active transport (walking or cycling). \n\nSource: ABS Census 2016',
            indicatorIds: [
              'activeJourneys',
            ],
          },
          {
            name: 'Peak travel delay',
            axisTitle: 'Percentage increase in car trip duration at peak time',
            description: 'This shows the percentage increase in the duration of a car trip made during the busiest traffic periods (7am to 10am and 4pm to 7pm) compared with when there is no congestion. \n\nSource: TomTom Australia',
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
          'greenhouseGasEmissions1',
        ],
        charts: [
          {
            name: 'Dwellings with access to parkland greenspace',
            axisTitle: 'Percentage of dwellings with access to green space',
            description: 'This shows the share of dwellings in a city that are located within 400 metres of green space. \n\nSource: ABS - Australian Statistical Geography Standard',
            indicatorIds: [
              'accessToGreenSpace',
            ],
          },
          {
            name: 'Proportion of parkland',
            axisTitle: 'Percentage of gross land area that is parkland',
            description: 'This shows the proportion of land area in a city that is defined as green space. \n\nSource: ABS - Australian Statistical Geography Standard',
            indicatorIds: [
              'grossParklandArea',
            ],
          },
          {
            name: 'Air pollution greater than PM10',
            axisTitle: 'Particle pollution greater than PM10',
            description: 'This shows the average amount of particulate matter in a city’s air per cubic metre, measured over the course of a year for particles that are less than 10 microns in diameter. \n\nSource: World Health Organisation',
            indicatorIds: [
              'airPollutionPm10',
            ],
          },
          {
            name: 'Air pollution less than PM2.5',
            axisTitle: 'Particle pollution less than PM2.5',
            description: 'This shows the average amount of particulate matter in a city’s air per cubic metre, measured over the course of a year for particles that are less than 2.5 microns in diameter. \n\nSource: World Health Organisation',
            indicatorIds: [
              'airPollutionPm2point5',
            ],
          },
          {
            name: 'Greenhouse gas emissions',
            axisTitle: 'Tonnes of greenhouse gas emissions per capita per year',
            description: 'This shows the estimated per-capita amount of greenhouse gases emitted in a year, based on Scope 1 and Scope 2 emissions. \n\nSource: National Greenhouse Gas Inventory',
            indicatorIds: [
              'greenhouseGasEmissions1',
              'greenhouseGasEmissions2',
            ],
          },
          {
            name: 'Energy efficiency of buildings',
            axisTitle: 'Average energy efficiency rating of commercial buildings',
            description: 'This shows the average National Australian Built Environment Rating System (NABERS) score for rated office buildings in the city, weighted by rated floor space. *Cities with fewer than 10 rated buildings are Albury Wodonga, Ballarat, Bendigo, Cairns, Geelong, Launceston, Mackay, Toowoomba, Townsville, Western Sydney and Sunshine Coast. \n\nSource: National Australian Built Environment Rating System',
            indicatorIds: [
              'energyEfficiencyOfBuildings',
            ],
          },
          {
            name: 'Access to public transport',
            axisTitle: 'Percentage dwellings within 400m of public transport',
            description: 'This shows the proportion of dwellings within 400 metres of a frequently serviced public transport stop – one with a scheduled service every 30 minutes from 7am to 7pm on a normal weekday. \n\nSource: Royal Melbourne Institute of Technology',
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
          'perceivedSafety',
          'adultObesity',
        ],
        charts: [
          {
            name: 'Life expectancy at birth',
            axisTitle: 'Life expectancy in years',
            description: 'This shows the number of years a person born today is expected to live.\n\nSource: ABS - Life Tables, States, Territories and Australia',
            min: 70,
            max: 90,
            indicatorIds: [
              'lifeExpectancy',
            ],
          },
          {
            name: 'Proportion of people that volunteer',
            axisTitle: 'Percentage of population over 15 years who volunteer',
            description: 'This shows the share of people aged 15 years and older who volunteered their time, services or skills to a club, organisation or association in the past twelve months. \n\nSource: ABS Census 2016',
            indicatorIds: [
              'volunteeringRate',
            ],
          },
          {
            name: 'Languages spoken other than English',
            axisTitle: 'Language other than English spoken at home',
            description: 'This shows the proportion of residents who speak a language other than English at home. \n\nSource: ABS Census 2016',
            indicatorIds: [
              'languagesOtherThanEnglish',
            ],
          },
          {
            name: 'Index of relative socio-economic disadvantage',
            axisTitle: 'Socio-economic indexes for areas',
            description: 'This shows an index of relative socio-economic disadvantage. A low score indicates relatively greater disadvantage.\n\nSource: ABS - Census 2011',
            indicatorIds: [
              'socioEconomicIndex',
            ],
          },
          {
            name: 'Households in lowest household income quintile',
            axisTitle: 'Share in bottom household income quintile',
            description: 'This shows the share of households in bottom 20% of the national household income distribution.\n\nSource: ABS - Census 2016',
            indicatorIds: [
              'shareInBottomIncomeQuintile',
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
          'perceivedSafety',
          'crisisSupport',
        ],
        charts: [
          {
            name: 'Perceived safety',
            axisTitle: '% of population',
            description: 'The share of people aged 18 years and over who report that they feel safe or very safe walking alone in their local area after dark. \n\nSource: PHIDU – Social Health Atlas of Australia',
            indicatorIds: [
              'perceivedSafety',
            ],
          },
          {
            name: 'Percentage of population able to get crisis support',
            axisTitle: 'Percentage of population able to get crisis support',
            description: 'This shows the share of people that stated in a survey that they feel there is someone outside their household who could be asked for support in a time of crisis. \n\nSource: PHIDU – Social Health Atlas of Australia',
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
            axisTitle: 'Proportion of adults who are obese',
            description: 'This shows the share of people aged 18 and over with a body mass index (BMI) greater than 30. \n\nSource: PHIDU – Social Health Atlas of Australia',
            indicatorIds: [
              'adultObesity',
            ],
          },
          {
            name: 'Suicides per 100k people',
            axisTitle: 'Suicides per 100k people',
            description: 'This shows the number of suicides in a year per 100,000 people, calculated over the period 2010 to 2014. \n\nSource: PHIDU – Social Health Atlas of Australia',
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
          'trademarkApplications',
        ],
        charts: [
          {
            name: 'Households with broadband',
            axisTitle: 'Percentage of households with broadband',
            description: 'This shows the share of households in a city with an active broadband connection, defined as an access speed of 256 kilobits per second or faster. \n\nSource: ABS Census 2016',
            indicatorIds: [
              'householdsWithBroadband',
            ],
          },
          {
            name: 'Patent applications per 100k people',
            axisTitle: 'Patent applications per 100,000 persons',
            description: 'This shows the number of patent applications by people resident in a city per 100,000 people per year. \n\nSource: ABS Data by Region',
            indicatorIds: [
              'patentApplications',
            ],
          },
          {
            name: 'Trademark applications',
            axisTitle: 'Trademark applications per 100,000 persons',
            description: 'This shows the number of trademark applications by people resident in a city per 100,000 people per year. \n\nSource: ABS Data by Region',
            indicatorIds: [
              'trademarkApplications',
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
            name: 'Workers in knowlesdge intensive services',
            axisTitle: 'Percentage of employment as knowledge workers',
            description: 'This shows the share of employed persons that work in the top three knowledge-intensive service industries. \n\nSource: ABS Labour Force',
            indicatorIds: [
              'knowledgeWorkersRatio',
            ],
          },
          {
            name: 'Business entry and exit rate',
            axisTitle: '',
            description: 'This shows the business entry and exit rates: the number of new businesses that started actively trading on the business register over the past year as a share of the total number of registered businesses at the start of the year. \n\nSource: ABS Data by Region',
            indicatorIds: [
              'newBusinessEntrants',
              'newBusinessExits',
            ],
          },
          {
            name: 'LinkedIn contacts by location',
            axisTitle: 'Average share',
            description: 'This shows the average share of LinkedIn account holder contacts that are located in the same city, other parts of Australia or overseas. \n\nSource: LinkedIn',
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
    iconId: 'planningPlanning',
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
        iconId: 'planningPlanning',
        summaryIndicatorIds: [
          'indigenousPopulation',
          'growthRate',
          'population10yr',
        ],
        charts: [
          {
            name: 'Population',
            axisTitle: 'Population',
            description: 'This shows the population size.\n\nSource: ABS - Regional Population Growth',
            indicatorIds: [
              'population',
            ],
          },
          {
            name: 'Annual population growth',
            axisTitle: 'Growth rate',
            description: 'This shows the percentage change in the level of the population on the preceding year, and the average annual percentage change over the past ten years.\n\nSource: ABS - Regional Population Growth',
            indicatorIds: [
              'growthRate',
              'population10yr',
            ],
          },
          {
            name: 'Proportion of population that is Indigenous',
            axisTitle: 'Indigenous status, percentage of total population',
            description: 'This shows the proportion of the population that identifies as Aboriginal or Torres Strait Islander.\n\nSource: ABS - Census 2016',
            indicatorIds: [
              'indigenousPopulation',
            ],
          },
          {
            name: 'Population density',
            axisTitle: 'Persons per square kilometre',
            description: 'This shows the number of persons per square kilometre. \n\nSource: ABS - Regional Population Growth',
            indicatorIds: [
              'populationDensity',
            ],
          },
          {
            name: 'Age dependency ratio',
            axisTitle: 'Share of the population',
            description: 'This shows the share of population aged 0 to 14, 15 to 64, and 65 and over. \n\nSource: ABS - Regional Population Growth',
            stacked: true,
            indicatorIds: [
              'dependencyRatio14OrYounger',
              'dependencyRatio15To64',
              'dependencyRatio65OrOlder',
            ],
          },
          {
            name: 'Population share not of working age',
            description: 'This shows the number of persons of non-working age (0-14 and 65+) per person of working age (15-64) \n\nSource: ABS - Regional Population Growth',
            axisTitle: '',
            indicatorIds: [
              'dependencyRatioNotWorkingAge',
            ],
          },
          {
            name: 'Median age',
            axisTitle: 'Median age in years',
            description: 'This shows the median age. \n\nSource: ABS - Regional Population Growth',
            indicatorIds: [
              'dependencyRatioMedianAge',
            ],
          },
          {
            name: 'Proportion of population with a disability',
            axisTitle: 'Proportion of population with a disability',
            description: 'This shows the proportion of the population that self identifies as having disability. \n\nSource: ABS - Disability, Ageing and Carers',
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
            name: 'Local governments per 100k people',
            axisTitle: 'LGAs per 100,000 persons',
            description: 'This shows the number of Local Government Areas per 100 000 persons. \n\nSource: ABS - Regional Population Growth ',
            indicatorIds: [
              'dispersion',
            ],
          },
        ],
      },
    ],
  },
];
