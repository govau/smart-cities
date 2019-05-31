/* eslint-disable */
import React from 'react';
import PageWrapper from '../PageWrapper/PageWrapper';
import Link from '../Link/Link';
import {
  ELEMENT_IDS,
  LINKS,
} from '../../constants';
import style from './AdditionalInfoPage.scss';

const AdditionalInfoPage = () => (
  <PageWrapper>
    <section className={style.sectionWrapper}>
      <div className={style.sectionContainer}>
        <h1
          id={ELEMENT_IDS.ACCESSIBILITY}
          className={style.title}
        >
          Accessibility
        </h1>

        <p className={style.paragraph}>
          The National Cities Performance Framework Dashboard has been designed to
          meet the Australian Government standard established for web accessibility.
        </p>

        <p className={style.paragraph}>
          Our website aims to meet the Australian Government's web accessibility requirements,
          including meeting the World Wide Web
          Consortium's <Link href={LINKS.WCAG}>Web Content Accessibility
          Guidelines version 2.0 (WCAG 2.0)</Link> at level AA.
        </p>

        <p className={style.paragraph}>
          Providing our information to all users, including those with a disability, is
          important to us. If anything on this site is inaccessible to you, or you are
          experiencing problems accessing content for any reason,
          please <Link href={LINKS.CONTACT_US}>contact us</Link>.
        </p>
      </div>
    </section>

    <section className={style.sectionWrapper}>
      <div className={style.sectionContainer}>
        <h1
          id={ELEMENT_IDS.SECURITY}
          className={style.title}
        >
          Security of our websites
        </h1>

        <p className={style.paragraph}>
          We apply a range of security controls to protect our websites from unauthorised access.
          However, you should be aware that:
        </p>

        <ul>
          <li>
            the World Wide Web is an insecure public network
          </li>

          <li>
            there is a risk that your transactions may be seen,
            intercepted or modified by third parties
          </li>

          <li>
            downloadable files may contain computer viruses,
            disabling codes, worms or other devices or defects
          </li>
        </ul>

        <p className={style.paragraph}>
          The Commonwealth accepts no liability for any interference with or damage
          to your computer system, software or data occurring in connection with, or relating
          to, this website or its use.
        </p>

        <p className={style.paragraph}>
          You should take appropriate and adequate precautions to prevent damage to your
          computer system, software or data.
        </p>
      </div>
    </section>

    <section className={style.sectionWrapper}>
      <div className={style.sectionContainer}>
        <h1
          id={ELEMENT_IDS.PRIVACY_POLICY}
          className={style.title}
        >
          Privacy statement
        </h1>

        <p className={style.paragraph}>
          This privacy statement is
          about the National Cities Performance Framework Dashboard — this is an online service managed
          by the Department of Infrastructure, Transport, Cities and Regional Development. The department is located in Canberra, Australia.
        </p>

        <p className={style.paragraph}>
          The <Link href={LINKS.DTA_PRIVACY_POLICY}>department privacy policy</Link> describes how we handle your personal information.
        </p>

        <p className={style.paragraph}>
          We respect and protect the privacy of our users.
        </p>

        <p className={style.paragraph}>
          We are committed to meeting the highest standards when we collect, store,
          use and disclose your personal information.
        </p>

        <p className={style.paragraph}>
          This website is bound by the <Link href={LINKS.PRIVACY_ACT}>Commonwealth
          Privacy Act 1988</Link>, including the Australian Privacy Principles
          contained in the Privacy Act.
        </p>
      </div>
    </section>

    <section className={style.sectionWrapper}>
      <div className={style.sectionContainer}>
        <h1
          id={ELEMENT_IDS.CONTENT_CREDIT}
          className={style.title}
        >
          Content credit
        </h1>

        <p className={style.paragraph}>
          City photo - Albury<br />
          Tim J Keegan<br />
          Link: <Link href={LINKS.ALBURY_PHOTO_CREDIT} />
        </p>

        <p className={style.paragraph}>
          Site icons<br />
          Creative Media<br />
          Link: <Link href={LINKS.ICON_CREDIT} />
        </p>
      </div>
    </section>
  </PageWrapper>
);

export default AdditionalInfoPage;
