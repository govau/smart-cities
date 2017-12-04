export default function getSubCategoryOfHeroIndicator(category) {
  let subCategoryName = null;

  category.subCategories.forEach((subCategory) => {
    subCategory.charts.forEach((chart) => {
      if (chart.indicatorIds.includes(category.heroIndicatorId)) {
        subCategoryName = subCategory.name;
      }
    });
  });

  return subCategoryName;
}
