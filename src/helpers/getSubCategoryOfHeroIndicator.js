export default function getSubCategoryOfHeroIndicator(category) {
  let subCategory = null;

  category.subCategories.forEach((subCat) => {
    subCat.charts.forEach((chart) => {
      if (chart.indicatorIds.includes(category.heroIndicatorId)) {
        subCategory = subCat;
      }
    });
  });

  if (!subCategory) {
    throw new Error('Could not find subcategory of hero indicator');
  }

  return subCategory;
}
