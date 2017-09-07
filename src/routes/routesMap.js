
const routesMap = {
  projects: '/projects',
    projectsOverview: '/projects/overview',
    projectsRisk: '/projects/risk',
    projectsBenefit: '/projects/benefit',
    projectsInvestmentFocus: '/projects/investment-focus',
  //cbs: '/cbs',
    //cbsOverview: '/cbs/overview',
    //cbsRisk: '/cbs/risk',
    //cbsBenefit: '/cbs/benefit',
    //cbsInvestmentFocus: '/cbs/investment-focus',
  portfolios: '/portfolios',
    portfolio: '/portfolios/:portfolioId',
    portfolioAgency: '/portfolios/:portfolioId/agencies/:agencyId',
    portfolioAgencyProject: '/portfolios/:portfolioId/agencies/:agencyId/projects/:projectId',
    // portfolioAgencyCbs: '/portfolios/:portfolioId/agencies/:agencyId/cbs/:cbsId',
};

export default routesMap;


export const getProjectsOverviewUrl = () => {
  return routesMap.projectsOverview;
};

export const getProjectsRiskUrl = () => {
  return routesMap.projectsRisk;
};

export const getProjectsBenefitUrl = () => {
  return routesMap.projectsBenefit;
};

export const getProjectsInvestmentFocusUrl = () => {
  return routesMap.projectsInvestmentFocus;
};

export const getPortfoliosUrl = () => {
  return routesMap.portfolios;
};

export const getPortfolioUrl = (portfolioId) => {
  return routesMap.portfolio.replace(':portfolioId', portfolioId);
};

export const getPortfolioAgencyUrl = (portfolioId, agencyId) => {
  return routesMap.portfolioAgency
    .replace(':portfolioId', portfolioId)
    .replace(':agencyId', agencyId);
};

export const getPortfolioAgencyProjectUrl = (portfolioId, agencyId, projectId) => {
  return routesMap.portfolioAgencyProject
    .replace(':portfolioId', portfolioId)
    .replace(':agencyId', agencyId)
    .replace(':projectId', projectId);
};


export const matchesPortfolioRoute = (portfolioId, pathname) => {
  const portfolioUrl = getPortfolioUrl(portfolioId);
  return pathname.indexOf(portfolioUrl) >= 0;
};


