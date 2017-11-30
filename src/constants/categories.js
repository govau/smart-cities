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
    name: 'Cities context',
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
            name: 'Annual population growth rate',
            axisTitle: '',
            description: 'This shows the percentage change in the level of the population on the preceding year, and the average annual percentage change over the past ten years.\n\nSource: ABS - Regional Population Growth',
            indicatorIds: [
              'growthRate',
              'population10yr',
            ],
          },
          {
            name: 'Proportion of population that is Indigenous',
            axisTitle: '',
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
            name: 'Dependency ratio',
            axisTitle: '',
            description: 'This shows the number of persons of non-working age (0-14 and 65+) per person of working age (15-64) \n\nSource: ABS - Regional Population Growth',
            indicatorIds: [
              'dependencyRatioNotWorkingAge',
            ],
          },
          {
            name: 'Median age',
            axisTitle: 'Years',
            description: 'This shows the median age. \n\nSource: ABS - Regional Population Growth',
            indicatorIds: [
              'dependencyRatioMedianAge',
            ],
          },
          {
            name: 'Proportion of population with disability',
            axisTitle: '',
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
            name: 'Average persons per dwelling',
            axisTitle: '',
            description: 'This shows the average number of people per occupied dwelling.\n\nSource: ABS - Census 2016',
            indicatorIds: [
              'householdSize',
            ],
          },
          {
            name: 'Housing tenure',
            axisTitle: 'Share',
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
            name: 'Share of households in lowest income quintile',
            axisTitle: '',
            description: 'This shows the share of households in bottom 20% of the national household income distribution.\n\nSource: ABS - Census 2016',
            indicatorIds: [
              'shareInBottomIncomeQuintile',
            ],
          },
          {
            name: 'Index of Relative Socio-economic Disadvantage',
            axisTitle: '',
            description: 'This shows an index of relative socio-economic disadvantage. A low score indicates relatively greater disadvantage.\n\nSource: ABS - Census 2011',
            indicatorIds: [
              'socioEconomicIndex',
            ],
          },
          {
            name: 'Languages other than English spoken at home',
            axisTitle: 'Share of households',
            description: 'This shows the proportion of residents who speak a language other than English at home. \n\nSource: ABS Census 2016',
            indicatorIds: [
              'languagesOtherThanEnglish',
            ],
          },
        ],
      },
      {
        name: 'Jobs & skills',
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
            axisTitle: 'Percentage of employment',
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
    name: 'Jobs & skills',
    description: 'The jobs & skills performance indicators seek to measure employment, education and training outcomes. The indicators will help all levels of government, industry and the community to boost employment through a better understanding of education, skills and industry development needs.',
    shortDescription: 'The jobs & skills performance indicators seek to measure employment, education and training outcomes.',
    heroIndicatorId: 'unemploymentRateYouth',
    overviewIndicatorIds: [
      'employmentGrowth',
      'unemploymentRateYouth',
    ],
    subCategories: [
      {
        name: 'Labour force',
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
            axisTitle: '',
            description: 'This shows the average youth unemployment rate for 12 months. \n\nSource: ABS Labour Force',
            indicatorIds: [
              'unemploymentRateYouth',
            ],
          },
          {
            name: 'Indigenous unemployment rate',
            axisTitle: '',
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
            axisTitle: '',
            description: 'This shows the percentage change in the level of employment in the current year compared to the previous year. \n\nSource: ABS Labour Force',
            indicatorIds: [
              'employmentGrowth',
            ],
          },
          {
            name: 'Industry sector share of employment',
            axisTitle: 'Percentage of employment',
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
    description: 'The housing performance indicators seek to measure housing supply and affordability. The indicators will help all levels of government, industry and the community to develop policies to deliver more affordable housing that is located near jobs, services and transport connections.',
    shortDescription: 'The housing performance indicators seek to measure housing supply and affordability.',
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
            axisTitle: 'Units per 100k people',
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
            axisTitle: '$/m²',
            description: 'This shows the average cost per square metre of constructing a new detached house in a city. \n\nSource: Rawlinsons Guide to Construction Costs',
            indicatorIds: [
              'housingConstructionCosts',
            ],
          },
          {
            name: 'Proportion of households under mortgage stress',
            axisTitle: '',
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
            axisTitle: '',
            description: 'This shows the ratio of the median dwelling price to median annual household income. \n\nSource: Corelogic ',
            indicatorIds: [
              'dwellingPriceToIncomeRatio',
            ],
          },
          {
            name: 'Population change per residential building approval',
            axisTitle: '',
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
            name: 'Average persons per dwelling',
            axisTitle: '',
            description: 'This shows the average number of people per occupied dwelling. \n\nSource: ABS - Census 2016',
            indicatorIds: [
              'householdSize',
            ],
          },
          {
            name: 'Homeless per 100k people',
            axisTitle: '',
            description: 'This shows the number of homeless people per 100,000 people. \n\nSource: ABS Census 2011',
            indicatorIds: [
              'homelessnessRate',
            ],
          },
          {
            name: 'Proportion of households under rent stress',
            axisTitle: '',
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
            axisTitle: 'Share',
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
    name: 'Infrastructure & investment',
    navName: 'Infrastructure',
    description: 'The infrastructure & investment performance indicators seek to measure infrastructure and investment needs in our cities. The indicators will help all levels of government, industry and the community to improve transport options, reduce travel times and increase economic growth.',
    shortDescription: 'The infrastructure & investment performance indicators seek to measure infrastructure and investment needs in our cities.',
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
          'publicJourneys',
          'activeJourneys',
          'peakDelay',
        ],
        charts: [
          {
            name: 'Jobs accessible by car within 30 minutes',
            axisTitle: '',
            description: 'This shows the share of jobs in a city that can be reached by car in a commute of 30 minutes or less during the morning peak. \n\nSource: SGS Economics and Planning ',
            max: 1,
            indicatorIds: [
              'jobsCar',
            ],
          },
          {
            name: 'Proportion of journeys to work by public transport',
            axisTitle: '',
            description: 'This shows the proportion of journeys to work that are taken by public transport. \n\nSource: ABS Census 2016 ',
            indicatorIds: [
              'publicJourneys',
            ],
          },
          {
            name: 'Proportion of population that walk or cycle to work',
            axisTitle: '',
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
    name: 'Liveability & sustainability',
    navName: 'Liveability',
    description: 'The liveability & sustainability performance indicators can help all levels of government, industry and the community to better target policies aimed at promoting safety, social cohesion and human health and improving the quality of the local environment.',
    shortDescription: 'The liveability & sustainability performance indicators are aimed at promoting safety, social cohesion and human health and improving the quality of the local environment.',
    heroIndicatorId: 'accessToGreenSpace',
    overviewIndicatorIds: [
      'accessToGreenSpace',
    ],
    subCategories: [
      {
        name: 'Sustainability',
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
            name: 'Dwellings with access to greenspace',
            axisTitle: '',
            description: 'This shows the share of dwellings in a city that are located within 400 metres of green space. \n\nSource: ABS - Australian Statistical Geography Standard',
            max: 1,
            indicatorIds: [
              'accessToGreenSpace',
            ],
          },
          {
            name: 'Percentage of area that is greenspace',
            axisTitle: '',
            description: 'This shows the proportion of land area in a city that is defined as green space. \n\nSource: ABS - Australian Statistical Geography Standard',
            indicatorIds: [
              'grossParklandArea',
            ],
          },
          {
            name: 'Air pollution particles smaller than PM10',
            axisTitle: 'Per cubic metre',
            description: 'This shows the average amount of particulate matter in a city’s air per cubic metre, measured over the course of a year for particles that are less than 10 microns in diameter. \n\nSource: World Health Organisation',
            indicatorIds: [
              'airPollutionPm10',
            ],
          },
          {
            name: 'Air pollution particles smaller than PM2.5',
            axisTitle: 'Per cubic metre',
            description: 'This shows the average amount of particulate matter in a city’s air per cubic metre, measured over the course of a year for particles that are less than 2.5 microns in diameter. \n\nSource: World Health Organisation',
            indicatorIds: [
              'airPollutionPm2point5',
            ],
          },
          {
            name: 'Greenhouse gas emissions',
            axisTitle: 'Tonnes of greenhouse gas emissions per capita per year',
            description: 'This shows the estimated per-capita amount of greenhouse gases emitted in a year, based on Scope 1 emissions, which are direct greenhouse emissions, and Scope 2 emissions, which are indirect greenhouse gas emissions from the generation of electricity. \n\nSource: National Greenhouse Gas Inventory',
            indicatorIds: [
              'greenhouseGasEmissions1',
              'greenhouseGasEmissions2',
            ],
          },
          {
            name: 'Energy efficiency of buildings',
            axisTitle: 'Average energy efficiency rating of commercial buildings',
            description: 'This shows the average National Australian Built Environment Rating System (NABERS) score for rated office buildings in the city, weighted by rated floor space. \n\nCities with fewer than 10 rated buildings are Albury Wodonga, Ballarat, Bendigo, Cairns, Geelong, Launceston, Mackay, Toowoomba, Townsville, Western Sydney and Sunshine Coast. \n\nSource: National Australian Built Environment Rating System',
            indicatorIds: [
              'energyEfficiencyOfBuildings',
            ],
          },
          {
            name: 'Dwellings with access to public transport',
            axisTitle: '',
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
            axisTitle: '',
            description: 'This shows the share of people aged 15 years and older who volunteered their time, services or skills to a club, organisation or association in the past twelve months. \n\nSource: ABS Census 2016',
            indicatorIds: [
              'volunteeringRate',
            ],
          },
          {
            name: 'Languages other than English spoken at home',
            axisTitle: 'Share of households',
            description: 'This shows the proportion of residents who speak a language other than English at home. \n\nSource: ABS Census 2016',
            indicatorIds: [
              'languagesOtherThanEnglish',
            ],
          },
          {
            name: 'Index of Relative Socio-economic Disadvantage',
            axisTitle: '',
            description: 'This shows an index of relative socio-economic disadvantage. A low score indicates relatively greater disadvantage.\n\nSource: ABS - Census 2011',
            indicatorIds: [
              'socioEconomicIndex',
            ],
          },
          {
            name: 'Share of households in lowest income quintile',
            axisTitle: '',
            description: 'This shows the share of households in bottom 20% of the national household income distribution.\n\nSource: ABS - Census 2016',
            indicatorIds: [
              'shareInBottomIncomeQuintile',
            ],
          },
        ],
      },
      {
        name: 'Safety & crisis support',
        highlightColorLight: 'LIVEABILITY_080',
        highlightColorDark: 'LIVEABILITY_800',
        iconId: 'liveabilityPublicSafety',
        summaryIndicatorIds: [
          'perceivedSafety',
          'crisisSupport',
        ],
        charts: [
          {
            name: 'Adults that feel safe after dark in their local area',
            axisTitle: '% of population aged 18 and over',
            description: 'The share of people aged 18 years and over who report that they feel safe or very safe walking alone in their local area after dark. \n\nSource: PHIDU – Social Health Atlas of Australia',
            indicatorIds: [
              'perceivedSafety',
            ],
          },
          {
            name: 'Percentage of population able to get crisis support',
            axisTitle: 'Percentage of population able to get crisis support',
            max: 1,
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
            name: 'Proportion of adults who are obese',
            axisTitle: '',
            description: 'This shows the share of people aged 18 and over with a body mass index (BMI) greater than 30. \n\nSource: PHIDU – Social Health Atlas of Australia',
            indicatorIds: [
              'adultObesity',
            ],
          },
          {
            name: 'Suicides per 100k people',
            axisTitle: '',
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
    name: 'Innovation & digital opportunities',
    navName: 'Innovation',
    description: 'The innovation & digital opportunities performance indicators seek to measure innovation and entrepreneurship. The indicators will help all levels of government, industry and the community to increase productivity growth and develop new knowledge industries and the digital economy.',
    shortDescription: 'The innovation & digital opportunities performance indicators seek to measure innovation and entrepreneurship.',
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
            name: 'Business entry and exit rate',
            axisTitle: '',
            description: 'This shows the business entry and exit rates: the number of new businesses that started actively trading on the business register over the past year as a share of the total number of registered businesses at the start of the year. \n\nSource: ABS Data by Region',
            indicatorIds: [
              'newBusinessEntrants',
              'newBusinessExits',
            ],
          },
          {
            name: 'Households with broadband',
            axisTitle: '',
            description: 'This shows the share of households in a city with an active broadband connection, defined as an access speed of 256 kilobits per second or faster. \n\nSource: ABS Census 2016',
            indicatorIds: [
              'householdsWithBroadband',
            ],
          },
          {
            name: 'Patent applications per 100k people',
            axisTitle: '',
            description: 'This shows the number of patent applications by people resident in a city per 100,000 people per year. \n\nSource: ABS Data by Region',
            indicatorIds: [
              'patentApplications',
            ],
          },
          {
            name: 'Trademark applications per 100k people',
            axisTitle: '',
            description: 'This shows the number of trademark applications by people resident in a city per 100,000 people per year. \n\nSource: ABS Data by Region',
            indicatorIds: [
              'trademarkApplications',
            ],
          },
        ],
      },
      {
        name: 'Digital opportunities',
        highlightColorLight: 'INNOVATION_060',
        highlightColorDark: 'INNOVATION_700',
        iconId: 'innovationDigital',
        summaryIndicatorIds: [
          'knowledgeWorkersRatio',
          'linkedInConnectivityLocal',
        ],
        charts: [
          {
            name: 'Workers in knowledge intensive services',
            axisTitle: 'Percentage of employment',
            description: 'This shows the share of employed persons that work in the top three knowledge-intensive service industries. \n\nSource: ABS Labour Force',
            indicatorIds: [
              'knowledgeWorkersRatio',
            ],
          },
          {
            name: 'LinkedIn contacts by location',
            axisTitle: '',
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
    description: 'The governance, planning and regulation performance indicators seek to measure how effectively planning, governance and regulation support economic, social and environmental outcomes.',
    shortDescription: 'The governance, planning and regulation performance indicators seek to measure how effectively planning, governance and regulation support economic, social and environmental outcomes.',
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
            name: 'Annual population growth rate',
            axisTitle: '',
            description: 'This shows the percentage change in the level of the population on the preceding year, and the average annual percentage change over the past ten years.\n\nSource: ABS - Regional Population Growth',
            indicatorIds: [
              'growthRate',
              'population10yr',
            ],
          },
          {
            name: 'Proportion of population that is Indigenous',
            axisTitle: '',
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
            name: 'Dependency ratio',
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
            name: 'Proportion of population with disability',
            axisTitle: '',
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
            description: 'This shows the number of local government areas per 100 000 persons. \n\nSource: ABS - Regional Population Growth ',
            indicatorIds: [
              'dispersion',
            ],
          },
        ],
      },
    ],
  },
];
