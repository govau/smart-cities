import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../PageWrapper/PageWrapper';
import CategoryOverviews from '../../CategoryOverviews/CategoryOverviews';
import Icon from '../../Icon/Icon';
import { LINKS } from '../../../constants';
import taylorAngus from './taylorAngus.png';
import COLORS from '../../../style/_colors.scss';
import style from './AllCitiesOverview.scss';

const AllCitiesOverview = props => (
  <PageWrapper>
    <div className={style.heroWrapper}>
      <p className={style.heroText}>
        Creating the foundations for success across
        all <span className={style.heroTextCityCount}>{props.cities.length}</span> cities
      </p>
    </div>

    <div className={style.infoWrapper}>
      <div className={style.infoContainer}>
        <div className={style.infoTextWrapper}>
          <h1 className={style.infoTitle}>About</h1>

          <p className={style.infoBodyText}>
            The Australian Government is committed to the continual improvement of our cities.
            Governments need to track and compare cities’ performance in order to
            make the best policy and investment decisions for Australia’s future.
          </p>

          <p className={style.infoBodyText}>
            <a
              className={style.cpnLink}
              href={LINKS.CITIES_PERFORMANCE_NETWORK}
              target="_blank"
              rel="noopener"
            >
              The National Cities Performance Framework
            </a> will support greater awareness and understanding of Australia’s cities
            among policy makers and interested Australians.
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
          The National Cities Performance Framework is designed to measure how well
          our cities are performing against the Australian Government’s 6 Smart Cities
          policy priorities areas:
        </p>
      </div>

      <Icon
        className={style.subInfoIcon}
        icon="city"
        size={120}
        color={COLORS.PRIMARY_600}
      />
    </div>

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
