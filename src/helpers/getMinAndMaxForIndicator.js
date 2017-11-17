export default function getMinAndMaxForIndicator(indicatorId, cities) {
  const values = cities.map(city => city.indicators[indicatorId]).filter(n => n);

  return [
    Math.min(...values),
    Math.max(...values),
  ];
}
