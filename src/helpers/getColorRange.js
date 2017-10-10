import color from 'color';

export default function getColorRange(startColorCode, numberOfColours) {
  const darkenBy = (1 / numberOfColours) + 0.15; // magic number, just tweaked till it looked nice

  let currentColor = color(startColorCode).hsl().lightness(60);

  const colors = [];

  for (let i = 0; i < numberOfColours; i += 1) {
    colors.push(currentColor.rgb().string());

    currentColor = currentColor.darken(darkenBy);
  }

  return colors;
}
