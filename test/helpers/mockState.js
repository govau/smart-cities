
import merge from 'lodash/merge';


import initialState from './../../src/redux/initialState';

import assessment_collectionsState from './../../public/__mocks__/assessment_collections.json';
import portfoliosState from './../../public/__mocks__/portfolios.json';
import agenciesState from './../../public/__mocks__/agencies.json';
import business_categoriesState from './../../public/__mocks__/business_categories.json';
import projectsState from './../../public/__mocks__/projects.json';
import project_assessmentsState from './../../public/__mocks__/project_assessments.json';
import benefitsState from './../../public/__mocks__/benefits.json';
import benefit_assessmentsState from './../../public/__mocks__/benefit_assessments.json';
import risksState from './../../public/__mocks__/risks.json';
import risk_assessmentsState from './../../public/__mocks__/risk_assessments.json';


export default merge({}, initialState, {
  assessmentCollections: assessment_collectionsState,
  portfolios: portfoliosState,
  agencies: agenciesState,
  businessCategories: business_categoriesState,
  projects: projectsState,
  projectAssessments: project_assessmentsState,
  benefits: benefitsState,
  benefitAssessments: benefit_assessmentsState,
  risks: risksState,
  riskAssessments: risk_assessmentsState,
});
