'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('postitem service', function() {
  it('registered the postitems service', () => {
    assert.ok(app.service('postitems'));
  });
});
