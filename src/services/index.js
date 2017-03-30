'use strict';
const comment = require('./comment');
const task = require('./task');
const postitem = require('./postitem');
const issue = require('./issue');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(issue);
  app.configure(postitem);
  app.configure(task);
  app.configure(comment);
};
