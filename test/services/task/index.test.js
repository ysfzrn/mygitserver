'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('task service', function() {
  it('registered the tasks service', () => {
    assert.ok(app.service('tasks'));
  });
});
