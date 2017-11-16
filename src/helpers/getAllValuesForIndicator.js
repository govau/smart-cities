export default function getAllValuesForIndicator(indicatorId, cities) {
  return (cities
    .map(city => city.indices[indicatorId])
    .filter(n => n) // skip nulls
    .sort((a, b) => b - a));
}
