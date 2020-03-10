function castToNumberIfPossible(value) {
  return Number(value) || value;
}

function urlParamExtractor(fragment) {
  // 3?sort=desc&limit=10 -> ['sort=desc', 'limit=10']
  const params = fragment.split('?')[1].split('&');
  const result = {};
  params.forEach(textParam => {
    const parts = textParam.split('=');
    result[parts[0]] = castToNumberIfPossible(parts[1]);
  });
  return result;
}

/**
 * Extract path variables and query params from a url.
 */
module.exports = function urlParser(url, format) {
  // Remove empty left element.
  const tokens = format.split('/').filter(item => !!item.length);
  let result = {};
  tokens.forEach((token, index) => {
    const isVariable = token.includes(':');
    if (!isVariable) {
      return;
    }
    const urlFragments = url.split('/').filter(item => !!item.length);
    const fragment = urlFragments[index];
    const resultKey = token.replace(':', '');
    const fragmentIncludesParams = fragment.includes('?');
    if (fragmentIncludesParams) {
      const params = urlParamExtractor(fragment);
      result = {
        ...result,
        ...params
      };
      const fragmentValue = fragment.split('?')[0];
      result[resultKey] = castToNumberIfPossible(fragmentValue);
    } else {
      result[resultKey] = castToNumberIfPossible(fragment);
    }
  })
  return result;
}