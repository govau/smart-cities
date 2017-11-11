import React from 'react';
import PageWrapper from '../PageWrapper/PageWrapper';
import Link from '../Link/Link';
import { LINKS } from '../../constants';
import style from './AdditionalInfoPage.scss';


const AdditionalInfoPage = () => (
  <PageWrapper>
    <div>
      <section className={style.sectionWrapper}>
        <div className={style.sectionContainer}>
          <h1 className={style.title}>Accessibility</h1>

          <p className={style.paragraph}>
            The Digital Transformation Agency (DTA) website has been designed to
            meet the Australian Government standard established for web accessibility.
          </p>

          <p className={style.paragraph}>
            Our website aims to meet the Australian Government’s web accessibility requirements,
            including meeting the World Wide Web
            Consortium’s <Link href={LINKS.WCAG} external>
            Web Content Accessibility Guidelines version 2.0 (WCAG 2.0)</Link> at level AA.
          </p>

          <p className={style.paragraph}>
            Providing our information to all users, including those with a disability, is
            important to us. If anything on this site is inaccessible to you, or you are
            experiencing problems accessing content for any reason,
            please <Link href={LINKS.CONTACT_US} external>contact us</Link>.
          </p>
        </div>
      </section>

      <section className={style.sectionWrapper}>
        <div className={style.sectionContainer}>
          <h1 className={style.title}>Security of our websites</h1>

          <p className={style.paragraph}>
            We apply a range of security controls to protect our websites from unauthorised access.
            However, you should be aware that:
          </p>

          <ul>
            <li>the World Wide Web is an insecure public network</li>
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
            computer system, software or data. See how by
            reading <Link href={LINKS.PROTECTING_PDF} external>Protecting Yourself
            Online (PDF 2.7MB)</Link>.
          </p>
        </div>
      </section>

      <section className={style.sectionWrapper}>
        <div className={style.sectionContainer}>
          <h1 className={style.title}>Privacy Statement</h1>

          <p className={style.paragraph}>
            This privacy policy tells you how we collect and use information.
          </p>

          <p className={style.paragraph}>
            We respect and protect the privacy of our users.
          </p>

          <p className={style.paragraph}>
            The term ‘personal information’ in this privacy policy means any information from
            which your identity is apparent or can be reasonably ascertained.
          </p>

          <p className={style.paragraph}>
            We do not automatically collect personal information about you when you visit
            this online service. You can use this service without telling us who you are or
            revealing other personal information. If you fill out our feedback form, you do
            not need to identify yourself or use your real name.
          </p>

          <h2 className={style.subTitle}>Scope</h2>

          <p className={style.paragraph}>
            This statement applies to the smart-cities.dashboard.gov.au website managed by
            the Digital Transformation Agency (DTA).
          </p>

          <h2 className={style.subTitle}>Personal information</h2>

          <p className={style.paragraph}>
            If you fill out the feedback or contact us form on any of our pages we will
            collect the email address you provide and any other identifying information
            you include, such as a name or phone number.
          </p>

          <p className={style.paragraph}>
            Other than circumstances such as unlawful activity or serious threats to health
            and safety, we do not share personal information. If you ask us about an issue
            that needs to be dealt with by another agency, we will provide you with the
            necessary details to make contact yourself. You may opt out of further
            contact from us at any time.
          </p>

          <h2 className={style.subTitle}>How we deal with complaints and requests</h2>

          <p className={style.paragraph}>
            At no cost you can:
          </p>

          <ul>
            <li>
              request access to personal information about you that we hold
            </li>
            <li>
              ask us to correct your personal information if you find
              that it is not accurate, up-to-date or complete
            </li>
            <li>
              make a complaint about our handling of your personal information
            </li>
          </ul>

          <p className={style.paragraph}>
            To protect your privacy and the privacy of others, we will need evidence
            of your identity before we can grant you access to information about you or change it.
          </p>

          <p className={style.paragraph}>
            You can request information by email, or send your request or complaint
            to GPO Box 457, Canberra, ACT 2601.
          </p>

          <p className={style.paragraph}>
            We undertake to respond within 30 days. If the request or complaint will
            take longer to resolve, we will provide you with a date by which we expect to respond.
          </p>

          <h2 className={style.subTitle}>How we protect your personal information</h2>

          <p className={style.paragraph}>
            This site is hosted in Australia in secure, government accredited facilities.
            To help protect the privacy of data and personal information we collect and hold,
            we maintain physical, technical and administrative safeguards.
          </p>

          <p className={style.paragraph}>
            Access to your personal information is restricted to employees who need it
            to provide services to you.
          </p>

          <h2 className={style.subTitle}>Website analytics</h2>

          <p className={style.paragraph}>
            To improve your experience on our site, we use ‘cookies’. Cookies are an industry
            standard and most major websites use them. A cookie is a small text file that our
            site may place on your computer as a tool to remember your preferences. You may
            refuse the use of cookies by selecting the appropriate settings on your browser,
            however if you do this, you may not be able to
            use the full functionality of this website.
          </p>

          <p className={style.paragraph}>
            Our website may contain links to other websites. We are not responsible for the
            privacy practices of any other site and they may have a different privacy policy.
          </p>

          <p className={style.paragraph}>
            Our website uses a range of analytics services which send website traffic data to
            servers offshore. These services do not identify individual users or associate your
            IP address with any other data held by the company for other purposes. We use reports
            provided by analytics providers to help us understand website traffic and webpage usage.
          </p>

          <p className={style.paragraph}>
            By using this website, you consent to the processing of data about you for the purposes
            set out above. You can opt out of analytics if you disable or refuse the
            cookie or disable JavaScript.
          </p>

          <h2 className={style.subTitle}>Our obligations</h2>

          <p className={style.paragraph}>
            The DTA website is bound by
            the <Link href={LINKS.PRIVACY_ACT} external>Privacy Act 1988</Link> (Cth), including
            the <Link href={LINKS.PRIVACY_PRINCIPLES} external>Australian Privacy Principles</Link>.
          </p>

          <p className={style.paragraph}>
            We also follow the <Link href={LINKS.AGENCY_GUIDES} external>Guidelines
            for Federal and ACT government websites</Link> issued by the
            Office of the Australian Information Commissioner.
          </p>
        </div>
      </section>
    </div>
  </PageWrapper>
);

export default AdditionalInfoPage;
