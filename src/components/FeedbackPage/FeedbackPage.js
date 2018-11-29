import React from 'react';
import PageWrapper from '../PageWrapper/PageWrapper';
import {
  LINKS,
  ELEMENT_IDS,
} from '../../constants';
import { rememberVisitToFeedbackPage } from '../../helpers/userBehaviour';
import style from './FeedbackPage.scss';

const FeedbackPage = () => {
  rememberVisitToFeedbackPage();

  return (
    <PageWrapper onFeedbackPage>
      <div className={style.feedbackWrapper}>
        <div className={style.container}>
          <h1
            id={ELEMENT_IDS.INITIAL_FOCUS_POINT_ON_PAGE}
            className={style.title}
          >
            Please give feedback
          </h1>

          <p className={style.paragraph}>
            The National Cities Performance Framework Dashboard is a working prototype,
            and we value your feedback and suggestions.
          </p>

          <iframe
            className={style.surveyFrame}
            title="feedback"
            allowTransparency="true"
            src={LINKS.FEEDBACK_SURVEY_EMBED}
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default FeedbackPage;
