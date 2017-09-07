
/* global it, describe, expect */
import expect from 'expect';

import routesMap, {
  getProjectsOverviewUrl,
  getProjectsRiskUrl,
  getProjectsBenefitUrl,
  getProjectsInvestmentFocusUrl,
  getPortfoliosUrl,
  getPortfolioUrl,
  getPortfolioAgencyUrl,
  getPortfolioAgencyProjectUrl,
  matchesPortfolioRoute,
} from './routesMap';


describe('(Helpers) urls - routesMap', () => {

  describe('getProjectsOverviewUrl', () => {
    it('should return correctly', () => {
      expect(getProjectsOverviewUrl()).toBe(routesMap.projectsOverview);
    });
  });

  describe('getProjectsRiskUrl', () => {
    it('should return correctly', () => {
      expect(getProjectsRiskUrl()).toBe(routesMap.projectsRisk);
    });
  });

  describe('getProjectsBenefitUrl', () => {
    it('should return correctly', () => {
      expect(getProjectsBenefitUrl()).toBe(routesMap.projectsBenefit);
    });
  });

  describe('getProjectsInvestmentFocusUrl', () => {
    it('should return correctly', () => {
      expect(getProjectsInvestmentFocusUrl()).toBe(routesMap.projectsInvestmentFocus);
    });
  });

  describe('getPortfoliosUrl', () => {
    it('should return correctly', () => {
      expect(getPortfoliosUrl()).toBe(routesMap.portfolios);
    });
  });

  describe('getPortfolioUrl', () => {
    it('should return correctly', () => {
      const mockPortfolioId = 1;
      const actual = getPortfolioUrl(mockPortfolioId);
      expect(actual).toNotBe(routesMap.portfolio);
      expect(actual.includes(':')).toBe(false)
    });
  });

  describe('getPortfolioAgencyUrl', () => {
    it('should render correctly when supplied correct params', () => {
      const mockPortfolioId = 1;
      const agencyId = 1;
      const actual = getPortfolioUrl(mockPortfolioId, agencyId);
      expect(actual).toNotBe(routesMap.portfolioAgency);
      expect(actual.includes(':')).toBe(false)
    });
  });

  describe('getPortfolioAgencyProjectUrl', () => {
    const mockPortfolioId = 1;
    const agencyId = 1;
    const projectId = 1;
    const actual = getPortfolioUrl(mockPortfolioId, agencyId, projectId);
    expect(actual).toNotBe(routesMap.portfolioAgencyProject);
    expect(actual.includes(':')).toBe(false)
  });

  describe('matchesPortfolioRoute', () => {

    it('should be true if i land on a portfolio page', () => {
      const actual = matchesPortfolioRoute(41, '/portfolios/41');
      expect(actual).toBe(true);
    });
    it('should be true if i land on a portfolio agency page', () => {
      const actual = matchesPortfolioRoute(41, '/portfolios/41/agencies/191');
      expect(actual).toBe(true);
    });
  })

});
