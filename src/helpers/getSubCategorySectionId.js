import kebabCase from 'lodash/kebabCase';

// We need to refer to the sub-category section element ID in several places
// (the section element ID and the links to jump to that section)
// To be safe we use a function to generate the ID
export default function getSubCategorySectionId(subCategoryName) {
  return `sc-${kebabCase(subCategoryName)}`;
}
