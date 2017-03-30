'use strict';

const service = require('feathers-mongoose');
const postitem = require('./postitem-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: postitem,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/postitems', service(options));

  // Get our initialize service to that we can bind hooks
  const postitemService = app.service('/postitems');

  // Set up our before hooks
  postitemService.before(hooks.before);

  // Set up our after hooks
  postitemService.after(hooks.after);
};
