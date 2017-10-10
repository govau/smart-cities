import blockScroll from './blockScroll';

it('should add a block-scroll class to body', () => {
  document.body.className = '';

  blockScroll(true);

  expect(document.body.className).toBe('block-scroll');
});

it('should remove a block-scroll class from body', () => {
  document.body.className = 'block-scroll';

  blockScroll(false);

  expect(document.body.className).toBe('');
});
