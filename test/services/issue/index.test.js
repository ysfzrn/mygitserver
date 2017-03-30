'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('issue service', function() {
  it('registered the issues service', () => {
    assert.ok(app.service('issues'));
  });
});
