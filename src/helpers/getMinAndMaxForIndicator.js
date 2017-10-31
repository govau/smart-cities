export default function getMinAndMaxForIndicator(indicatorId, cities) {
  const values = cities.map(city => city.indices[indicatorId]);

  return [
    Math.min(...values),
    Math.max(...values),
  ];
}
