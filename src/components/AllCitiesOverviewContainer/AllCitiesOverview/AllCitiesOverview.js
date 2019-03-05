/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../PageWrapper/PageWrapper';
import CategoryOverviews from '../../CategoryOverviews/CategoryOverviews';
import Icon from '../../Icon/Icon';
import Link from '../../Link/Link';
import {
  ELEMENT_IDS,
  LINKS,
} from '../../../constants';
import smartCitiesLogo from './smart-cities-logo-white.svg';
import COLORS from '../../../style/_colors.scss';
import style from './AllCitiesOverview.scss';

const ncpLink = (
  <Link href={LINKS.CITIES_PERFORMANCE_NETWORK}>
    The National Cities Performance Framework
  </Link>
);

const smartCitiesLink = (
  <Link href={LINKS.SMART_CITIES_DPMC_LINK}>
    Smart Cities Plan
  </Link>
);

const AllCitiesOverview = props => (
  <PageWrapper>
    <div className={style.heroWrapper}>
      <div className={style.heroContainer}>
        <p className={style.heroText}>
          Tracking progress and performance across Australia’s largest cities
        </p>

        <img
          className={style.smartCitiesLogo}
          src={smartCitiesLogo}
          alt=""
        />
      </div>
    </div>

    <div className={style.subInfoWrapper}>
      <div className={style.subInfoContainer}>
        <h1
          id={ELEMENT_IDS.INITIAL_FOCUS_POINT_ON_PAGE}
          className={style.infoTitle}
        >
          Indicator Revision
        </h1>

        <p className={style.infoBodyText}>
          To keep the dashboard up-to-date, we've added more recent data on Australian cities. We've also changed the methods we use to calculate some of the indicators. So please be careful when interpreting any changes you notice.</p>
      </div>
    </div>

	 <div className={style.infoWrapper}>
      <div className={style.infoContainer}>
        <h1
          className={style.infoTitle}
        >
          About
        </h1>

        <p className={style.infoBodyText}>
          Australian cities have long been an important economic and social asset and will be
          more important than ever in the 21st century. Our cities provide great opportunities
          for innovation and productivity in the global knowledge-based economy and
          are recognised as great places to live, work and study.
        </p>

        <p className={style.infoBodyText}>
          The Australian Government is committed to the continual improvement of our
          cities. {ncpLink} will assist in this goal by providing data
          to help all levels of government, industry and the community to make the best
          policy and investment decisions for Australia’s future.
        </p>
      </div>
    </div>
 
    <div className={style.subInfoWrapper}>
      <div className={style.subInfoContainer}>
        <h1 className={style.infoTitle}>
          <span className={style.infoTitleHeavy}>Policy priorities</span> & Context
        </h1>

        <p className={style.subInfoBodyText}>
          There are 6 policy priorities to help achieve
          the objectives of the {smartCitiesLink}. The National Cities Performance
          Framework is designed to measure how well our cities are performing, using
          two types of indicators.
        </p>

        <dl className={style.legend}>
          <div className={style.legendRow}>
            <dt className={style.term}>
              <Icon
                className={style.icon}
                color={COLORS.GREY_600}
                icon="performanceIndicator"
                size={32}
              />
              Performance
            </dt>
            <dd className={style.definition}>
              Aspects that can be measured and tracked against policy priorities.
            </dd>
          </div>
          <div className={style.legendRow}>
            <dt className={style.term}>
              <Icon
                className={style.icon}
                color={COLORS.GREY_600}
                icon="contextualIndicator"
                size={32}
              />
              Context
            </dt>
            <dd className={style.definition}>
              Characteristics that help us understand what it’s
              like and why it functions the way it does.
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <CategoryOverviews cities={props.cities} />
  </PageWrapper>
);

AllCitiesOverview.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    indicators: PropTypes.object.isRequired,
  })).isRequired,
};

export default AllCitiesOverview;
