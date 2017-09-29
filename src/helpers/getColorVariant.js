import COLORS from '../style/_colors.scss';

export default function getColorVariant(colorBase, shade) {
  const upperColorBase = colorBase.toUpperCase();

  if (!shade) return COLORS[upperColorBase];

  return COLORS[`${upperColorBase}_${shade}`];
}
