'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('imageupload service', function() {
  it('registered the imageuploads service', () => {
    assert.ok(app.service('imageuploads'));
  });
});
