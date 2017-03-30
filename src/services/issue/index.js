'use strict';

const service = require('feathers-mongoose');
const issue = require('./issue-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: issue,
    paginate: {
      default: 10,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/issues', service(options));

  // Get our initialize service to that we can bind hooks
  const issueService = app.service('/issues');

  // Set up our before hooks
  issueService.before(hooks.before);

  // Set up our after hooks
  issueService.after(hooks.after);
};
