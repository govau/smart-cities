/* eslint-disable */
import React from 'react';
import PageWrapper from '../PageWrapper/PageWrapper';
import Link from '../Link/Link';
import {
  ELEMENT_IDS,
  LINKS,
} from '../../constants';
import style from './DataDictionary.scss';

const DataDictionary = () => (
  <PageWrapper>
    <section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
  <h1 className={style.title}>Data dictionary</h1>
    <ul className={style.cols2}>
      <li><Link href="#total-population">Total population</Link></li>
      <li><Link href="#annual-population-growth-rate">Annual population growth rate</Link></li>
      <li><Link href="#indigenous-population">Indigenous population</Link></li>
      <li><Link href="#population-density">Population density</Link></li>
      <li><Link href="#dwelling-type">Dwelling type</Link></li>
      <li><Link href="#average-household-size">Average household size</Link></li>
      <li><Link href="#housing-tenure">Housing tenure</Link></li>
      <li><Link href="#life-expectancy">Life expectancy</Link></li>
      <li><Link href="#share-in-bottom-household-income-quintile">Share in bottom household income quintile</Link></li>
      <li><Link href="#languages-other-than-english-spoken-at-home">Languages other than English spoken at home</Link></li>
      <li><Link href="#age-structure">Age structure</Link></li>
      <li><Link href="#median-age">Median age</Link></li>
      <li><Link href="#mean-detached-dwelling-price">Mean detached dwelling price</Link></li>
      <li><Link href="#mean-unit-price">Mean unit price</Link></li>
      <li><Link href="#sector-share-of-employment">Sector share of employment</Link></li>
      <li><Link href="#disability-rate">Disability rate</Link></li>
      <li><Link href="#median-annual-household-income">Median annual household income</Link></li>
      <li><Link href="#local-government-fragmentation">Local government fragmentation</Link></li>
      <li><Link href="#median-dwelling-price-to-median-income-ratio">Median dwelling price to median income ratio</Link></li>
      <li><Link href="#housing-construction-costs">Housing construction costs</Link></li>
      <li><Link href="#public-and-community-housing">Public and community housing</Link></li>
      <li><Link href="#homelessness">Homelessness</Link></li>
      <li><Link href="#mortgage-stress">Mortgage stress</Link></li>
      <li><Link href="#rent-stress">Rent stress</Link></li>
      <li><Link href="#building-approvals-per-100000">Building approvals per 100,000</Link></li>
      <li><Link href="#housing-stress">Housing stress</Link></li>
      <li><Link href="#share-of-jobs-accessible-within-30-minutes">Share of jobs accessible within 30 minutes</Link></li>
      <li><Link href="#number-of-jobs-accessible-within-30-minutes">Number of jobs accessible within 30 minutes</Link></li>
      <li><Link href="#public-transport">Public transport</Link></li>
      <li><Link href="#active-transport">Active transport</Link></li>
      <li><Link href="#peak-travel-delay">Peak travel delay</Link></li>
      <li><Link href="#knowledge-services">Knowledge services</Link></li>
      <li><Link href="#broadband-connections">Broadband connections</Link></li>
      <li><Link href="#new-businesses">New businesses</Link></li>
      <li><Link href="#patent-applications">Patent applications</Link></li>
      <li><Link href="#adult-obesity">Adult obesity</Link></li>
      <li><Link href="#perceived-safety">Perceived safety</Link></li>
      <li><Link href="#access-to-public-open-space">Access to public open space</Link></li>
      <li><Link href="#crisis-support">Crisis support</Link></li>
      <li><Link href="#suicide-rate">Suicide rate</Link></li>
      <li><Link href="#air-quality">Air quality</Link></li>
      <li><Link href="#volunteering">Volunteering</Link></li>
      <li><Link href="#greenhouse-gas-emissions-per-capita">Greenhouse gas emissions per capita</Link></li>
      <li><Link href="#office-building-energy-efficiency">Office building energy efficiency</Link></li>
      <li><Link href="#access-to-public-transport">Access to public transport</Link></li>
      <li><Link href="#employment-growth">Employment growth</Link></li>
      <li><Link href="#unemployment-rate">Unemployment rate</Link></li>
      <li><Link href="#youth-unemployment-rate">Youth unemployment rate</Link></li>
      <li><Link href="#participation-rate">Participation rate</Link></li>
      <li><Link href="#year-12-completion">Year 12 completion</Link></li>
      <li><Link href="#certificate-iii-qualification-or-higher">Certificate level III, IV or diploma</Link></li>
      <li><Link href="#bachelor-degree-or-higher">Bachelor degree or higher</Link></li>
      <li><Link href="#gross-regional-product">Gross regional product</Link></li>
    </ul>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2} id="total-population">Total population</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The number of people who live in a city.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Information regarding population size can help users to understand likely pressures on housing, public infrastructure and services.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>None</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Regional Population Growth, Australia, 2017-18 (Cat no. 3218.0)</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>27 March 2019</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/AUSSTATS/abs@.nsf/mf/3218.0">http://www.abs.gov.au/AUSSTATS/abs@.nsf/mf/3218.0</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGA (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Estimates are taken directly from the ABS.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Persons</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="annual-population-growth-rate">Annual population growth rate</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The annual population growth rate of a city.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Information regarding population growth can help users to understand likely pressures on housing, public infrastructure and services.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>None</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Regional Population Growth, Australia, 2017-18 (Cat no. 3218.0)</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>27 March 2019</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/AUSSTATS/abs@.nsf/mf/3218.0">http://www.abs.gov.au/AUSSTATS/abs@.nsf/mf/3218.0</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGA (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Population growth is calculated as a five year average annual rate. The calculation uses a compound annual growth rate formula. The most recent estimated resident population is divided by the population five years earlier, this is then brought to the power of one over five. The product of this is then multiplied by 100 and then 100 is subtracted.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="indigenous-population">Indigenous population</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The proportion of a city&rsquo;s population that identify as Aboriginal or Torres Strait Islander.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Aboriginal and Torres Strait Islander peoples are culturally and linguistically diverse. However, common to Aboriginal and Torres Strait Islander communities is a culture that is different to the non-Indigenous culture. Elements of cultural difference may include, but are not limited to: concept of family structure and community obligation, language, connection to country and continuation of traditional knowledge. This in turn has an effect on the areas of concern that Aboriginal and Torres Strait Islander peoples might see as important to their wellbeing (see ABS Frameworks for Australian Social Statistics, 2015).</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>This indicator is Census counts of individuals who identify as Aborginal, Torres Strait Islander, or both. The ABS estimates that the 2016 Census undercounted the Indigenous population by around 18 per cent (ABS Cat. no. 2940.0)</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Census of Population and Housing 2016</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>23-Oct-17</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBar">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBar</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGA (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Persons identifying as Aborginal, Torres Strait Islander, or both are extracted from Census Tablebuilder at required geographies. Persons with Indigenous status Not Stated are excluded from the calculation.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="population-density">Population density</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>Population-weighted density measures attempt to capture the density at which the average city resident lives. This measure was calculated as a weighted average of the population density of all of the census meshblocks within the city. This measure is more representative of the lived experience of a city's residents than a simple average density calculation (i.e. population divided by the land area of the city).</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Increasing density enables more people and businesses to access the benefits of being in a city, and can, for example, help spread the costs associated with building and maintaining infrastructure. However, increasing density also puts increased stress on the existing built and natural environment and can detract from a city's liveability.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>Population-weighted density measures are sensitive to the geographic scale of the underlying population data. This calculation is based on census meshblocks, which represent the most disaggregated scale at which population data is available for cities. Census meshblock population counts are only published for census years.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>BITRE analysis of:</p>
    <ul>
      <li> Australian Bureau of Statistics - Census of Population and Housing: Mesh Block Counts, Australia, 2016 (Cat. no. 2074.0) </li>
      <li> Australian Bureau of Statistics - Regional Population Growth, Australia, 2017-18 (Cat. no. 3218.0)</li>
    </ul>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>4 July 2017 (Cat. no. 2074.0) and 27 March 2019 (Cat. no. 3218.0)</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/AUSSTATS/abs@.nsf/mf/3218.0;%20http://www.abs.gov.au/ausstats/abs@.nsf/mf/2074.0">http://www.abs.gov.au/AUSSTATS/abs@.nsf/mf/3218.0; http://www.abs.gov.au/ausstats/abs@.nsf/mf/2074.0</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGA (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Current year population estimates for each meshblock are derived by multiplying each 2016 census meshblock population count by an SA2-specific scaling factor. The scaling factor is calculated for each SA2 as the ratio of the Estimated Resident Population count for the current year to the latest census-based population count (i.e. the sum across all meshblocks in the SA2). This approach essentially scales up the census-year meshblock population counts so they align with the most recent available population counts.</p>
    <p className={style.paragraph}>Density is then calculated for each meshblock by dividing this scaled population estimate by the land area of the meshblock. The final step involves weighting these meshblock density estimates using the scaled meshblock population estimates, and aggregating to the city scale using a standard population weighted formula.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Persons per square kilometre</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="dwelling-type">Dwelling type</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The share of dwellings in a city that are detached houses, semi-detached houses, apartments or other.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>This indicator shows the degree of diversity in a city&rsquo;s housing stock. Understanding this diversity can provide insights into a city&rsquo;s population density, the dwelling options available to households, and local infrastructure, service and amenity needs.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>None</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Census of Population and Housing 2016</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>23-Oct-17</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBar">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBar</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGA (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Dwelling Structure is extracted from Census Tablebuilder at required geographies.</p>
    <p className={style.paragraph}>Other includes Caravan; Cabin, houseboat; Improvised home, tent, sleepers out; House or flat attached to a shop, office, etc.</p>
    <p className={style.paragraph}>Not Stated and Not Applicable are excluded from denominator.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="average-household-size">Average household size</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The average number of people per occupied dwelling in a city.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Trends in household size contain information about consumption and lifestyle preferences, the size of dwellings and housing affordability.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>None</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Census of Population and Housing 2016</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>23-Oct-17</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBar">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBar</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGA (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>For GCCSA and SUA based cities, average household sizes are taken directly from ABS Census products. </p>
    <p className={style.paragraph}>Western Sydney is derived by dividing counts of persons resident in private dwellings by the number of occupied private dwellings.</p>
    <p className={style.paragraph}>Persons resident in non-private dwellings are excluded from the calculation.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="housing-tenure">Housing tenure</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The share of occupied private residential dwellings in a city that are owned outright by the occupier, owned with a mortgage, rented, or other.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Housing tenure data can help users understand how changes in housing policy or the housing market will affect a city&rsquo;s residents. Housing tenure has an impact on labour mobility. Owner occupiers are typically less likely to move locations compared with renters. Housing tenure also tends to be correlated with housing density: a larger share of renters live in higher density housing, and a larger share of owner-occupiers live in detached houses.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>None</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Census of Population and Housing 2016</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>23-Oct-17</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBar">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBar</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGA (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Tenure Type is is extracted from Census Tablebuilder at required geographies.</p>
    <p className={style.paragraph}>Other includes Being purchased under a shared equity scheme; Being occupied rent-free; Being occupied under a life tenure scheme; Other tenure type.</p>
    <p className={style.paragraph}>Not Stated and Not Applicable are excluded from denominator.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="life-expectancy">Life expectancy</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The number of years a person born today is expected to live, assuming current age-specific death rates are experienced throughout their lifetime.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Life expectancy is a proxy for the health of a city&rsquo;s population.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>Life expectancy for the non-capital cities is modelled (see method for details). SA4s where the constituent SA2s have variable standardised death rates can produce city level life expectancy estimates which differ from the SA4 life expectancy estimate.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>BITRE analysis of: </p>
    <ul>
      <li>Australian Bureau of Statistics - Life Tables, States, Territories and Australia (Cat. no. 3302.0.55.001) - 2014-2016 and</li>
      <li>Australian Bureau of Statistics - Deaths, Australia (Cat. no. 3302.0) - 2017</li>
    </ul>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>18 October 2017 and 26 September 2018</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://search.abs.gov.au/s/search.html?query=3302.0&collection=abs&form=simple&profile=_default">http://search.abs.gov.au/s/search.html?query=3302.0&amp;collection=abs&amp;form=simple&amp;profile=_default</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), SA4 and SA2 (all other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Capital cities have their estimates taken directly from the ABS publication. Life expectancy is estimated for non-capital cities using a model based on estimated age standardised death rates (ASDRs). The model uses the relationship between SA4 level life expectancy and ASDRs to estimate the life expectancy of SUAs and Western Sydney. ASDRs for the city definitions are calculated by using population weights to combine the SA2s that make up the city definitions. As non-capital cities are geographic subsets of SA4s, modelled estimates are calculated for the city and the balance of the SA4. These two estimates are then benchmarked to the original SA4 life expectancy estimate to ensure they align.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Years</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="share-in-bottom-household-income-quintile">Share in bottom household income quintile</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The share of a city&rsquo;s households in the bottom 20 per cent of the national household income distribution. A figure below 20 per cent indicates that a city has proportionally fewer lower-income households than the national average.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>This indicator can help users understand the extent of socio-economic disadvantage in a city.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>None</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Census of Population and Housing 2016</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>23-Oct-17</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBar">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBar</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGA (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Total Household Income (weekly) is extracted from Census Tablebuilder at required geographies.</p>
    <p className={style.paragraph}>Incomes below and including $33,799 annually are classified as the lowest quintile.</p>
    <p className={style.paragraph}> Negative and No Income are included in numerator.</p>
    <p className={style.paragraph}>Partial and Not Stated are excluded from denominator.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="languages-other-than-english-spoken-at-home">Languages other than English spoken at home</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The proportion of a city's residents who speak a language other than English at home.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>This indicator is a measure of a city's linguistic diversity. Understanding linguistic and, by association, cultural diversity can help target policies that support community integration and cohension.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>This indicator does not measure English language proficiency. A relatively high proportion of residents speaking languages other than English at home does not necessarily imply lower levels of proficiency in English.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Census of Population and Housing 2016</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>23-Oct-17</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBar">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBar</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGA (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Persons who speak a language other than English at home are extracted from Census Tablebuilder at required geographies.</p>
    <p className={style.paragraph}>Not Stated individuals are excluded from the calculation.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="age-structure">Age structure</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The proportion of people aged 0 to 14, 15 to 64 and 65 and over.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>The age structure of the population can give an indication of which services might be in high demand in a city. For example, cities with a relatively large number of older people are likely to have high demand for aged-care services and retirement homes. Cities with a relatively large number of working-age people may have higher demand for childcare services and schools.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>None</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Population by Age and Sex, Regions of Australia, 2017 (Cat no. 3235.0)</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>28-Sep-18</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/AUSSTATS/abs@.nsf/mf/3235.0">http://www.abs.gov.au/AUSSTATS/abs@.nsf/mf/3235.0</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGA (Western Sydney) and SA2s to create SUAs (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Population age structure is calculated from five year age group estimated resident population.</p>
    <p className={style.paragraph}>LGAs and SA2s are combined to create city geographies where required.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="median-age">Median age</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The median age of the city population.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>The median age provides an indicator of the age structure of a city and the likely demand for different services in the city.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>None</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Population by Age and Sex, Regions of Australia, 2017 (Cat no. 3235.0)</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>28-Sep-18</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/3235.0Main+Features12017?OpenDocument">http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/3235.0Main+Features12017?OpenDocument</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGA (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Estimates are taken directly from an ABS client request.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Years of age</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="mean-detached-dwelling-price">Mean detached dwelling price</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>Mean sold detached dwelling value over the previous 12 months.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>This indicator, together with &lsquo;Household income&rsquo;, can help users understand how affordable housing is in a city (see &lsquo;Dwelling price to income ratio&rsquo;).</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>Differences in dwelling prices across cities are driven by a range of factors. These include income levels, amenity, and the flexibility of city planning and zoning systems in responding to changes in housing demand.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>CoreLogic (custom data) 2017</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>Custom data</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="https://www.corelogic.com.au/">https://www.corelogic.com.au/</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGA (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Total value of detached dwellings sales for the previous 12 months is divided by the total number of sales over the same 12 months.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>$</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="mean-unit-price">Mean unit price</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>Mean sold unit value over the previous 12 months.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>This indicator, together with &lsquo;Household income&rsquo;, can help users understand how affordable housing is in a city (see &lsquo;Dwelling price to income ratio&rsquo;).</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>Differences in dwelling prices across cities are driven by a range of factors. These include income levels, amenity, and the flexibility of city planning and zoning systems in responding to changes in housing demand.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>CoreLogic (custom data) 2017</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>Custom data</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="https://www.corelogic.com.au/">https://www.corelogic.com.au/</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGA (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Total value of unit sales for the previous 12 months is divided by the total number of sales over the same 12 months.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>$</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="sector-share-of-employment">Sector share of employment</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The proportion of employed persons in a city that work in: goods producing industries, market services industries and non-market services industries.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Cities can have different industry specialisations and employment mixes, depending on factors such as local resource endowments, history and policy choices. As such, cities can have different policy needs and are affected by economic developments in different ways.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>None</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>BITRE analysis of: </p>
    <ul>
      <li>Australian Bureau of Statistics - Labour Force, Australia, Detailed, Quarterly, Aug 2018 (Cat no. 6291.0.55.003) and</li>
      <li>Australian Bureau of Statistics - Census of Population and Housing 2016</li>
    </ul>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>20 September 2018 (Labour Force) and October 2017 (Census)</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <ul>
      <li><Link href="http://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/6291.0.55.003Aug%202018?OpenDocument">http://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/6291.0.55.003Aug%202018?OpenDocument</Link></li>
      <li><Link href="https://auth.censusdata.abs.gov.au/webapi/jsf/login.xhtml">https://auth.censusdata.abs.gov.au/webapi/jsf/login.xhtml</Link></li>
    </ul>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), SA4s, SUAs and SA2s (Western Sydney and other cities) (ASGS 2011)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>GCCSA (Capital cities) results are obtained from the Labour Force Survey. SUA and Western Sydney are estimated based on SA4 data from the Labour Force Survey. Census data at the SUA and SA2 levels is used to estimate what proportion of the relevant SA4s results should be apportioned to the SUA estimates.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="disability-rate">Disability rate</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The proportion of a city&rsquo;s population with a profound or severe disability. A person has disability if they report they have a limitation, restriction or impairment, which has lasted, or is likely to last, for at least six months and restricts everyday activities.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Disability can impact on a person&rsquo;s capacity to participate in the economy and engage in the community. People with disability are also at a higher risk of becoming socially disadvantaged. This indicator can provide broad insights into service needs for people with disability in a city.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>This indicator provides no information on the type, cause or prevalence of disabilities people have.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>PHIDU - Social Health Atlas of Australia</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>Oct-18</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://phidu.torrens.edu.au/social-health-atlases/data">http://phidu.torrens.edu.au/social-health-atlases/data</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>SA3 (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>SA3 level estimates are aggregated to the required city level using a person weighted concordance.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Irregular updates</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="median-annual-household-income">Median annual household income</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>Median annual household income. A household&rsquo;s income represents the combined income of all household members aged 15 years and older.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Household income is a broad indicator of standard of living. It can also be compared against cost of living factors, such as housing prices, in different cities to obtain benchmarks for assessing affordability.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>This measure does not equivalise income across different household structures and is the gross income of a household regardless of structure.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Census of Population and Housing 2016</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>23-Oct-17</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBa">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBa</Link>r</p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGAs (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Medians are calculated from Census income brackets. Western Sydney is calculated by combining LGA medians using a dwelling weighting method. Calculation includes Negative Income and Nil Income, but excludes Partial Income Stated, All Incomes Not Stated and Not Applicable.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="local-government-fragmentation">Local government fragmentation</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The number of Local Governments in a city.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Fragmented governance occurs when a city is governed by more than one local government authority. This is common in many of Australia&rsquo;s largest cities. In some circumstances, fragmentation can hinder a city&rsquo;s economic performance. While smaller area governments tend to be more responsive to local citizens, larger area governments are better placed to deal with complex city-wide coordination problems and enjoy economies of scale in public administration.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>Evidence of the relationship between fragmentation and economic growth is not conclusive and may vary with local conditions. </p>
    <p className={style.paragraph}>This indicator is less relevant for cities that have one local government area, or none at all. Cities with one local government area include: Bendigo, Cairns, Geelong, Mackay, Sunshine Coast, Toowoomba and Townsville. Canberra has no local government areas.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>ABS - Australian Statistical Geography Standard (ASGS): Volume 3 - Non ABS Structures, (Cat. no. 1270.0)</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>31-Jul-18</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/1270.0.55.003Main+Features1July%202018?OpenDocument">http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/1270.0.55.003Main+Features1July%202018?OpenDocument</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>Local Government Area (2018)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>The number of LGAs in a city are calculated using ABS standard geography classifications.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Local Governments</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="median-dwelling-price-to-median-income-ratio">Median dwelling price to median income ratio</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The ratio of the median dwelling price to median annual household income.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Home ownership is an aspiration for many Australians. Purchasing a home is also the largest single expenditure for a typical household. The dwelling price to income ratio is a key measure of housing affordability.</p>
    <p className={style.paragraph}>Low levels of housing affordability have negative implications for a city&rsquo;s economic performance by reducing labour market efficiency, undermining social cohesion and exacerbating wealth inequality (Australian Housing and Urban Research Institute).</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>The median dwelling price does not make housing quality adjustments and does not adjust for outlier house sales.</p>
    <p className={style.paragraph}> Western Sydney was excluded as neither median dwelling price or household income was available at the specified geography.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Median dwelling prices - Australian Property Monitors</p>
    <p className={style.paragraph}> Median household income - ANU household income model</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>Custom data</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="https://www.apm.com.au/">https://www.apm.com.au/</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Median dwelling price is divided by the median annual household income.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Ratio</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="housing-construction-costs">Housing construction costs</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The average cost per square metre of constructing a new detached house in a city. This indicator presents average costs for a standardised building type: a full-brick detached house with a tiled roof, built on a flat site.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Construction costs are a large component of housing prices, along with the cost of land. Monitoring construction costs enables a better understanding of the factors contributing to house price levels in a city.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>Construction costs vary depending on the type of building, the materials used to build it, the workers employed and the cost of complying with regulations. This indicator does not disaggregate contributions to construction costs from materials, labour, taxes, fees and charges, and profit margins.</p>
    <p className={style.paragraph}>Data for Western Sydney is not available.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Rawlinsons Guide to Construction Costs</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>Custom data</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="https://www.rawlhouse.com.au/">https://www.rawlhouse.com.au/</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>Rawlinsons-defined city geographies</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>This indicator uses the Rawlinsons project house series.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>$ per square metre</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="public-and-community-housing">Public and community housing</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The number of public and community housing dwellings as a share of the city's total dwelling stock. Public and community housing refers to dwellings rented from a state or territory housing authority, a housing co-operative, or a community or church group.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>The availability of public and community housing is an important consideration for policies addressing housing affordability issues and socio-economic disadvantage.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>Public and community housing may not always be the best solution to addressing housing affordability or socio-economic disadvantage. The appropriate level of public and community housing provision should vary depending on local conditions and levels of socio-economic disadvantage.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Census of Population and Housing 2016</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>23-Oct-17</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBar">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBar</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGAs (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Tenure and Landlord Type is extracted from Census Tablebuilder at required geographies.</p>
    <p className={style.paragraph}>Not Stated and Not Applicable are excluded from denominator.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="homelessness">Homelessness</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The number of homeless people per 100,000 residents. A person is classified as homeless if they do not have suitable accommodation alternatives and their current living arrangement: </p>
    <ul>
      <li>is in a dwelling that is inadequate, or</li>
      <li>has no tenure (e.g. squatting), or</li>
      <li>has an initial tenure that is short and not extendable, or</li>
      <li>does not allow them to have control of, and access to, space for social relations.</li>
    </ul>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>This indicator can help users understand the extent of socio-economic disadvantage in a city and inform policy decisions concerning housing and other services for homeless people.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>This indicator counts everybody who identifies as homeless and is not reflective of 'rough-sleepers' in a city.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Census of Population and Housing 2016</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>23-Oct-17</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBar">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBar</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGAs (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Number of homeless for a city is divided by the size of the population and multiplied by 100,000.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Persons per 100,000 people</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="mortgage-stress">Mortgage stress</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The proportion of mortgage holding households for which mortgage payments make up 30 per cent or more of household income. This indicator is expressed as a percentage of the total number of households with a mortgage in the city. This indicator excludes households that rent or own their homes outright.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Households that spend a large share of their income on mortgage payments have less money to spend on other things. These households are also typically more vulnerable to financial shocks associated with house price falls or interest rate rises, which can increase risks of default or further constrain consumer spending. Having a large number of households in mortgage stress presents broader risks to the local economy.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>This indicator does not take into account the size of household income when calculating whether a household is under stress. High income households can afford to spend a high proportion of their income on housing and not affect their ability to afford other essentials. Mortgage stress is calculated using various methodologies by other providers. Please use caution when comparing different measures.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Census of Population and Housing 2016</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>Custom data</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBar">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBar</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>SA2 (All cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Mortgage stress is calculated by identifying households where weekly mortgage repayments are greater than or equal to 30 per cent of weekly household income, divided by the total number of households with a mortgage.</p>
    <p className={style.paragraph}>Households where either mortgage repayments or household income are not stated are excluded from the calculation.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="rent-stress">Rent stress</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The proportion of renting households for which rent payments make up 30 per&nbsp;cent or more of household income. This indicator is expressed as a percentage of the total number of households paying rent in a city. This indicators excludes households with a mortgage or who own their homes outright.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Around one in three households rent. Households that cannot afford to pay rent can put pressure on public and community housing. Lack of access to affordable rental housing can exacerbate this problem.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>This indicator does not take into account the size of household income when calculating whether a household is under stress. High income households can afford to spend a high proportion of their income on housing and not affect their ability to afford other essentials. Rent stress is calculated using various methodologies by other providers. Please use caution when comparing different measures.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Census of Population and Housing 2016</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>Custom data</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBar">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBar</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>SA2 (All cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Rent stress is calculated by identifying households where weekly rent is greater than or equal to 30 per cent of weekly household income, divided by the total number of households renting.</p>
    <p className={style.paragraph}>Households where either rent or household income are not stated are excluded from the calculation.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="building-approvals-per-100000">Building approvals per 100,000</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The number of new residential dwellings approved for construction per 100,000 persons in the city.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Residential building approvals are a forward indicator of the volume of dwelling investment and the supply of new housing in a city. Expressing dwelling approvals per 100,000 persons helps understand how well housing supply is keeping up with new demand.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>There is a lag between the approval of a new dwelling and that dwelling being constructed and entering the housing market.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <ul>
      <li>Australian Bureau of Statistics - Building approvals, Australia (Cat. no. 8731.0)</li>
      <li> Australian Bureau of Statistics - Regional Population Growth (Cat. no. 3218.0)</li>
    </ul>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>3 May 2019 (Building Approvals) and 27 March 2019 (Regional Population Growth)</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/ausstats/abs@.nsf/mf/8731.0">http://www.abs.gov.au/ausstats/abs@.nsf/mf/8731.0</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <ul>
      <li>Dwelling Approvals - GCCSA (Capital cities) and SA2 (other cities) (ASGS 2016)</li>
      <li>Population - GCCSA (Capital cities), LGAs (Western Sydney) and SUA (other cities) (ASGS 2016)</li>
    </ul>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>The number of new residential dwellings approved for the calendar year is summed. With Estimated Resident Population as at 30 June (divided by 100,000) is the denominator.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Dwellings per 100,000 people</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="housing-stress">Housing stress</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The proportion of households in the city where mortgage or rent payments make up 30 per cent or more of household income. This indicator is expressed as a percentage of the total number of households in a city, including households that own their homes outright.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Households that spend a large share of their income on mortgage or rent payments have less money to spend on other things. Having a large number of households under stress presents broader risks to the local economy.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>This indicator does not take into account the size of household income when calculating whether a household is under stress. High income households can afford to spend a high proportion of their income on housing and not affect their ability to afford other essentials. Housing stress is calculated using various methodologies by other providers. Please use caution when comparing different measures.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Census of Population and Housing 2016</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>23-Oct-17</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBar">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBar</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>SA2 (All cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Housing stress is calculated by identifying households where weekly mortgage repayments or rent is greater than or equal to 30 per cent of weekly household income. This figure is divided by the total number of households in the city.</p>
    <p className={style.paragraph}>Households being purchased under a shared equity scheme are excluded from this calculation.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="share-of-jobs-accessible-within-30-minutes">Share of jobs accessible within 30 minutes</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The share of jobs in a city that can be reached by car in a commute of 30 minutes or less during the morning peak. This indicator represents a city-wide average - commute times in different parts of a city are weighted by population size.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Better access to jobs makes it simpler to find work or change employers, and can improve the quality of job matches in a city - one of the determinants of labour productivity. Shorter commute times also give people more time for leisure outside work. </p>
    <p className={style.paragraph}>The share of jobs accessible within 30 minutes is a partial indicator of the efficiency of a city&rsquo;s transport infrastructure.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>This indicator only includes travel by car and does not provide full information on the effectiveness of a city&rsquo;s transport network. Jobs outside the city definition are not included in the calculation, even if they are accessible in 30 minutes (for example jobs in Queanbeyan are excluded from the Canberra calculation despite being easily accessible). On roads where there is insufficient data for average road speeds (predominantly suburban roads) the signposted speed is used.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>BITRE analysis of:</p>
    <ul>
      <li>Australian Bureau of Statistics - Census of Population and Housing 2016</li>
      <li>Australian Bureau of Statistics - Population by Age and Sex, Regions of Australia, 2017 (Cat. no. 3235.0)</li>
      <li>Here Technologies - NAVMap</li>
    </ul>
    <h3 className={style.heading3}>Date Published</h3>
    <ul>
      <li>Census - 23 October 2017</li>
      <li>Regional Population - 28 Sept 2018</li>
      <li>Here Technologies - Custom data</li>
    </ul>
    <h3 className={style.heading3}>Data Source Link</h3>
    <ul>
      <li>Census - <Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBar">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBar</Link></li>
      <li>Regional Population - <Link href="http://www.abs.gov.au/AUSSTATS/abs@.nsf/mf/3235.0">http://www.abs.gov.au/AUSSTATS/abs@.nsf/mf/3235.0</Link></li>
      <li>Here - <Link href="https://www.here.com/en">https://www.here.com/en</Link></li>
    </ul>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>SA2 (ASGS 2016) and 2016 Census of Population and Housing Destination Zones</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>To generate a weighted population centre for individual SA2s, we use working age (15-64) population counts at SA1. This allows us to create centroids in SA2s with non-uniform population distributions and these SA2 centroids are used as origin points to model commuting patterns.</p>
    <p className={style.paragraph}>30 minute commutes from individual SA2s are modelled using road network analysis and morning peak average road speeds (provided by Here Technologies). Using this modelled commute, we can assess how many jobs are accessible from each SA2.</p>
    <p className={style.paragraph}>Individual SA2 job accessibility proportions are then weighted together using working age population estimates.</p>
    <p className={style.paragraph}>The distribution of jobs within the city definition is estimated using job counts by 2016 Census of Population and Housing Destination Zones.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="number-of-jobs-accessible-within-30-minutes">Number of jobs accessible within 30 minutes</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The number of jobs in a city that can be reached by car in a commute of 30 minutes or less during the morning peak. This indicator represents a city-wide average - commute times in different parts of a city are weighted by population size.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Better access to jobs makes it simpler to find work or change employers, and can improve the quality of job matches in a city - one of the determinants of labour productivity. Shorter commute times also give people more time for leisure outside work. </p>
    <p className={style.paragraph}>The number of jobs accessible within 30 minutes is a partial indicator of the efficiency of a city&rsquo;s transport infrastructure.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>This indicator only includes travel by car and does not provide full information on the effectiveness of a city&rsquo;s transport network. Jobs outside the city definition are not included in the calculation, even if they are accessible in 30 minutes (for example jobs in Queanbeyan are excluded from the Canberra calculation despite being easily accessible). On roads where there is insufficient data for average road speeds (predominantly suburban roads) the signposted speed is used.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>BITRE analysis of:</p>
    <ul>
      <li> Australian Bureau of Statistics - Census of Population and Housing 2016</li>
      <li> Australian Bureau of Statistics - Population by Age and Sex, Regions of Australia, 2017 (Cat. no. 3235.0)</li>
      <li> Here Technologies - NAVMap</li>
    </ul>
    <h3 className={style.heading3}>Date Published</h3>
    <ul>
      <li>Census - 23 October 2017</li>
      <li> Regional Population - 28 September 2018</li>
      <li> Here Technologies - Custom data</li>
    </ul>
    <h3 className={style.heading3}>Data Source Link</h3>
    <ul>
      <li>Census - <Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBar">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBar</Link></li>
      <li> Regional Population - <Link href="http://www.abs.gov.au/AUSSTATS/abs@.nsf/mf/3235.0">http://www.abs.gov.au/AUSSTATS/abs@.nsf/mf/3235.0</Link></li>
      <li> Here - <Link href="https://www.here.com/en">https://www.here.com/en</Link></li>
    </ul>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>SA2 (ASGS 2016) and 2016 Census of Population and Housing Destination Zones</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>To generate a weighted population centre for individual SA2s, we use working age (15-64) population counts at SA1. This allows us to create centroids in SA2s with non-uniform population distributions and these SA2 centroids are used as origin points to model commuting patterns.</p>
    <p className={style.paragraph}>30 minute commutes from individual SA2s are modelled using road network analysis and morning peak average road speeds (provided by Here Technologies). Using this modelled commute, we can assess how many jobs are accessible from each SA2.</p>
    <p className={style.paragraph}>Individual SA2 job accessibility number are then weighted together using working age population estimates.</p>
    <p className={style.paragraph}>The distribution of jobs within the city definition is estimated using job counts by 2016 Census of Population and Housing Destination Zones.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Jobs</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="public-transport">Public transport</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The proportion of journeys to work that are taken using public transport.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Understanding commuting patterns is important for transport planning and identifying opportunities to promote healthy lifestyle choices.</p>
    <p className={style.paragraph}>The share of people that travel to work by walking, cycling or public transport is affected by commuter preferences, the location of jobs and workers, transport prices and infrastructure. For example, more people will commute by car if driving is a cheap and quick way to get to work. More people will walk to work if jobs are close to where people live.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>This indicator does not separately identify the share of work trips that are made by individual modes of public transport - for example, trips by train, bus or ferry. It does not provide direct information on the effectiveness of a city&rsquo;s transport network. It also does not include transport use for non-work trips.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Census of Population and Housing 2016</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>23-Oct-17</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBar">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBar</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGAs (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>A journey to work is identified as using public transport where the first response is Train, Bus, Ferry, Tram or Taxi.</p>
    <p className={style.paragraph}>Did not go to work; Method Not stated; Method Not applicable are excluded from the calculation. Worked from home are included.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="active-transport">Active transport</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The proportion of journeys to work that are taken by walking or cycling ('active transport')</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Understanding commuting patterns is important for transport planning and identifying opportunities to promote healthy lifestyle choices.</p>
    <p className={style.paragraph}>The share of people that travel to work by walking, cycling or public transport is affected by commuter preferences, the location of jobs and workers, transport prices and infrastructure. For example, more people will commute by car if driving is a cheap and quick way to get to work. More people will walk to work if jobs are close to where people live.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>This indicator does not include work trips that have substantial active transport component, for example somebody who walks to a train station. It also does not include non-work active trips.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Census of Population and Housing 2016</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>23-Oct-17</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBar">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBar</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGAs (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>A journey to work is identified as active where the Census journey to work response is Bike; Bike, other; or Walked only.</p>
    <p className={style.paragraph}>Did not go to work; Method Not stated; Method Not applicable are excluded from the calculation. Worked from home are included.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="peak-travel-delay">Peak travel delay</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The percentage increase in the duration of a car trip made during the busiest traffic periods (7am to 10am and 4pm to 7pm) compared with when there is no congestion. This indicator is constructed using data on car trips that would take 30 minutes in a period of traffic free flow (at 2am).</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Data on travel delays provides information on how well a city&rsquo;s road network is meeting peak demand. A reduction in peak travel times could improve access to jobs, one of the determinants of labour productivity. Shorter commute times also give people more time for leisure outside work, making a city more liveable for the people that use its roads.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>This indicator measures the proportional increase in car travel times during peak traffic periods. It does not permit comparisons of actual commute times nor does it provide information on travel delays for modes of transport other than car travel.</p>
    <p className={style.paragraph}>Data are not available for all cities.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>TomTom Australia</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>2017</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="https://www.tomtom.com/en_gb/trafficindex/list?citySize=ALL&continent=OC&country=AU">https://www.tomtom.com/en_gb/trafficindex/list?citySize=ALL&amp;continent=OC&amp;country=AU</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>TomTom defined geography</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Taken directly from TomTom</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Irregular</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="knowledge-services">Knowledge services</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The proportion of employed persons in a city that work in Knowledge Services industries.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Workers in knowledge-intensive service industries tend to be well educated, well paid and well placed to succeed in an increasingly competitive and fast changing global economy.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>None</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>BITRE analysis of: </p>
    <ul>
      <li> Australian Bureau of Statistics - Labour Force, Australia, Detailed, Quarterly, Aug 2018 (Cat no. 6291.0.55.003) and</li>
      <li> Australian Bureau of Statistics - Census of Population and Housing 2016</li>
    </ul>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>20 September 2018 (Labour Force) and October 2017 (census)</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <ul>
      <li><Link href="http://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/6291.0.55.003Aug%202018?OpenDocument">http://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/6291.0.55.003Aug%202018?OpenDocument</Link></li>
      <li> <Link href="https://auth.censusdata.abs.gov.au/webapi/jsf/login.xhtml">https://auth.censusdata.abs.gov.au/webapi/jsf/login.xhtml</Link></li>
    </ul>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), SA4s, SUAs and SA2s (Western Sydney and other cities) (ASGS 2011)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>GCCSA (Capital cities) results are obtained from the Labour Force Survey. SUA and Western Sydney are estimates based on SA4 data from the Labour Force Survey. Census data at the SUA and SA2 levels is used to estimate what proportion of the relevant SA4s results should be apportioned to the SUA estimates.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="broadband-connections">Broadband connections</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The share of households in a city with an active broadband connection, defined as an access speed of 256 kilobits per second or faster.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>The internet plays a pivotal role in how people learn, communicate, innovate and do business. Access to the internet is important for fostering innovation and supporting productivity.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>This indicator measures access to the internet based on a relatively low threshold speed. It does not provide information on relative broadband speeds between cities or connection to the NBN.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Census of Population and Housing 2016</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>23-Oct-17</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBar">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBar</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGAs (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Extracted from Census Tablebuilder at required geographies.</p>
    <p className={style.paragraph}>Not Stated and Not Applicable excluded from the denominator.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="new-businesses">New businesses</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The business entry rate is the number of new businesses that started actively trading on the business register over the past year as a share of the total number of registered businesses at the start of the year.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Business entry is an indicator of dynamism and economic activity in a city. Strong entrepreneurial activity is associated with a dynamic and innovative local economy.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>A business entry can occur for reasons other than the creation of a new business. It may occur, for example, when a business starts to actively remit Goods and Services Tax (GST) and so is counted as an &lsquo;actively trading&rsquo; business. Businesses with turnover below $75,000 are not required to register for GST; those that don&rsquo;t register for GST are not included in counts of new businesses.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Data by region (Cat. no. 1410.0) 2012-2017</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>2-May-18</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/ausstats/abs@.nsf/mf/1410.0">http://www.abs.gov.au/ausstats/abs@.nsf/mf/1410.0</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGAs (Western Sydney) and SA2 (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Business entries as at year ending 30 June are the numerator, with total number of businesses for the same point as the denominator.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="patent-applications">Patent applications</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>This shows the number of patent applications per 100,000 persons in the city.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Intellectual property, including patents, provides a foundation for innovation, which creates knowledge, builds businesses and contributes to economic growth.</p>
    <p className={style.paragraph}>Patent applications are an indicator of the amount of innovation and research and development occurring in a city. Tracking data on patent applications can help understand how well a city is fostering innovation.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>Innovation that occurs in one city will sometimes be recorded in patents registered elsewhere. This can occur when a business with offices in more than one city has all of its patents registered by its head office. In addition, Australian firms sometimes register patents overseas, and this data is not captured in this indicator.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Department of Industry, Innovation and Science - SA3 Region Innovation Data, 2009 to 2016</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>18-Dec-17</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="https://data.gov.au/dataset/4433d049-4cdb-4918-b589-8c79afb275a4">https://data.gov.au/dataset/4433d049-4cdb-4918-b589-8c79afb275a4</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGAs (Western Sydney) and SA3 (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Both Patent and Estimated Resident Population counts are sourced from the Department of Industry, Innovation and Science dataset.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Patent applications per 100,000 people</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="adult-obesity">Adult obesity</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The share of people aged 18 and over with a body mass index (BMI) greater than 30. A person&rsquo;s BMI is calculated as their weight (in kilograms) divided by the square of their height (in metres).</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Obesity is a risk factor for chronic diseases such as cardiovascular disease, diabetes and cancer (see World Health Organisation: <Link href="http://www.who.int/topics/obesity/en/">http://www.who.int/topics/obesity/en/</Link>). High rates of obesity put added strain on public health services. Being overweight or obese can also affect a person&rsquo;s quality of life.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>BMI is a measure of weight, not fat. Factors like age, gender and muscle mass can affect a person&rsquo;s BMI independent of body fat.</p>
    <p className={style.paragraph}>This indicator was converted to the city geography using a population weighted concordance, which does not take into account potential differences in the geographic distribution of this variable.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>PHIDU - Social Health Atlas of Australia</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>Oct-18</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://phidu.torrens.edu.au/social-health-atlases/data">http://phidu.torrens.edu.au/social-health-atlases/data</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>SA3 (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>SA3 level estimates are aggregated to the required city level using a person weighted concordance. </p>
    <p className={style.paragraph}>The total population (denominator) is derived by comparing the estimated number and the age standardised rate per 100.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Irregular updates</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="perceived-safety">Perceived safety</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The share of people aged 18 years and over who report that they feel safe or very safe walking alone in their local area after dark.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Feeling unsafe in their community can affect people&rsquo;s health and wellbeing. If people feel unsafe, it can negatively influence their social activities and erode trust within their communities (ABS, Australian Social Trends, 2010). Perceptions of safety are also influenced by factors such as crime rates in a city.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>Factors other than crime can influence how safe a person feels in a particular context. This can include age, sex, ethnicity, education, health and economic status (ABS, Australian Social Trends, 2010).</p>
    <p className={style.paragraph}>This indicator was converted to the city geography using a population weighted concordance, which does not take into account potential differences in the geographic distribution of this variable.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>PHIDU - Social Health Atlas of Australia</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>Oct-18</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://phidu.torrens.edu.au/social-health-atlases/data">http://phidu.torrens.edu.au/social-health-atlases/data</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>SA3 (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>SA3 level estimates are aggregated to the required city level using a person weighted concordance.</p>
    <p className={style.paragraph}>The total population (denominator) is derived by comparing the estimated number and the age standardised rate per 100.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Irregular updates</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="access-to-public-open-space">Access to public open space</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The proportion of dwellings within 400 metres walking distance of public open space that is 1.5 hectares or greater.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Access to public open space provides amenity as well as opportunities for physical exercise, community interaction and improved mental health.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>Identifying public open space outside of urban and suburb locations is difficult due to the detail and quality of geospatial information. Further, the need to access public open space may be lesser in rural and peri-urban areas where dwellings tend to have larger gardens and more private open space. Rural and peri-urban areas within the city and surrounds are therefore excluded from analysis.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Analysis performed by the Healthy Liveable Cities Group, Centre for Urban Research, RMIT University</p>
    <p className={style.paragraph}>Input data:</p>
    <ul>
      <li> Public open space - Open Street Map (2018)</li>
      <li> Pedestrian accessible street networks - Open Street Map (2018)</li>
      <li> Residential dwellings - geocoded national address file and ABS (2016)</li>
    </ul>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>Custom data</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="https://www.rmit.edu.au/research/research-institutes-centres-and-groups/research-centres/centre-for-urban-research">https://www.rmit.edu.au/research/research-institutes-centres-and-groups/research-centres/centre-for-urban-research</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGAs (Western Sydney), SUA (other cities) and SOS (all cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Publicly accessible open spaces are identified using geotags and polygon analysis of Open Street Map data. Residential addresses are identified using the geocoded national address file. Routes for pedestrian access to these are identified using walkable road networks derived from Open Street Map data. Public open space entry points were taken to be those locations on each area's perimeter within 30 metres of the walkable road network.  The proportion of dwellings with access is estimated using the residential sample points located within urban areas of the city geography, weighted by ABS Census Mesh Block dwelling counts.</p>
    <p className={style.paragraph}>Public open space is based on the definition used in the Metropolitan Open Space Network (Victorian Planning Authority, 2017).</p>
    <p className={style.paragraph}>Public open space includes:</p>
    <ul>
      <li>public sports grounds</li>
      <li>parks and gardens</li>
      <li>civic squares and promenades</li>
      <li>natural and conservation parks</li>
      <li>waterways and foreshores</li>
    </ul>
    <p className={style.paragraph}>Public open space does not include:</p>
    <ul>
      <li>schools</li>
      <li>golf courses</li>
      <li>cemeteries</li>
      <li>zoos </li>
      <li>racetracks or private sports grounds</li>
    </ul>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Proportion of households</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="crisis-support">Crisis support</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The share of people that stated in a survey that they feel there is someone outside their household who could be asked for support in a time of crisis. Support could be in the form of emotional, physical or financial help. It could come from family members, friends, neighbours, work colleagues or from community, government or professional organisations.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Support in a time of crisis can reduce a person&rsquo;s financial, physical, psychological or emotional hardship. Feeling that there is help can also affect a person&rsquo;s wellbeing. High rates of people reporting that they can access support in times of crisis might mean there are adequate support services in a city, or that there is strong social cohesion.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>This indicator was converted to the city geography using a population weighted concordance, which does not take into account potential differences in the geographic distribution of this variable.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>PHIDU - Social Health Atlas of Australia</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>Oct-18</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://phidu.torrens.edu.au/social-health-atlases/data">http://phidu.torrens.edu.au/social-health-atlases/data</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>SA3 (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>SA3 level estimates are aggregated to the required city level using a person weighted concordance.</p>
    <p className={style.paragraph}>The total population (denominator) is derived by comparing the estimated number and the age standardised rate per 100.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Irregular updates</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="suicide-rate">Suicide rate</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The number of suicides in a year per 100,000 people.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Knowing a city&rsquo;s suicide rate, together with related mental and physical health indicators, is important for gauging the demand for support services.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>This indicator was converted to the city geography using a population weighted concordance, which does not take into account potential differences in the geographic distribution of this variable.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>PHIDU - Social Health Atlas of Australia</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>Oct-18</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://phidu.torrens.edu.au/social-health-atlases/data">http://phidu.torrens.edu.au/social-health-atlases/data</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>SA3 (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>SA3 level estimates are aggregated to the required city level using a person weighted concordance.</p>
    <p className={style.paragraph}> The total population (denominator) is derived by comparing the estimated number and the age standardised rate per 100,000.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Rate per 100,000 people</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Irregular updates</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="air-quality">Air quality</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The average amount of particulate matter in a city&rsquo;s air per cubic metre, measured over the course of a year. Sub-indicators present data for particles smaller than 2.5 microns in diameter (PM2.5)</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Air quality is an indicator of the environmental impact of economic activity in a city. The World Health Organisation warns that chronic exposure to particles in the air adds to the risk of developing cardiovascular diseases, respiratory diseases and lung cancer. </p>
    <p className={style.paragraph}>Australian governments have set air quality standards for PM10 and PM2.5 (see http://www.npi.gov.au/resource/particulate-matter-pm10-and-pm25).</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>A city&rsquo;s air quality can be affected by production taking place outside its boundaries, or by weather events and natural disasters beyond the control of policy makers. Particulate matter is a partial indicator of ambient air quality. Data for Melbourne and Geelong is from 2016. For all other cities, data is from 2018.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>World Health Organisation, based on data collected at state and territory monitoring stations - 2018</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>2018</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.who.int/airpollution/data/cities/en/">http://www.who.int/airpollution/data/cities/en/</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>WHO-defined city geographies</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Source data geographies are used as proxies for city geographies.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Micrograms per cubic metre</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Irregular updates</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="volunteering">Volunteering</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The share of people aged 15 years and older who volunteered their time, services or skills to a club, organisation or association in the past twelve months.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Volunteering can strengthen community bonds and improve social wellbeing by facilitating interactions among people outside their normal peer groups. Volunteers also help provide essential services, such as emergency services, sports clubs, parent teacher associations and elderly support services, some of which might not otherwise be supplied.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>Volunteering rates might be affected by large one-off events like the Olympics or the Commonwealth Games.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Census of Population and Housing 2016</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>23-Oct-17</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBar">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBar</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGAs (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>This calculation excludes Census records where Voluntary work is either Not stated or Not applicable.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="greenhouse-gas-emissions-per-capita">Greenhouse gas emissions per capita</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The estimated per capita amount of greenhouse gases emitted in a year. Calculated as direct (scope 1) emissions, excluding direct emissions from electricity generation, plus indirect (scope 2) emissions from the generation of electricity.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Emissions data help to understand a city's contribution to climate change and to target climate-change mitigation policies.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>The National Greenhouse Gas Inventory (NGGI) does not publish emissions data at the city scale. This indicator has been estimated by attributing state-level emissions to cities using a range of city-level data (e.g. employment by industry, population, household transport use). It is assumed that none of the emissions from the Mining industry are attributable to cities.</p>
    <p className={style.paragraph}>Only partial adjustment has been made to account for intrastate differences in energy use or emissions within industries, or for intrastate differences in residential energy use or emissions. State/territory estimates of scope 2 emissions from own-use generation are not of high quality, and the city estimates make no adjustment for intrastate differences in fuel sources. Actual emission levels will depend on the type of production activity taking place in a city, regional differences in residential energy use and emissions, and the energy sources businesses and households depend on.</p>
    <p className={style.paragraph}>Electricity demand data by zone substations will differ from electricity generation as some energy will be lost in transmission and generation. The mapping of zone substation load data to spatial extent is inexact, and there are gaps in the data. Estimates are not available for Darwin or Canberra. Information on greenhouse gas emissions reported in Australia is available at: <Link href="http://environment.gov.au/climate-change/climate-science-data">http://environment.gov.au/climate-change/climate-science-data</Link></p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>BITRE analysis of: </p>
    <p className={style.paragraph}>Department of the Environment and Energy (DEE) National Greenhouse Gas Inventory (NGGI) 2016, CSIRO city scope 2 emissions estimates 2016 (based on zone substation load data), ABS Regional Population Growth, 2016 (Cat. no. 3218.0), ABS Agricultural Commodities, 2015-16 (Cat. no. 7121.0), ABS Census of Population and Housing 2016.</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>Custom data</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://environment.gov.au/climate-change/climate-science-data/greenhouse-gas-measurement/publications/national-inventory-economic-sector-2016">http://environment.gov.au/climate-change/climate-science-data/greenhouse-gas-measurement/publications/national-inventory-economic-sector-2016</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGA (Western Sydney) and SUA (Other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>DEE's National Inventory by Economic Sector 2016 report provides state and territory direct and indirect emissions estimates for the residential sector and for industries. State and territory direct emissions from the residential non-transport sector were allocated to cities based on population data. State and territory direct emissions from the residential transport sector were allocated to cities based on household vehicle kilometres travelled data. For non-agricultural industries, state and territory direct emissions were allocated to cities based on ABS census employment by industry data (on a place of work basis). For the Manufacturing and Transport, postal and warehousing industries this allocation was based on more detailed ANZSIC industry subdivision data. Agricultural emissions were allocated to cities based on ABS livestock counts. Direct emissions from electricity generation were excluded from the indicator, to avoid double counting. </p>
    <p className={style.paragraph}>Indirect (scope 2) emissions from the generation of purchased electricity were estimated for cities using data provided by CSIRO on electricity demand at the point of zone substations, and associated emissions. Indirect (scope 2) emissions from own-use generation were allocated to cities using census data on the location of Electricity generation jobs. </p>
    <p className={style.paragraph}>The various categories of direct and indirect emissions were then summed for each city, and divided by the city's population, to derive the greenhouse gas emissions per capita indicator.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Tonnes of carbon dioxide equivalent emissions per capita</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="office-building-energy-efficiency">Office building energy efficiency</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The average National Australian Built Environment Rating System (NABERS) score for rated office buildings in the city, weighted by rated floor space. </p>
    <p className={style.paragraph}>NABERS ratings are based on an assessment of the operational performance of a building over a 12 month period, for energy, by tenants and building owners. A NABERS assessment controls for factors such as climatic conditions, hours of use, energy sources, size and occupancy, meaning it is comparable within and across cities.</p>
    <p className={style.paragraph}>A score of 6 is consistent with market-leading performance. A score of 1 means the building has considerable scope for improvement.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Office buildings are large consumers of energy within cities. Buildings with a higher NABERS assessment use less energy and water, and produce fewer greenhouse gas emissions and less waste. This information can be useful for potential tenants looking to minimise their environmental footprint and lower their energy and utility bills.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>This indicator only covers rated buildings, and may not provide an indication of the efficiency of all office buildings in a city. This indicator does not account for the efficiency of buildings in the residential or industrial sectors. </p>
    <p className={style.paragraph}>Some cities have a small number of buildings with a NABERS rating and the average can shift significantly when a new rating enters the data set. Cities with fewer than 20 rated buildings are Albury-Wodonga, Cairns, Geelong, Toowoomba, Townsville, Western Sydney and Sunshine Coast. Cities with 5 rated buildings or fewer are not published (These cities are Ballarat, Bendigo, Mackay and Launceston).</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>National Australian Built Environment Rating System</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>Custom data</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="https://www.nabers.gov.au/">https://www.nabers.gov.au/</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGA (Western Sydney) and SUA (other cities)(ASGS 2011)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Buildings are rated for environmental efficiency by National Australian Built Environment Rating System, with city averages calculated by weighting buildings by floor space.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Average energy rating (from 1 to 6)</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="access-to-public-transport">Access to public transport</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The proportion of dwellings within 400 metres walking distance of a frequently serviced public transport stop - one with a scheduled service at least every 30 minutes from 7am to 7pm on a normal weekday.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>A well-integrated and accessible public transport system has the potential to reduce traffic congestion in a city and improve residents&rsquo; access to jobs, goods and services.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>Cities with smaller populations may have few public transports stops that met the 30 minute service threshold and have low access as a result. This threshold for access to public transport is appropriate for urban and suburban areas. Rural and peri-urban areas within the city and surrounds are excluded from analysis.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Analysis performed by the Healthy Liveable Cities Group, Centre for Urban Research, RMIT University</p>
    <p className={style.paragraph}>Input data:</p>
    <ul>
      <li>Public transport timetable data in GTFS format - state and territory transport authorities (2018)</li>
      <li>Pedestrian accessible street networks - Open Street Map (2018)</li>
      <li>Residential dwellings - geocoded national address file and ABS (2016)</li>
    </ul>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>Custom data</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="https://www.rmit.edu.au/research/research-institutes-centres-and-groups/research-centres/centre-for-urban-research">https://www.rmit.edu.au/research/research-institutes-centres-and-groups/research-centres/centre-for-urban-research</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGAs (Western Sydney), SUA (other cities) and SOS (all cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Public transport stops (bus and tram stops, train stations and ferry wharfs) that are serviced at least every 30 minutes from 7am to 7pm on a normal weekday are identified using timetable data from state transport authorities. Routes for pedestrian access to these are identified using walkable road networks derived from Open Street Map data. Residential addresses are identified using the geocoded national address file. Network analysis is performed to identify addresses with access to frequently serviced public transport stops. The proportion of dwellings with access is estimated using the residential sample points located within urban areas of the city geography, weighted by ABS Census Mesh Block counts.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Proportion of households</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="employment-growth">Employment growth</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The annual average percentage change in the level of employment for the previous five years. A person is classified as employed if they are 15 years or older and worked one hour or more in the reference week for the ABS Labour Force Survey. ABS Labour Force employment data are based on place of residence, not place of work.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Employment growth is an indicator of the strength of a city&rsquo;s labour market and economy. Many people gain a sense of worth from their work and enjoy greater opportunities for social engagement, which enhance both mental and physical wellbeing.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>Estimates for non-capital cities are based on modelled output and should be interpreted with caution.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>BITRE analysis of: </p>
    <ul>
      <li> Australian Bureau of Statistics - Labour Force, Australia, Detailed - Electronic Delivery (Cat no. 6291.0.55.001) </li>
      <li> Department of Jobs and Small Business - Small Area Labour Market Estimates</li>
    </ul>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>20 September 2018 (ABS Labour Force) and 25 September 2018 (Department of Jobs and Small Businness)</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/6291.0.55.001Main+Features1Aug%202018?OpenDocument">http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/6291.0.55.001Main+Features1Aug%202018?OpenDocument</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), SA4s and SA2s (Western Sydney and other cities) (ASGS 2011)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Employment growth is estimated for non-capital cities using a model based on ABS Labour Force and the Department of Jobs and Small Business Small Area Labour Market Estimates. As non-capital cities are geographic subsets of SA4s, we use the Department of Jobs small area estimates to apportion SA4 jobs growth to the city and the balance of the SA4. Employment growth for the capital cities is taken directly from the ABS Labour Force publication. Employment growth for all cities is calculated as the difference between a smoothed 12 month average for the year ended 30 June, five years apart.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="unemployment-rate">Unemployment rate</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The percentage of the labour force (aged 15+) who is unemployed. A person is classified as unemployed if they are 15 years or older, available for and seeking work, and not in paid employment.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>The unemployment rate is an indicator of the amount of spare capacity in a city&rsquo;s labour market. Being unemployed also has implications for a person&rsquo;s economic, social and emotional wellbeing.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>Estimates for non-capital cities are based on modelled output and should be interpreted with caution. The unemployment rate can understate the amount of spare capacity in the labour market when there are a lot of people who would prefer to work more hours, or give up looking for work because jobs are unavailable.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>BITRE analysis of:</p>
    <ul>
      <li> Australian Bureau of Statistics - Labour Force, Australia, Detailed - Electronic Delivery (Cat no. 6291.0.55.001) </li>
      <li> Department of Jobs and Small Business - Small Area Labour Market Estimates</li>
    </ul>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>20 September 2018 (ABS Labour Force) and 25 September 2018 (Department of Jobs and Small Businness)</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <ul>
      <li><Link href="http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/6291.0.55.001Main+Features1Aug%202018?OpenDocument">http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/6291.0.55.001Main+Features1Aug%202018?OpenDocument</Link></li>
      <li> <Link href="https://www.jobs.gov.au/small-area-labour-markets-publication">https://www.jobs.gov.au/small-area-labour-markets-publication</Link></li>
    </ul>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities); SA2s (Western Sydney and other cities) (ASGS 2011)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>The unemployment rate for the capital cities is taken directly from the ABS Labour Force publication. Estimates for the non-capital cities are derived from the Small Area Labour Market Estimates from the Department of Jobs and Samll Business. The unemployment rate for all cities is calculated as a smoothed 12 month average for the year ended 30 June.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="youth-unemployment-rate">Youth unemployment rate</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The percentage of the youth labour force (aged 15-24) who is unemployed. A person is classified as unemployed if they are available for and seeking work, and not in paid employment.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>The youth unemployment rate measures how many young people want work but can't find it. Youth unemployment is traditionally higher than the overall unemployment rate, reflecting the difficulty of entering the labour market with less experience and fewer skills. Long-term youth unemployment has economic and social implications which can take years to overcome.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>Estimates for non-capital cities are based on modelled output and should be interpreted with caution and may not reflect recent changes in the distribution of jobs across the city and the larger region. The unemployment rate can understate the amount of spare capacity in the labour market when there are a lot of people who would prefer to work more hours, or give up looking for work because jobs are unavailable.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>BITRE analysis of: </p>
    <ul>
      <li> Australian Bureau of Statistics - Labour Force, Australia, Detailed - Electronic Delivery (Cat no. 6291.0.55.001) </li>
      <li> Australian Bureau of Statistics - Census of Population and Housing 2016</li>
    </ul>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>20 September 2018 (ABS Labour Force) and 23 October 2017 (ABS Census)</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <ul>
      <li><Link href="http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/6291.0.55.001Main+Features1Aug%202018?OpenDocument">http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/6291.0.55.001Main+Features1Aug%202018?OpenDocument</Link></li>
      <li> <Link href="https://auth.censusdata.abs.gov.au/webapi/jsf/login.xhtml">https://auth.censusdata.abs.gov.au/webapi/jsf/login.xhtml</Link></li>
    </ul>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), SA4s, SUAs and SA2s (Western Sydney and other cities) (ASGS 2011)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>GCCSA (Capital cities) results are obtained from the Labour Force Survey. SUA and Western Sydney are estimates based on SA4 data from the Labour Force Survey. Census data at the SUA and SA2 levels is used to estimate what proportion of the relevant SA4s results should be apportioned to the SUA estimates. The youth unemployment rate for all cities is calculated as a smoothed 24 month average for the year ended 30 June.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="participation-rate">Participation rate</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The share of a city&rsquo;s civilian population aged 15 years and over that is in the labour force, calculated as a 12 month average. A person is classified as being in the labour force if they are either employed or unemployed.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>A city&rsquo;s participation rate and working-age population together determine the size of its labour force — the labour supply available to the local economy.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>Estimates for non-capital cities are based on modelled output and should be interpreted with caution and may not reflect recent changes in the distribution of the participation rate across the city and the larger region.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>BITRE analysis of: </p>
    <ul>
      <li> Australian Bureau of Statistics - Labour Force, Australia, Detailed - Electronic Delivery (Cat no. 6291.0.55.001) </li>
      <li> Australian Bureau of Statistics - Census of Population and Housing 2016</li>
    </ul>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>20 September 2018 (ABS Labour Force) and 23 October 2017 (ABS Census)</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <ul>
      <li><Link href="http://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/6291.0.55.003Aug%202018?OpenDocument">http://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/6291.0.55.003Aug%202018?OpenDocument</Link></li>
      <li> <Link href="https://auth.censusdata.abs.gov.au/webapi/jsf/login.xhtml">https://auth.censusdata.abs.gov.au/webapi/jsf/login.xhtml</Link></li>
    </ul>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), SA4s, SUAs and SA2s (Western Sydney and other cities) (ASGS 2011)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>GCCSA (Capital cities) results are obtained from the Labour Force Survey. SUA and Western Sydney are estimates based on SA4 data from the Labour Force Survey. Census data at the SUA and SA2 levels is used to estimate what proportion of the relevant SA4s results should be apportioned to the SUA estimates. The participation rate for all cities is calculated as a smoothed 12 month average for the year ended 30 June.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Annual</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="year-12-completion">Year 12 completion</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The proportion of a city&rsquo;s population that have completed year 12.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Educational attainment has broad implications for economic, social and health outcomes. People that attain high levels of education are, in general, better equipped to perform high-skilled work and earn higher wages. Highly educated people also tend to find it easier to move between industries or to retrain. This means a better educated labour force is usually better placed to adapt to structural changes in the economy - for example, to cope with the disruptions caused by technological change or global competition.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>None</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Census of Population and Housing 2016</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>23-Oct-17</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBar">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBar</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGAs (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Highest year of school completed is extracted from Census Tablebuilder at required geographies.</p>
    <p className={style.paragraph}>Year 12 or equivalent is included in the numerator.</p>
    <p className={style.paragraph}>Not stated and Not applicable are excluded from the denominator.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="certificate-iii-qualification-or-higher">Certificate level III, IV or diploma</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The proportion of a city's population who have completed a certificate III, IV or diploma as their highest level of educational attainment.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Educational attainment has broad implications for economic, social and health outcomes. People that attain high levels of education are, in general, better equipped to perform high-skilled work and earn higher wages. Highly educated people also tend to find it easier to move between industries or to retrain. This means a better educated labour force is usually better placed to adapt to structural changes in the economy - for example, to cope with the disruptions caused by technological change or global competition.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>This indicator does not provide information on fields of study or whether workers&rsquo; skills match what employers need.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Census of Population and Housing 2016</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>23-Oct-17</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBar">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBar</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGAs (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Highest level of educational attainment is extracted from Census Tablebuilder at required geographies.</p>
    <p className={style.paragraph}>Advanced diploma, Diploma, Certificate IV and Certificate III are included in the numerator.</p>
    <p className={style.paragraph}>Supplementary codes, Not stated and Not applicable are excluded from the denominator.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
  <div className={style.sectionContainer}>
    <h2 className={style.heading2}  id="bachelor-degree-or-higher">Bachelor degree or higher</h2>
    <h3 className={style.heading3}>Description</h3>
    <p className={style.paragraph}>The proportion of a city&rsquo;s population that have completed a bachelor degree or higher, as their highest level of educational qualification.</p>
    <h3 className={style.heading3}>Rationale</h3>
    <p className={style.paragraph}>Educational attainment has broad implications for economic, social and health outcomes. People that attain high levels of education are, in general, better equipped to perform high-skilled work and earn higher wages. Highly educated people also tend to find it easier to move between industries or to retrain. This means a better educated labour force is usually better placed to adapt to structural changes in the economy - for example, to cope with the disruptions caused by technological change or global competition.</p>
    <h3 className={style.heading3}>Limitations</h3>
    <p className={style.paragraph}>This indicator does not provide information on fields of study or whether workers&rsquo; skills match what employers need.</p>
    <h3 className={style.heading3}>Data Source</h3>
    <p className={style.paragraph}>Australian Bureau of Statistics - Census of Population and Housing 2016</p>
    <h3 className={style.heading3}>Date Published</h3>
    <p className={style.paragraph}>23-Oct-17</p>
    <h3 className={style.heading3}>Data Source Link</h3>
    <p className={style.paragraph}><Link href="http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&ref=topBar">http://www.abs.gov.au/websitedbs/D3310114.nsf/Home/Census?OpenDocument&amp;ref=topBar</Link></p>
    <h3 className={style.heading3}>Data Source Geography</h3>
    <p className={style.paragraph}>GCCSA (Capital cities), LGAs (Western Sydney) and SUA (other cities) (ASGS 2016)</p>
    <h3 className={style.heading3}>Method</h3>
    <p className={style.paragraph}>Highest level of educational attainment is extracted from Census Tablebuilder at required geographies.</p>
    <p className={style.paragraph}>Post Graduate degree, Graduate diploma, Graduate certificate and Bachelor degree are included in the numerator.</p>
    <p className={style.paragraph}>Supplementary codes, Not stated and Not applicable are excluded from the denominator.</p>
    <h3 className={style.heading3}>Unit</h3>
    <p className={style.paragraph}>Percentage</p>
    <h3 className={style.heading3}>Revision Schedule</h3>
    <p className={style.paragraph}>Five yearly</p>
    <p className={style.paragraph}><Link class="backtotop" href="#top">back to top</Link></p>
  </div>
</section>
<section className={style.sectionWrapper}>
<div className={style.sectionContainer}>
<h2 className={style.heading2}  id="gross-regional-product">Gross regional product</h2>
<h3 className={style.heading3}>Description</h3>
<p className={style.paragraph}>Gross regional product measures the monetary value of all goods and services produced in the city.</p>
<h3 className={style.heading3}>Rationale</h3>
<p className={style.paragraph}>A city's gross regional product per capita reflects the size, strength and productivity of the city's economy.</p>
<h3 className={style.heading3}>Limitations</h3>
<p className={style.paragraph}>Sub-national Gross Regional Product (GRP) estimates attempt to allocate economic activity to small regions. Partitioning GRP in this way may misallocate complex economic activity that spans regional boundaries. </p>
<p className={style.paragraph}>In addition to this difficulty, GRP estimates from the Chief Economist at the Department of Industry, Innovation and Science, from which these estimates derive, are experimental and should be interpreted with caution. GRP estimates for non-capital cities are partitioned from the SA4 level using Census income data by place of work and should be viewed as indicative and not as definitive estimates of GRP for the city. Mackay's estimate has not been published due to industry specific issues which are not accounted for in this method. Please see methodology section for further information.</p>
<h3 className={style.heading3}>Data Source</h3>
<p className={style.paragraph}>BITRE analysis of: </p>
<ul>
  <li>Department of Industry, Innovation and Science. Office of the Chief Economist (subscription service)</li>
</ul>
<h3 className={style.heading3}>Date Published</h3>
<p className={style.paragraph}>2018</p>
<h3 className={style.heading3}>Data Source Link</h3>
<p className={style.paragraph}><Link href="https://www.industry.gov.au/data-and-publications/industry-insights">https://www.industry.gov.au/data-and-publications/industry-insights</Link></p>
<h3 className={style.heading3}>Data Source Geography</h3>
<p className={style.paragraph}>SA4 (ASGS 2016)</p>
<h3 className={style.heading3}>Method</h3>
<p className={style.paragraph}>GRP estimates are from experimental estimates published by the Department of Industry, Innovation and Science. For details regarding their methodology, please see the Australian Industry Report 2016 (<Link href="https://www.industry.gov.au/australian-industry-report--2016">https://www.industry.gov.au/australian-industry-report--2016</Link>). GRP for capital cities are directly from the Department&rsquo;s estimates, while non-capital GRPs are modelled by BITRE. For non-capitals, SA4 GRP estimates are apportioned to the SUA level based on the SUA's share of the total personal income of the SA4. Total personal income is derived from Census 2016 data by place or work. Industry of employment is not taken into consideration in the apportionment process.</p>
<h3 className={style.heading3}>Unit</h3>
<p className={style.paragraph}>$ per capita</p>
<h3 className={style.heading3}>Revision Schedule</h3>
<p className={style.paragraph}>Annual</p>
  </div>
</section>

  </PageWrapper>
);

export default DataDictionary;
