import getColorVariant from './getColorVariant';
import { COLOR_NAMES } from '../constants';

// This is only ever used by charts, hence the lack of a CONTEXT set of colors.
const CATEGORY_COLOR_MAP = {
  [COLOR_NAMES.JOBS]: [200, 500, 800, 950],
  [COLOR_NAMES.HOUSING]: [200, 400, 700, 950],
  [COLOR_NAMES.INFRASTRUCTURE]: [200, 400, 800, 950],
  [COLOR_NAMES.LIVEABILITY]: [200, 400, 700, 950],
  [COLOR_NAMES.INNOVATION]: [200, 400, 800, 950],
  [COLOR_NAMES.PLANNING]: [200, 400, 800, 950],
};

export default function getColorRange(colorName) {
  const colorShades = CATEGORY_COLOR_MAP[colorName];

  if (!colorShades) {
    console.warn(`'${colorName}' is not a known color name`);
  }

  return colorShades.map(variant => getColorVariant(colorName, variant));
}
