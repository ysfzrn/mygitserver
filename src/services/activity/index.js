'use strict';

const service = require('feathers-mongoose');
const activity = require('./activity-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: activity,
    paginate: {
      default: 50,
      max: 75
    }
  };

  // Initialize our service with any options it requires
  app.use('/activities', service(options));

  // Get our initialize service to that we can bind hooks
  const activityService = app.service('/activities');

  // Set up our before hooks
  activityService.before(hooks.before);

  // Set up our after hooks
  activityService.after(hooks.after);
};
