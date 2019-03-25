/* eslint linebreak-style: ['error', 'unix'] */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable array-bracket-spacing */
export default {
    population: {
        name: 'Population',
        format: '0.[00]a',
        contextual: true,
        lastUpdated: 'June 2017',
        source: 'total_population'
    },
    growthRate: {
        name: 'Average annual population growth rate',
        legendText: 'Annual growth',
        format: '0.[00]%',
        contextual: true,
        lastUpdated: 'June 2012 to 2017',
        source: 'population_growth'
    },
    indigenousPopulation: {
        name: 'Proportion of population that is Indigenous',
        format: '0.[00]%',
        contextual: true,
        lastUpdated: 'August 2016',
        source: 'indigenous_population'
    },
    householdSize: {
        name: 'Average persons per dwelling',
        format: '0.0[0]',
        contextual: true,
        lastUpdated: 'August 2016',
        source: 'household_size'
    },
    medianHousePrice: {
        name: 'Average house price',
        legendText: 'House',
        format: '$0,0.[00]a',
        contextual: true,
        lastUpdated: '2017',
        source: 'housing_price'
    },
    medianUnitPrice: {
        name: 'Average unit price',
        legendText: 'Unit',
        format: '$0,0.[00]a',
        contextual: true,
        lastUpdated: '2017',
        source: 'unit_price'
    },
    householdIncome: {
        name: 'Median annual household income',
        longDescription: 'This shows the median annual household income.\n\nSource: ABS - Census 2016',
        format: '$0,0.[0]a',
        contextual: true,
        lastUpdated: 'August 2016',
        source: 'household_income'
    },
    lifeExpectancy: {
        name: 'Life expectancy at birth',
        format: '0.0',
        cardSuffix: 'years',
        contextual: true,
        lastUpdated: '2014 to 2016',
        source: 'life_expectancy'
    },
    shareInBottomIncomeQuintile: {
        name: 'Share of households in lowest income quintile',
        format: '0.[0]%',
        contextual: true,
        lastUpdated: 'August 2016',
        source: 'income_quintile'
    },
    goodsProducingSector: {
        name: 'Share of employment in goods producing sector',
        legendText: 'Goods',
        format: '0.[0]%',
        contextual: true,
        lastUpdated: 'June 2017',
        source: 'sector_goods'
    },
    marketServices: {
        name: 'Share of employment in market services sector',
        legendText: 'Market services',
        format: '0.[0]%',
        contextual: true,
        lastUpdated: '2017',
        source: 'sector_market'
    },
    nonMarketServices: {
        name: 'Share of employment in non-market services sector',
        legendText: 'Non-market services',
        format: '0.[0]%',
        contextual: true,
        lastUpdated: '2017',
        source: 'sector_nonmarket'
    },
    participationRateGeneral: {
        name: 'Participation rate',
        format: '0.[0]%',
        contextual: false,
        lastUpdated: 'July 2017 to June 2018',
        source: 'participation'
    },
    educationalAttainmentYr12: {
        name: 'Completed year 12',
        format: '0.[0]%',
        contextual: false,
        lastUpdated: 'August 2016',
        source: 'education_year_12'
    },
    educationalAttainmentCertificate: {
        name: 'Completed Certificate 3, 4 or Diploma',
        format: '0.[0]%',
        contextual: false,
        lastUpdated: 'August 2016',
        source: 'education_certificate'
    },
    educationalAttainmentTertiary: {
        name: 'Completed bachelor degree or higher',
        format: '0.[0]%',
        contextual: false,
        lastUpdated: 'August 2016',
        source: 'education_bachelor'
    },
    dispersion: {
        name: 'Local governments per city',
        format: '0.[00]',
        contextual: false,
        lastUpdated: '2018',
        source: 'lg_fragmentation'
    },
    dwellingHouse: {
        name: 'Dwelling type ratio: house',
        legendText: 'House',
        format: '0.[0]%',
        contextual: true,
        lastUpdated: 'August 2016',
        source: 'dwelling_house'
    },
    dwellingSemi: {
        name: 'Dwelling type ratio: semi-detached',
        legendText: 'Semi-detached',
        format: '0.[0]%',
        contextual: true,
        lastUpdated: 'August 2016',
        source: 'dwelling_attached'
    },
    dwellingApartment: {
        name: 'Dwelling type ratio: flat or apartment',
        legendText: 'Flat / apartment',
        format: '0.[0]%',
        contextual: true,
        lastUpdated: 'August 2016',
        source: 'dwelling_apartment'
    },
    dwellingOther: {
        name: 'Dwelling type ratio: other',
        legendText: 'Other',
        format: '0.[0]%',
        contextual: true,
        lastUpdated: 'August 2016',
        source: 'dwelling_other'
    },
    dwellingPriceToIncomeRatio: {
        name: 'Dwelling price to household income ratio',
        format: '0.[00]',
        contextual: false,
        hideForCities: ['western-sydney'],
        lastUpdated: 'June 2018',
        source: 'house_price_to_income_ratio'
    },
    jobsCar: {
        name: 'Proportion of jobs accessible by car within 30 minutes',
        format: '0.[0]%',
        contextual: false,
        hideForCities: ['western-sydney'],
        lastUpdated: '2016-2018',
        source: 'jobs_accessible_proportion'
    },
    jobsNumberCar: {
        name: 'Number of jobs accessible by car within 30 minutes',
        format: '0,0',
        contextual: false,
        hideForCities: ['western-sydney'],
        lastUpdated: '2016-2018',
        source: 'jobs_accessible_number'
    },
    activeJourneys: {
        name: 'Proportion of journeys to work by active transport',
        format: '0.[00]%',
        contextual: false,
        lastUpdated: 'August 2016',
        source: 'active_transport'
    },
    publicJourneys: {
        name: 'Proportion of journeys to work by public transport',
        format: '0.[00]%',
        contextual: false,
        lastUpdated: 'August 2016',
        source: 'public_transport'
    },
    unemploymentRateGeneral: {
        name: 'Unemployment rate',
        format: '0.[00]%',
        contextual: false,
        lastUpdated: 'July 2017 to June 2018',
        source: 'unemployment'
    },
    unemploymentRateYouth: {
        name: 'Youth unemployment rate',
        format: '0.[00]%',
        contextual: false,
        lastUpdated: 'July 2016 to June 2018',
        source: 'youth_unemployment'
    },
    employmentGrowth: {
        name: 'Annual employment growth rate',
        format: '0.[00]%',
        contextual: false,
        lastUpdated: 'June 2013 to June 2018',
        source: 'employment_growth'
    },
    grossRegionalProduct: {
        name: 'Gross regional product',
        legendText: 'Gross regional product',
        format: '$0,0',
        contextual: false,
        lastUpdated: '2016 to 2017',
        source: 'gross_regional_product'
    },
    publicHousingUnits: {
        name: 'Public and community housing',
        format: '0.[0]%',
        contextual: false,
        lastUpdated: 'August 2016',
        source: 'public_housing'
    },
    homelessnessRate: {
        name: 'Homeless per 100k people',
        format: '0,0',
        contextual: false,
        lastUpdated: 'August 2016',
        source: 'homelessness'
    },
    housingConstructionCosts: {
        name: 'Average housing construction costs',
        format: '$0,0',
        contextual: false,
        hideForCities: ['western-sydney'],
        lastUpdated: '2018',
        source: 'housing_construction_costs'
    },
    rentStress: {
        name: 'Proportion of renters under rent stress',
        format: '0.[00]%',
        contextual: false,
        lastUpdated: 'August 2016',
        source: 'rent_stress'
    },
    mortgageStress: {
        name: 'Proportion of mortgagees under mortgage stress',
        format: '0.[00]%',
        contextual: false,
        lastUpdated: 'August 2016',
        source: 'mortgage_stress'
    },
    housingStress: {
        name: 'Proportion of households under housing stress',
        format: '0.[00]%',
        contextual: false,
        lastUpdated: 'August 2016',
        source: 'housing_stress'
    },
    residentialBuildingApprovalsGrowth: {
        name: 'Building approvals per 100k people',
        format: '0.[00]',
        contextual: false,
        lastUpdated: '2017',
        source: 'building_approvals'
    },
    peakDelay: {
        name: 'Peak travel delay',
        format: '0.[0]%',
        contextual: false,
        hideForCities: ['albury-wodonga', 'ballarat', 'bendigo', 'geelong', 'cairns', 'gold-coast-tweed-heads', 'mackay', 'sunshine-coast', 'toowoomba', 'townsville', 'launceston', 'greater-darwin', 'western-sydney'],
        lastUpdated: '2016',
        source: 'peak_travel_delay'
    },
    accessToPublicTransport: {
        name: 'Dwellings with access to public transport',
        format: '0.[0]%',
        contextual: false,
        hideForCities: ['albury-wodonga', 'mackay', 'toowoomba', 'launceston'],
        lastUpdated: '2018',
        source: 'public_transport_access'
    },
    greenhouseGasEmissions1: {
        name: 'Greenhouse gas emissions',
        legendText: 'Scope 1',
        format: '0.[00]',
        contextual: false,
        hideForCities: ['act', 'greater-darwin'],
        lastUpdated: '2016',
        source: 'greenhouse_gas'
    },
    accessToGreenSpace: {
        name: 'Dwellings with access to public open space',
        format: '0.[0]%',
        contextual: false,
        lastUpdated: '2018',
        source: 'access_to_open_space'
    },
    airPollutionPm2point5: {
        name: 'Air pollution particles smaller than PM2.5',
        format: '0.[00]',
        contextual: false,
        hideForCities: ['ballarat', 'bendigo', 'cairns', 'gold-coast-tweed-heads', 'sunshine-coast', 'toowoomba', 'western-sydney'],
        lastUpdated: '2016 and 2018',
        source: 'air_quality'
    },
    energyEfficiencyOfBuildings: {
        name: 'Office building energy efficiency rating',
        format: '0.[00]',
        contextual: false,
        hideForCities: ['ballarat', 'bendigo', 'mackay', 'launceston'],
        lastUpdated: '2018',
        source: 'office_energy_efficiency'
    },
    volunteeringRate: {
        name: 'Proportion of people that volunteer',
        format: '0.[0]%',
        contextual: false,
        lastUpdated: 'August 2016',
        source: 'volunteering'
    },
    perceivedSafety: {
        name: 'Adults that feel safe after dark in their local area',
        format: '0.[0]%',
        contextual: false,
        lastUpdated: '2014',
        source: 'safety'
    },
    adultObesity: {
        name: 'Proportion of adults who are obese',
        format: '0.[0]%',
        contextual: false,
        lastUpdated: '2014 to 2015',
        source: 'obesity'
    },
    crisisSupport: {
        name: 'Percentage of population able to get crisis support',
        format: '0.[0]%',
        contextual: false,
        lastUpdated: '2014',
        source: 'crisis_support'
    },
    suicideRate: {
        name: 'Suicides per 100k people',
        format: '0.[0]',
        contextual: false,
        lastUpdated: '2011 to 2015',
        source: 'suicide'
    },
    householdsWithBroadband: {
        name: 'Households with broadband',
        format: '0.[0]%',
        contextual: false,
        lastUpdated: 'August 2016',
        source: 'broadband_connections'
    },
    patentApplications: {
        name: 'Patent applications per 100k people',
        format: '0.[0]',
        contextual: false,
        lastUpdated: '2016',
        source: 'patent_application'
    },
    newBusinessEntrants: {
        name: 'Business entry',
        legendText: 'Entrants',
        format: '0.0[0]%',
        contextual: false,
        lastUpdated: '2017',
        source: 'new_business'
    },
    knowledgeWorkersRatio: {
        name: 'Workers in knowledge intensive services',
        format: '0.[0]%',
        contextual: false,
        lastUpdated: 'June 2018',
        source: 'knowledge_industries'
    },
    populationDensity: {
        name: 'Population density',
        format: '0,0',
        contextual: true,
        lastUpdated: 'June 2017',
        source: 'population_density'
    },
    dependencyRatio14OrYounger: {
        name: 'Dependency ratio: 14 or younger',
        legendText: '0-14',
        format: '0.[0]%',
        contextual: true,
        lastUpdated: 'June 2017',
        source: 'age_0_14'
    },
    dependencyRatio15To64: {
        name: 'Dependency ratio: 15-64',
        legendText: '15-64',
        format: '0.[0]%',
        contextual: true,
        lastUpdated: '2016',
        source: 'age_15_64'
    },
    dependencyRatio65OrOlder: {
        name: 'Dependency ratio: 65 or older',
        legendText: '65 or older',
        format: '0.[0]%',
        contextual: true,
        lastUpdated: '2016',
        source: 'age_65'
    },
    dependencyRatioMedianAge: {
        name: 'Median age',
        format: '0.[0]',
        cardSuffix: 'years',
        contextual: true,
        lastUpdated: 'June 2017',
        source: 'median_age'
    },
    disabilityRate: {
        name: 'Proportion of population with disability',
        format: '0.[00]%',
        contextual: true,
        lastUpdated: '2016',
        source: 'disability'
    },
    tenureRatioOwnedOutright: {
        name: 'Proportion of dwellings owned outright',
        legendText: 'Owned outright',
        format: '0.[0]%',
        contextual: true,
        lastUpdated: 'August 2016',
        source: 'tenure_owned'
    },
    tenureRatioMortgage: {
        name: 'Proportion of dwellings owned with a mortgage',
        legendText: 'Mortgage',
        format: '0.[0]%',
        contextual: true,
        lastUpdated: '2016',
        source: 'tenure_mortgage'
    },
    tenureRatioRented: {
        name: 'Proportion of dwellings rented',
        legendText: 'Rented',
        format: '0.[0]%',
        contextual: true,
        lastUpdated: '2016',
        source: 'tenure_rent'
    },
    tenureRatioOther: {
        name: 'Proportion of dwellings other',
        legendText: 'Other',
        format: '0.[0]%',
        contextual: true,
        lastUpdated: '2016',
        source: 'tenure_other'
    },
    languagesOtherThanEnglish: {
        name: 'Languages other than English spoken at home',
        format: '0.[0]%',
        contextual: true,
        lastUpdated: 'August 2016',
        source: 'non_english_speaking'
    }
};