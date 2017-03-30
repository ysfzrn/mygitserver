'use strict';

const service = require('feathers-mongoose');
const task = require('./task-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: task,
    paginate: {
      default: 100,
      max: 100
    }
  };

  // Initialize our service with any options it requires
  app.use('/tasks', service(options));

  // Get our initialize service to that we can bind hooks
  const taskService = app.service('/tasks');

  // Set up our before hooks
  taskService.before(hooks.before);

  // Set up our after hooks
  taskService.after(hooks.after);
};
