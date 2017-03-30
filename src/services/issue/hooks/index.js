'use strict';
const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks-common');


exports.before = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [ hooks.populate('postitem', {
            service: 'postitems',
            field: 'postid'
          })],
  get: [hooks.populate('postitem', {
            service: 'postitems',
            field: 'postid'
          })],
  create: [],
  update: [],
  patch: [],
  remove: []
};

function myHook(app){
  console.log('msg')
   return console.log(app)
};

/*app.service('messages').after({
  find: hooks.populate('user', {
    service: 'users',
    field: 'user_id'  
  })
});*/

/*const myHook = options => { // always wrap in a function so you can pass options and for consistency.
  return hook => {
    console.log('My custom hook ran');
    return Promise.resolve(hook); // A good convention is to always return a promise.
  };
};*/