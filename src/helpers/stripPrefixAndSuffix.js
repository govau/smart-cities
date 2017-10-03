export default function stripPrefixAndSuffix(str) {
  if (typeof str === 'number') return ['', str.toString(), ''];

  if (typeof str === 'string') {
    // there is no number at all
    if (!(/\d/.test(str))) return ['', str, ''];

    const prefixMatch = str.match(/(.*?)([\d,.]+)(.*)/);

    if (!prefixMatch) return ['', str, ''];

    return [
      (prefixMatch[1] || ''),
      (prefixMatch[2] || ''),
      (prefixMatch[3] || ''),
    ];
  }

  console.warn(`Expected a number or a string. Got ${str}`);

  return ['', '', ''];
}
