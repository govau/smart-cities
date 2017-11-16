import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../PageWrapper/PageWrapper';
import PageLegend from '../../PageLegend/PageLegend';
import CategoryOverviews from '../../CategoryOverviews/CategoryOverviews';
import Icon from '../../Icon/Icon';
import Link from '../../Link/Link';
import { LINKS } from '../../../constants';
import taylorAngus from './taylorAngus.png';
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
    Smart Cities
  </Link>
);

const AllCitiesOverview = props => (
  <PageWrapper>
    <div className={style.heroWrapper}>
      <div className={style.heroContainer}>
        <p className={style.heroText}>
          Measuring success and opportunities across Australia’s largest cities
        </p>

        <img
          className={style.smartCitiesLogo}
          src={smartCitiesLogo}
          alt=""
        />
      </div>
    </div>

    <div className={style.infoWrapper}>
      <div className={style.infoContainer}>
        <div className={style.infoTextWrapper}>
          <h1 className={style.infoTitle}>About</h1>

          <p className={style.infoBodyText}>
            Australian cities have long been an important economic and social asset and will be
            more important than ever in the 21ˢᵗ st century. Our cities provide great opportunities
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

        <figure className={style.ministerPhotoWrapper}>
          <div className={style.ministerPhotoClip}>
            <img
              className={style.ministerPhoto}
              src={taylorAngus}
              alt="The Honorable Angus Taylor MP"
            />
          </div>

          <figcaption>
            <p className={style.ministerTitle}>The Hon Angus Taylor MP</p>

            <p>Assistant Minister for Cities & Digital Transformation</p>
          </figcaption>
        </figure>
      </div>
    </div>

    <div className={style.subInfoContainer}>
      <div className={style.subInfoTextWrapper}>
        <h1 className={style.infoTitle}>Policy priorities & context</h1>

        <p className={style.subInfoBodyText}>
          The Australian Government has set out six {smartCitiesLink} policy priorities to help
          achieve the objectives of the Smart Cities Plan. The National Cities Performance
          Framework is designed to measure how well our cities are performing against
          all six Smart Cities policy priorities.
        </p>
      </div>

      <Icon
        className={style.subInfoIcon}
        icon="city"
        size={120}
        color={COLORS.PRIMARY_600}
      />
    </div>

    <PageLegend
      colorName="overview"
      isAllCitiesPage
    />

    <CategoryOverviews cities={props.cities} />
  </PageWrapper>
);

AllCitiesOverview.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    indices: PropTypes.object.isRequired,
  })).isRequired,
};

export default AllCitiesOverview;
