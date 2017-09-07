import { postData } from './fetch';

window.fetch = jest.fn();

it('should call fetch with the correct parameters', () => {
  postData('/the-url', {
    one: 'two',
    three: 'four',
  });

  expect(window.fetch).toHaveBeenCalledTimes(1);

  // first argument passed to fetch
  expect(window.fetch.mock.calls[0][0]).toBe('/the-url');

  // second argument passed to fetch
  expect(window.fetch.mock.calls[0][1]).toEqual({
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: '{"one":"two","three":"four"}',
  });
});
