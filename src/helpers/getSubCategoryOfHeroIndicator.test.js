import getSubCategoryOfHeroIndicator from './getSubCategoryOfHeroIndicator';

describe('getSubCategoryOfHeroIndicator', () => {
  it('should return the correct subcategory when supplied with a category', () => {
    const category = {
      heroIndicatorId: 'indicator',
      subCategories: [
        {
          charts: [],
        },
        {
          name: 'Phillip',
          charts: [
            {
              indicatorIds: ['indicator'],
            },
          ],
        },
      ],
    };

    const subCategory = getSubCategoryOfHeroIndicator(category);
    expect(subCategory.name).toBe('Phillip');
  });

  it('should should throw an error if an appropriate subcategory is not found', () => {
    const category = {
      heroIndicatorId: 'indicator',
      subCategories: [
        {
          charts: [],
        },
        {
          name: 'Roger',
          charts: [],
        },
      ],
    };

    expect(() => {
      getSubCategoryOfHeroIndicator(category);
    }).toThrow();
  });
});
