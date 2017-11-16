import React from 'react';
import ColorRow from './ColorRow/ColorRow';
import TypographyRow from './TypographyRow/TypographyRow';
import Icon from '../Icon/Icon';
import iconDefinitions from '../Icon/iconDefinitions';
import style from './StyleGuide.scss';

const COLOR_GROUPS = [
  'primary',
  'jobs',
  'housing',
  'infrastructure',
  'liveability',
  'innovation',
  'planning',
];

const TINTS = [
  '020',
  '040',
  '060',
  '080',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
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
  'white',
  'grey--040',
  'grey--060',
  'grey--080',
  'grey--200',
  'grey--300',
  'grey--400',
  'grey--500',
  'grey--700',
  'grey--800',
  'grey--900',
  'grey--950',
  'black',
  'badge',
  'highlight',
];

COLORS.push(SPECIAL_COLORS.map(special => ({
  className: style[`color-${special}`],
  variableName: special,
})));

const TYPES = [
  { fontSize: 90, fontWeight: 200 },
  { fontSize: 72, fontWeight: 300 },
  { fontSize: 48, fontWeight: 200 },
  { fontSize: 44, fontWeight: 300 },
  { fontSize: 44, fontWeight: 200 },
  { fontSize: 36, fontWeight: 300 },
  { fontSize: 30, fontWeight: 300 },
  { fontSize: 24, fontWeight: 500 },
  { fontSize: 24, fontWeight: 300 },
  { fontSize: 22, fontWeight: 300 },
  { fontSize: 20, fontWeight: 500 },
  { fontSize: 16, fontWeight: 500 },
  { fontSize: 16, fontWeight: 400 },
  { fontSize: 14, fontWeight: 400 },
  { fontSize: 12, fontWeight: 700 },
  { fontSize: 12, fontWeight: 500 },
  { fontSize: 12, fontWeight: 400 },
  { fontSize: 11, fontWeight: 300 },
];

const StyleGuide = () => (
  <div className={style.pageWrapper}>
    <div className={style.colorsWrapper}>
      <h1 className={style.sectionText}>Colours</h1>

      {COLORS.map(colorRow => (
        <ColorRow key={colorRow[0].variableName} colors={colorRow} />
      ))}
    </div>

    <h1 className={style.sectionText}>Icons</h1>

    <div className={style.iconsWrapper}>
      {Object.keys(iconDefinitions).map(iconKey => (
        <div className={style.iconWrapper} key={iconKey}>
          <Icon
            icon={iconKey}
            size={64}
          />
          <p className={style.code}>{iconKey}</p>
        </div>
      ))}
    </div>

    <h1 className={style.sectionText}>Typography</h1>

    {TYPES.map(type => (
      <TypographyRow
        key={type.fontSize + type.fontWeight}
        style={type}
      />
    ))}
  </div>
);

export default StyleGuide;
