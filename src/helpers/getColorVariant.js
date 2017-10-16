import COLORS from '../style/_colors.scss';

export default function getColorVariant(colorBase, shade) {
  const upperColorBase = colorBase.toUpperCase();

  if (!shade) return COLORS[upperColorBase];

  const colorKey = `${upperColorBase}_${shade}`;
  const color = COLORS[colorKey];

  if (!color) {
    console.warn(`${colorKey} is not a known color`);
  }

  return color;
}
