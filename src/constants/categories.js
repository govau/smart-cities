/* eslint linebreak-style: ['error', 'unix'] */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable array-bracket-spacing */
export const CATEGORY_IDS = {
    OVERVIEW: 'overview',
    CONTEXT: 'context',
    JOBS: 'jobs',
    HOUSING: 'housing',
    INFRASTRUCTURE: 'infrastructure',
    LIVEABILITY: 'liveability',
    INNOVATION: 'innovation',
    PLANNING: 'planning'
};
export const CATEGORIES = [{
    id: 'context',
    colorName: 'primary',
    iconId: 'city',
    navName: 'Context',
    name: 'Context',
    description: 'Context indicators show the characteristics of a city that help us understand what it’s like and why it functions the way it does.',
    shortDescription: '<span>Characteristics of a city that help us understand what it’s like and why it functions the way it does, based on the measurement framework. <br /><br />This section is a collection of context indicators.</span>',
    allCitiesShortDescription: '<span>Characteristics of a city that help us understand what it’s like and why it functions the way it does, based on the measurement framework. <br /><br />This section is a collection of context indicators.</span>',
    heroIndicatorId: 'population',
    overviewIndicatorIds: ['growthRate', 'populationDensity'],
    subCategories: [{
        name: 'Planning',
        highlightColorLight: 'PLANNING_040',
        highlightColorDark: 'PLANNING_500',
        colorName: 'planning',
        iconId: 'planningPlanning',
        summaryIndicatorIds: ['indigenousPopulation', 'growthRate', 'populationDensity'],
        charts: [{
            name: 'Population',
            axisTitle: '',
            description: 'This shows the population size.\r\nSource: ABS - Regional Population Growth 2017-18',
            indicatorIds: ['population']
        }, {
            name: 'Average annual population growth rate',
            axisTitle: '',
            description: 'This shows the average annual percentage change in the level of the population over the preceding five years.\r\nSource: ABS - Regional Population Growth 2017-18',
            indicatorIds: ['growthRate']
        }, {
            name: 'Proportion of population that is Indigenous',
            axisTitle: 'Share of population',
            description: 'This shows the proportion of the population that identifies as Aboriginal or Torres Strait Islander.\r\nSource: ABS - Census 2016',
            indicatorIds: ['indigenousPopulation']
        }, {
            name: 'Population density',
            axisTitle: 'Persons per square kilometre',
            description: 'This is a population-weighted measure that measures the density at which the average city resident lives.\r\nSources:  ABS - Regional Population Growth, 2017-18 and ABS - Meshblock Counts, 2016/BITRE',
            indicatorIds: ['populationDensity']
        }, {
            name: 'Population breakdown by age',
            axisTitle: 'Share of the population',
            description: 'This shows the share of the population aged 0 to 14, 15 to 64 and 65 and over.\r\nSource: ABS - Regional Population Growth, 2016-17',
            stacked: true,
            indicatorIds: ['dependencyRatio14OrYounger', 'dependencyRatio15To64', 'dependencyRatio65OrOlder']
        }, {
            name: 'Median age',
            axisTitle: 'Years',
            description: 'This shows the median age of the city population.\r\nSource: ABS - Regional Population by Age and Sex, Australia 2017',
            indicatorIds: ['dependencyRatioMedianAge']
        }, {
            name: 'Proportion of population with disability',
            axisTitle: 'Share of population',
            description: 'This shows the proportion of the population that self identifies as having a disability.\r\nSource: PHIDU - Social Health Atlas of Australia',
            indicatorIds: ['disabilityRate']
        }]
    }, {
        name: 'Housing',
        highlightColorLight: 'HOUSING_040',
        highlightColorDark: 'HOUSING_500',
        colorName: 'housing',
        iconId: 'housingHousingAffordability',
        summaryIndicatorIds: ['tenureRatioOwnedOutright', 'tenureRatioMortgage', 'tenureRatioRented'],
        charts: [{
            name: 'Dwelling type breakdown',
            axisTitle: 'Share of dwellings',
            description: 'This shows the share of dwellings that are detached houses, semi detached, apartments, or other dwellings. \n\nSource: ABS - Census 2016',
            stacked: true,
            indicatorIds: ['dwellingApartment', 'dwellingSemi', 'dwellingHouse', 'dwellingOther']
        }, {
            name: 'Average persons per dwelling',
            axisTitle: '',
            description: 'This shows the average number of people per occupied dwelling.\r\nSource: ABS - Census 2016',
            indicatorIds: ['householdSize']
        }, {
            name: 'Housing tenure',
            axisTitle: 'Share of dwellings',
            description: 'This shows the share of occupied private residential dwellings that are owned outright by the occupier, owned with a mortgage, are rented, or other tenure types.\r\nSource: ABS - Census 2016',
            stacked: true,
            indicatorIds: ['tenureRatioOwnedOutright', 'tenureRatioMortgage', 'tenureRatioRented', 'tenureRatioOther']
        }, {
            name: 'Average dwelling price',
            axisTitle: '',
            description: 'This shows the average price over 12 months for units.\r\nSource: CoreLogic',
            indicatorIds: ['medianHousePrice', 'medianUnitPrice']
        }]
    }, {
        name: 'Liveability',
        highlightColorLight: 'LIVEABILITY_040',
        highlightColorDark: 'LIVEABILITY_500',
        colorName: 'liveability',
        iconId: 'liveabilityLiveability',
        summaryIndicatorIds: ['lifeExpectancy', 'shareInBottomIncomeQuintile', 'accessToGreenSpace'],
        charts: [{
            name: 'Life expectancy at birth',
            axisTitle: 'Life expectancy in years',
            description: 'This shows the number of years a person born today is expected to live.\r\nSource ABS - Life Tables, ABS - Deaths/BITRE',
            min: 70,
            max: 90,
            indicatorIds: ['lifeExpectancy']
        }, {
            name: 'Share of households in lowest income quintile',
            axisTitle: 'Share of households',
            description: 'This shows the share of households in the bottom 20 per cent of the national household income distribution.\r\nSource: ABS - Census 2016',
            indicatorIds: ['shareInBottomIncomeQuintile']
        }, {
            name: 'Dwellings with access to public open space',
            axisTitle: 'Share of dwellings',
            description: 'This shows the share of dwellings in a city that are located within 400 metres of public open space. \r\nSource: RMIT Centre for Urban Research',
            max: 1,
            indicatorIds: ['accessToGreenSpace']
        }]
    }, {
        name: 'Jobs & skills',
        highlightColorLight: 'JOBS_040',
        highlightColorDark: 'JOBS_500',
        colorName: 'jobs',
        iconId: 'jobsEmployment',
        summaryIndicatorIds: ['goodsProducingSector', 'marketServices', 'nonMarketServices'],
        charts: [{
            name: 'Industry sector share of employment',
            axisTitle: 'Percentage of employment',
            description: 'This shows the proportion of employed persons that work in goods producing, market services, and non-market services industries.\r\nSource: ABS - Labour Force/BITRE',
            stacked: true,
            indicatorIds: ['goodsProducingSector', 'marketServices', 'nonMarketServices']
        }]
    }]
}, {
    id: 'jobs',
    colorName: 'jobs',
    iconId: 'jobsEmployment',
    name: 'Jobs & skills',
    description: 'The jobs & skills performance indicators seek to measure employment, education and training outcomes. The indicators will help all levels of government, industry and the community to boost employment through a better understanding of education, skills and industry development needs.',
    shortDescription: 'The jobs & skills performance indicators seek to measure employment, education and training outcomes. The indicators will help all levels of government, industry and the community to boost employment through a better understanding of education, skills and industry development needs.',
    heroIndicatorId: 'unemploymentRateYouth',
    overviewIndicatorIds: ['employmentGrowth', 'unemploymentRateYouth'],
    subCategories: [{
        name: 'Labour force',
        highlightColorLight: 'JOBS_040',
        highlightColorDark: 'JOBS_600',
        iconId: 'jobsEmployment',
        summaryIndicatorIds: ['unemploymentRateGeneral', 'unemploymentRateIndigenous', 'employmentGrowth'],
        charts: [{
            name: 'Unemployment rate',
            axisTitle: '',
            description: 'This shows the average unemployment rate for 12 months for all persons.\r\nSource: ABS - Labour Force and Department Jobs and Small Business',
            indicatorIds: ['unemploymentRateGeneral']
        }, {
            name: 'Youth unemployment rate',
            axisTitle: '',
            description: 'This shows the average youth (15-24) unemployment rate for 24 months.\r\nSource: ABS - Labour Force/BITRE',
            indicatorIds: ['unemploymentRateYouth']
        }, {
            name: 'Indigenous unemployment rate',
            axisTitle: '',
            description: 'This shows the proportion of people identifying as Aboriginal or Torres Strait Islander who are seeking full-time or part-time work.\r\nSource: ABS - Census 2016',
            indicatorIds: ['unemploymentRateIndigenous']
        }, {
            name: 'Participation rate',
            axisTitle: '',
            description: 'This shows the share of the civilian population in the labour force.\r\nSource: ABS - Labour Force/BITRE',
            indicatorIds: ['participationRateGeneral']
        }, {
            name: 'Annual employment growth rate',
            axisTitle: '',
            description: 'This shows the average annual percentage change in the level of employment over the preceding five years.\r\nSource: ABS - Labour Force/BITRE',
            indicatorIds: ['employmentGrowth']
        }, {
            name: 'Industry sector share of employment',
            axisTitle: 'Percentage of employment',
            description: 'This shows the proportion of employed persons that work in goods producing, market services, and non-market services industries.\r\nSource: ABS - Labour Force/BITRE',
            stacked: true,
            indicatorIds: ['goodsProducingSector', 'marketServices', 'nonMarketServices']
        }, {
            name: 'Gross regional product',
            axisTitle: '',
            description: 'This shows the estimated Gross Regional Product per capita.\r\nSource: Department of Industry, Innovation and Science, Office of the Chief Economist/BITRE',
            indicatorIds: ['grossRegionalProduct']
        }]
    }, {
        name: 'Education',
        highlightColorLight: 'JOBS_060',
        highlightColorDark: 'JOBS_700',
        iconId: 'jobsEducation',
        summaryIndicatorIds: ['educationalAttainmentYr12'],
        charts: [{
            name: 'Completed year 12',
            axisTitle: 'Share of population',
            description: 'This shows the share of the population that has completed year 12.\r\nSource: ABS - Census 2016',
            indicatorIds: ['educationalAttainmentYr12']
        }, {
            name: 'Completed Certificate 3, 4 or Diploma',
            axisTitle: 'Share of population',
            description: 'This shows the share of the population with a Certificate 3, 4 or diploma.\r\nSource: ABS - Census 2016',
            indicatorIds: ['educationalAttainmentCertificate']
        }, {
            name: 'Completed bachelor degree or higher',
            axisTitle: 'Share of population',
            description: 'This shows the share of the population with a bachelor degree or higher qualification.\r\nSource: ABS - Census 2016',
            indicatorIds: ['educationalAttainmentTertiary']
        }]
    }]
}, {
    id: 'housing',
    colorName: 'housing',
    iconId: 'housingHousingAffordability',
    name: 'Housing',
    description: 'The housing performance indicators seek to measure housing supply and affordability. The indicators will help all levels of government, industry and the community to develop policies to deliver more affordable housing that is located near jobs, services and transport connections.',
    shortDescription: 'The housing performance indicators seek to measure housing supply and affordability.',
    heroIndicatorId: 'dwellingPriceToIncomeRatio',
    overviewIndicatorIds: ['dwellingPriceToIncomeRatio'],
    subCategories: [{
        name: 'Housing affordability',
        highlightColorLight: 'HOUSING_040',
        highlightColorDark: 'HOUSING_600',
        iconId: 'housingHousingAffordability',
        summaryIndicatorIds: ['mortgageStress', 'medianHousePrice'],
        charts: [{
            name: 'Public and community housing',
            axisTitle: 'Share of households',
            description: 'This shows the share of the housing stock that is public or community housing.\r\nSource: ABS - Census 2016',
            indicatorIds: ['publicHousingUnits']
        }, {
            name: 'Median annual household income',
            axisTitle: '',
            description: 'This shows the median annual household income.\r\nSource: ABS - Census 2016',
            indicatorIds: ['householdIncome']
        }, {
            name: 'Average housing construction costs',
            axisTitle: '$/m²',
            description: 'This shows the average cost per square metre of constructing a new detached house in a city.\r\nSource: Rawlinson Guide to Construction Costs',
            indicatorIds: ['housingConstructionCosts']
        }, {
            name: 'Proportion of households under mortgage stress',
            axisTitle: '',
            description: 'This shows the proportion of households for which mortgage payments makes up 30 per cent or more of household income.\r\nSource: ABS - Census 2016',
            indicatorIds: ['mortgageStress']
        }, {
            name: 'Average house price',
            axisTitle: '',
            description: 'This shows the average price over 12 months for detatched dwellings.\r\nSource: CoreLogic',
            indicatorIds: ['medianHousePrice']
        }, {
            name: 'Average unit price',
            axisTitle: '',
            description: 'This shows the average price over 12 months for units.\r\nSource: CoreLogic',
            indicatorIds: ['medianUnitPrice']
        }, {
            name: 'Dwelling price to household income ratio',
            axisTitle: '',
            description: 'This shows the ratio of the median dwelling price to the median annual household income.\r\nSource: Australian Property Monitors and ANU',
            indicatorIds: ['dwellingPriceToIncomeRatio']
        }, {
            name: 'Building approvals per 100k people',
            axisTitle: 'Approvals per 100k people',
            description: 'This shows the number of new residential dwellings approved for construction per 100,000 persons in the city.\r\nSource: ABS - Dwelling Approvals & Regional Population',
            indicatorIds: ['residentialBuildingApprovalsGrowth']
        }]
    }, {
        name: 'Living affordability',
        highlightColorLight: 'HOUSING_060',
        highlightColorDark: 'HOUSING_700',
        iconId: 'housingLivingAffordability',
        summaryIndicatorIds: ['rentStress', 'homelessnessRate', 'householdSize'],
        charts: [{
            name: 'Average persons per dwelling',
            axisTitle: '',
            description: 'This shows the average number of people per occupied dwelling.\r\nSource: ABS - Census 2016',
            indicatorIds: ['householdSize']
        }, {
            name: 'Homeless per 100k people',
            axisTitle: 'Per 100k people',
            description: 'This shows the number of homeless people per 100,000 people.\r\nSource ABS - Census 2016',
            indicatorIds: ['homelessnessRate']
        }, {
            name: 'Proportion of households under rent stress',
            axisTitle: '',
            description: 'This shows the proportion of households for which rent makes up 30 per cent or more of household income.\r\nSource: ABS - Census 2016',
            indicatorIds: ['rentStress']
        }, {
            name: 'Dwelling type breakdown',
            axisTitle: 'Share of dwellings',
            description: 'This shows the share of dwellings that are detached houses, semi detached, apartments, or other dwellings. \n\nSource: ABS - Census 2016',
            stacked: true,
            indicatorIds: ['dwellingApartment', 'dwellingSemi', 'dwellingHouse', 'dwellingOther']
        }, {
            name: 'Housing tenure',
            axisTitle: 'Share of dwellings',
            description: 'This shows the share of occupied private residential dwellings that are owned outright by the occupier, owned with a mortgage, are rented, or other tenure types.\r\nSource: ABS - Census 2016',
            stacked: true,
            indicatorIds: ['tenureRatioOwnedOutright', 'tenureRatioMortgage', 'tenureRatioRented', 'tenureRatioOther']
        }]
    }]
}, {
    id: 'infrastructure',
    colorName: 'infrastructure',
    iconId: 'infrastructureGettingToWork',
    name: 'Infrastructure & investment',
    navName: 'Infrastructure',
    description: 'The infrastructure & investment performance indicators seek to measure infrastructure and investment needs in our cities. The indicators will help all levels of government, industry and the community to improve transport options, reduce travel times and increase economic growth.',
    shortDescription: 'The infrastructure & investment performance indicators seek to measure infrastructure and investment needs in our cities.',
    heroIndicatorId: 'jobsCar',
    overviewIndicatorIds: ['jobsCar'],
    subCategories: [{
        name: 'Getting to work',
        highlightColorLight: 'INFRASTRUCTURE_040',
        highlightColorDark: 'INFRASTRUCTURE_600',
        iconId: 'infrastructureGettingToWork',
        summaryIndicatorIds: ['publicJourneys', 'activeJourneys', 'peakDelay'],
        charts: [{
            name: 'Proportion of jobs accessible by car within 30 minutes',
            axisTitle: '',
            description: 'This shows the share of jobs in a city that can be reached by car in a commute of 30 minutes or less during the morning peak. This indicator represents a city-wide average � commute times in different parts of a city are weighted by population size.\r\nSource: BITRE',
            max: 1,
            indicatorIds: ['jobsCar']
        }, {
            name: 'Number of jobs accessible by car within 30 minutes',
            axisTitle: '',
            description: 'This shows the number of jobs in a city that can be reached by car in a commute of 30 minutes or less during the morning peak. This indicator represents a city-wide average � commute times in different parts of a city are weighted by population size.\r\nSource: BITRE',
            indicatorIds: ['jobsNumberCar']
        }, {
            name: 'Peak travel delay',
            axisTitle: 'Percentage increase in car trip duration at peak time',
            description: 'This shows the percenatge increase in the duration of a car trip made during the busiest traffic periods (7am to 10am and 4pm to 7pm) compared with when there is no congestion.\r\nSource: TomTom Australia',
            indicatorIds: ['peakDelay']
        }, {
            name: 'Proportion of journeys to work by public transport',
            axisTitle: '',
            description: 'This shows the proportion of journeys to work that are taken by public transport.\r\nSource ABS - Census 2016',
            indicatorIds: ['publicJourneys']
        }, {
            name: 'Proportion of journeys to work by active transport',
            axisTitle: '',
            description: 'This shows the proportion of journeys to work that are taken by active transport (walking or cycling).\r\nSource ABS - Census 2016',
            indicatorIds: ['activeJourneys']
        }]
    }]
}, {
    id: 'liveability',
    colorName: 'liveability',
    iconId: 'liveabilityLiveability',
    name: 'Liveability & sustainability',
    navName: 'Liveability',
    description: 'The liveability & sustainability performance indicators can help all levels of government, industry and the community to better target policies aimed at promoting safety, social cohesion and human health and improving the quality of the local environment.',
    shortDescription: 'The liveability & sustainability performance indicators are aimed at promoting safety, social cohesion and human health and improving the quality of the local environment.',
    heroIndicatorId: 'accessToGreenSpace',
    overviewIndicatorIds: ['accessToGreenSpace'],
    subCategories: [{
        name: 'Sustainability',
        highlightColorLight: 'LIVEABILITY_040',
        highlightColorDark: 'LIVEABILITY_600',
        iconId: 'liveabilityEnvironment',
        summaryIndicatorIds: ['accessToPublicTransport', 'greenhouseGasEmissions1'],
        charts: [{
            name: 'Dwellings with access to public open space',
            axisTitle: 'Share of dwellings',
            description: 'This shows the share of dwellings in a city that are located within 400 metres of public open space. \r\nSource: RMIT Centre for Urban Research',
            max: 1,
            indicatorIds: ['accessToGreenSpace']
        }, {
            name: 'Air pollution particles smaller than PM2.5',
            axisTitle: 'Per cubic metre',
            description: 'The average amount of particulate matter in a city�s air per cubic metre, measured over the course of a year.\r\nSource: World Health Organisation',
            indicatorIds: ['airPollutionPm2point5']
        }, {
            name: 'Greenhouse gas emissions',
            axisTitle: 'Tonnes of greenhouse gas emissions per capita per year',
            description: 'This shows the estimated per-capita amount of greenhouse gases emitted in a year. It captures direct (scope 1) greenhouse emissions, excluding emissions from electricity generation, as well as indirect (scope 2) greenhouse gas emissions from the generation of electricity.                                                                                                                                    Source: BITRE/National Greenhouse Gas Inventory 2016',
            indicatorIds: ['greenhouseGasEmissions1']
        }, {
            name: 'Office building energy efficiency rating',
            axisTitle: '',
            description: 'This shows the average National Australian Built Environment Rating System (NABERS) score for rated office buildings in the city, weighted by floor space.\r\nSource: National Australian Built Environment Rating System',
            indicatorIds: ['energyEfficiencyOfBuildings']
        }, {
            name: 'Dwellings with access to public transport',
            axisTitle: 'Share of dwellings',
            description: 'This shows the share of dwellings in a city that are located within 400 metres of a regularly serviced public transport stop. \r\nSource: RMIT Centre for Urban Research',
            indicatorIds: ['accessToPublicTransport']
        }]
    }, {
        name: 'Liveability',
        highlightColorLight: 'LIVEABILITY_060',
        highlightColorDark: 'LIVEABILITY_700',
        iconId: 'liveabilityLiveability',
        summaryIndicatorIds: ['volunteeringRate', 'lifeExpectancy'],
        charts: [{
            name: 'Life expectancy at birth',
            axisTitle: 'Life expectancy in years',
            description: 'This shows the number of years a person born today is expected to live.\r\nSource ABS - Life Tables, ABS - Deaths/BITRE',
            min: 70,
            max: 90,
            indicatorIds: ['lifeExpectancy']
        }, {
            name: 'Proportion of people that volunteer',
            axisTitle: '% of population aged 15 and over',
            description: 'This shows the share of people aged 15 years and older who volunteered their time, services or skills to a club, organisation or association in the past twelve months.\r\nSource ABS - Census 2016',
            indicatorIds: ['volunteeringRate']
        }, {
            name: 'Languages other than English spoken at home',
            axisTitle: 'Share of households',
            description: 'This shows the proportion of residents who speak a language other than English at home.\r\nSource: ABS - Census 2016',
            indicatorIds: ['languagesOtherThanEnglish']
        }, {
            name: 'Share of households in lowest income quintile',
            axisTitle: 'Share of households',
            description: 'This shows the share of households in the bottom 20 per cent of the national household income distribution.\r\nSource: ABS - Census 2016',
            indicatorIds: ['shareInBottomIncomeQuintile']
        }]
    }, {
        name: 'Safety & crisis support',
        highlightColorLight: 'LIVEABILITY_080',
        highlightColorDark: 'LIVEABILITY_800',
        iconId: 'liveabilityPublicSafety',
        summaryIndicatorIds: ['perceivedSafety', 'crisisSupport'],
        charts: [{
            name: 'Adults that feel safe after dark in their local area',
            axisTitle: '% of population aged 18 and over',
            description: 'The share of people aged 18 years and over who report that they feel safe or very safe walking alone in their local area after dark.\r\nSource: PHIDU - Social Health Atlas of Australia',
            indicatorIds: ['perceivedSafety']
        }, {
            name: 'Percentage of population able to get crisis support',
            axisTitle: 'Share of population',
            max: 1,
            description: 'This shows the share of people that stated in a survey that they feel there is someone outside their household who could be asked for support in a time of crisis.\r\nSource: PHIDU - Social Health Atlas of Australia',
            indicatorIds: ['crisisSupport']
        }]
    }, {
        name: 'Wellbeing',
        highlightColorLight: 'LIVEABILITY_100',
        highlightColorDark: 'LIVEABILITY_900',
        iconId: 'liveabilityLifeAndDeath',
        summaryIndicatorIds: ['adultObesity', 'suicideRate'],
        charts: [{
            name: 'Proportion of adults who are obese',
            axisTitle: '% of population aged 18 and over',
            description: 'This shows the share of people aged 18 and over with a body mass index (BMI) greater than 30.\r\nSource: PHIDU - Social Health Atlas of Australia',
            indicatorIds: ['adultObesity']
        }, {
            name: 'Suicides per 100k people',
            axisTitle: 'Per 100k people',
            description: 'This shows the number of suicides in a year per 100,000 people, calculated over a five year period.\r\nSource: PHIDU - Social Health Atlas of Australia',
            indicatorIds: ['suicideRate']
        }]
    }]
}, {
    id: 'innovation',
    colorName: 'innovation',
    iconId: 'innovationInnovation',
    name: 'Innovation & digital opportunities',
    navName: 'Innovation',
    description: 'The innovation & digital opportunities performance indicators seek to measure innovation and entrepreneurship. The indicators will help all levels of government, industry and the community to increase productivity growth and develop new knowledge industries and the digital economy.',
    shortDescription: 'The innovation & digital opportunities performance indicators seek to measure innovation and entrepreneurship.',
    heroIndicatorId: 'newBusinessEntrants',
    overviewIndicatorIds: ['newBusinessEntrants'],
    subCategories: [{
        name: 'Innovation',
        highlightColorLight: 'INNOVATION_040',
        highlightColorDark: 'INNOVATION_600',
        iconId: 'innovationInnovation',
        summaryIndicatorIds: ['householdsWithBroadband', 'patentApplications'],
        charts: [{
            name: 'Business entry',
            axisTitle: '',
            description: 'This shows the proportion of businesses that are new.\r\nSource: ABS - Data by region',
            indicatorIds: ['newBusinessEntrants']
        }, {
            name: 'Households with broadband',
            axisTitle: 'Share of households',
            description: 'The share of households in a city with an active broadband connection, defined as an access speed of 256 kilobits per second or faster.\r\nSource: ABS - Census 2016',
            indicatorIds: ['householdsWithBroadband']
        }, {
            name: 'Patent applications per 100k people',
            axisTitle: 'Per 100k people',
            description: 'This shows the number of patent applications per 100,000 persons in the city.\r\nSource: Department of Industry and Innovation',
            indicatorIds: ['patentApplications']
        }]
    }, {
        name: 'Digital opportunities',
        highlightColorLight: 'INNOVATION_060',
        highlightColorDark: 'INNOVATION_700',
        iconId: 'innovationDigital',
        summaryIndicatorIds: ['knowledgeWorkersRatio'],
        charts: [{
            name: 'Workers in knowledge intensive services',
            axisTitle: 'Percentage of employment',
            description: 'This shows the share of employed prsons that work in the top three knowledge-intensive service industries; professional, scientific and technical services; information media and telecommunications; and financial and insurance services.\r\nSource: ABS - Labour Force/BITRE',
            indicatorIds: ['knowledgeWorkersRatio']
        }]
    }]
}, {
    id: 'planning',
    colorName: 'planning',
    iconId: 'planningPlanning',
    name: 'Governance, planning & regulation',
    navName: 'Planning',
    description: 'The governance, planning and regulation performance indicators seek to measure how effectively planning, governance and regulation support economic, social and environmental outcomes.',
    shortDescription: 'The governance, planning and regulation performance indicators seek to measure how effectively planning, governance and regulation support economic, social and environmental outcomes.',
    heroIndicatorId: 'population',
    overviewIndicatorIds: [],
    subCategories: [{
        name: 'Planning',
        highlightColorLight: 'PLANNING_040',
        highlightColorDark: 'PLANNING_500',
        iconId: 'planningPlanning',
        summaryIndicatorIds: ['indigenousPopulation', 'growthRate'],
        charts: [{
            name: 'Population',
            axisTitle: '',
            description: 'This shows the population size.\r\nSource: ABS - Regional Population Growth 2017-18',
            indicatorIds: ['population']
        }, {
            name: 'Average annual population growth rate',
            axisTitle: '',
            description: 'This shows the average annual percentage change in the level of the population over the preceding five years.\r\nSource: ABS - Regional Population Growth 2017-18',
            indicatorIds: ['growthRate']
        }, {
            name: 'Proportion of population that is Indigenous',
            axisTitle: 'Share of population',
            description: 'This shows the proportion of the population that identifies as Aboriginal or Torres Strait Islander.\r\nSource: ABS - Census 2016',
            indicatorIds: ['indigenousPopulation']
        }, {
            name: 'Population density',
            axisTitle: 'Persons per square kilometre',
            description: 'This is a population-weighted measure that measures the density at which the average city resident lives.\r\nSources:  ABS - Regional Population Growth, 2017-18 and ABS - Meshblock Counts, 2016/BITRE',
            indicatorIds: ['populationDensity']
        }, {
            name: 'Population breakdown by age',
            axisTitle: 'Share of the population',
            description: 'This shows the share of the population aged 0 to 14, 15 to 64 and 65 and over.\r\nSource: ABS - Regional Population Growth, 2016-17',
            stacked: true,
            indicatorIds: ['dependencyRatio14OrYounger', 'dependencyRatio15To64', 'dependencyRatio65OrOlder']
        }, {
            name: 'Median age',
            axisTitle: 'Years',
            description: 'This shows the median age of the city population.\r\nSource: ABS - Regional Population by Age and Sex, Australia 2017',
            indicatorIds: ['dependencyRatioMedianAge']
        }, {
            name: 'Proportion of population with disability',
            axisTitle: 'Share of population',
            description: 'This shows the proportion of the population that self identifies as having a disability.\r\nSource: PHIDU - Social Health Atlas of Australia',
            indicatorIds: ['disabilityRate']
        }]
    }, {
        name: 'Local government',
        highlightColorLight: 'PLANNING_060',
        highlightColorDark: 'PLANNING_600',
        iconId: 'planningLocalGovernment',
        summaryIndicatorIds: ['dispersion'],
        charts: [{
            name: 'Local governments per city',
            axisTitle: '',
            description: 'This shows the number of local governments in the city.\r\nSource: ABS - Australian Statistical Geography Standard 2018',
            indicatorIds: ['dispersion']
        }]
    }]
}];