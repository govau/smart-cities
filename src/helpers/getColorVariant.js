import COLORS from '../style/_colors.scss';

export default function getColorVariant(colorBase, shade) {
  const upperColorBase = colorBase.toUpperCase();

  const colorKey = shade
    ? `${upperColorBase}_${shade}`
    : upperColorBase;

  const color = COLORS[colorKey];

  if (!color) {
    console.warn(`${colorKey} is not a known color`);
  }

  return color;
}
