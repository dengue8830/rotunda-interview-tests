const assert = require('assert').strict;
const urlParser = require('./urlParser');

assert.deepEqual(urlParser('/6/api/listings/3?sort=desc&limit=10', '/:version/api/:collection/:id'), {
  version: 6,
  collection: 'listings',
  id: 3,
  sort: 'desc',
  limit: 10
});

assert.deepEqual(urlParser('/6/api/listings/3', '/:version/api/:collection/:id'), {
  version: 6,
  collection: 'listings',
  id: 3
});

assert.deepEqual(urlParser('/1/auth/users/8/77?sort=asc&limit=90&order=id', '/:version/:api/:collection/:id/:subid'), {
  version: 1,
  api: 'auth',
  collection: 'users',
  id: 8,
  subid: 77,
  sort: 'asc',
  limit: 90,
  order: 'id'
});