import kebabCase from 'lodash/kebabCase';

// We need to refer to the sub-category section element ID in two places
// (the link to jump to that section and setting the ID)
// To be safe we use a function to generate the ID
export default function getSubCategorySectionId(categoryId) {
  return `sc-${kebabCase(categoryId)}`;
}
