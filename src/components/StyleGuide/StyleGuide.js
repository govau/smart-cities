import React from 'react';
import ColorRow from './ColorRow/ColorRow';
import TypographyRow from './TypographyRow/TypographyRow';
import style from './StyleGuide.scss';

const COLOR_GROUPS = [
  'primary',
  'jobs',
  'housing',
  'infrastructure',
  'liveability',
  'innovation',
  'planning',
  'extra',
];

const TINTS = [
  '700',
  '600',
  '500',
  '400',
  '100',
  '050',
];

const COLORS = COLOR_GROUPS.map(group => (
  TINTS.map((tint) => {
    const colorId = `${group}--${tint}`;

    return {
      className: style[`color-${colorId}`],
      variableName: colorId,
    };
  })
));

const SPECIAL_COLORS = [
  'black',
  'grey--700',
  'grey--500',
  'grid',
  'white',
  'badge',
  'highlight',
];

COLORS.push(SPECIAL_COLORS.map(special => ({
  className: style[`color-${special}`],
  variableName: special,
})));

const TYPE_DATA = [
  {
    variableName: 'type-detail-text',
    sampleText: 'The quick brown fox The quick brown fox jumped over the lazy dog',
  },
  {
    variableName: 'type-detail-text--bold',
    sampleText: 'The quick brown fox The quick brown fox jumped over the lazy dog',
  },
  {
    variableName: 'type-badge-text',
    sampleText: 'Badge text',
  },
  {
    variableName: 'type-h1',
    sampleText: 'Heading one',
  },
  {
    variableName: 'type-h3',
    sampleText: 'Heading three',
  },
  {
    variableName: 'type-nav-horizontal',
    sampleText: 'Horizontal navigation',
  },
  {
    variableName: 'type-nav-horizontal--selected',
    sampleText: 'Selected horizontal navigation',
  },
  {
    variableName: 'type-nav-vertical',
    sampleText: 'Vertical navigation',
  },
  {
    variableName: 'type-intro-text',
    sampleText: 'An introduction',
  },
  {
    variableName: 'type-indicator-card-title--large',
    sampleText: 'Large indicator card title',
  },
  {
    variableName: 'type-indicator-card-header--large',
    sampleText: 'Large indicator card text',
  },
  {
    variableName: 'type-indicator-card-header--small',
    sampleText: 'Small indicator card text',
  },
  {
    variableName: 'type-indicator-card-number--large',
    sampleText: '77',
  },
  {
    variableName: 'type-indicator-card-number--small',
    sampleText: '77',
  },
  {
    variableName: 'type-indicator-card-symbol--large',
    sampleText: '$',
  },
  {
    variableName: 'type-indicator-card-symbol--small',
    sampleText: '$',
  },
  {
    variableName: 'type-section-button',
    sampleText: 'Click me',
  },
];

const TYPES = TYPE_DATA.map(typeData => ({
  ...typeData,
  className: style[typeData.variableName],
}));

const StyleGuide = () => (
  <div className={style.pageWrapper}>
    <div className={style.colorsWrapper}>
      <h1 className={style.sectionText}>Colours</h1>

      {COLORS.map(colorRow => (
        <ColorRow colors={colorRow} />
      ))}
    </div>


    <h1 className={style.sectionText}>Typography</h1>

    {TYPES.map(typeRow => (
      <TypographyRow
        className={typeRow.className}
        variableName={typeRow.variableName}
        sampleText={typeRow.sampleText}
      />
    ))}
  </div>
);

export default StyleGuide;
