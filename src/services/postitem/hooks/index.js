"use strict";

const globalHooks = require("../../../hooks");
const hooks = require("feathers-hooks-common");

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
  find: [
    hooks.populate("user", {
      service: "users",
      field: "user_id"
    })
  ],
  get: [
    hooks.populate("user", {
      service: "users",
      field: "user_id"
    })
  ],
  create: [],
  update: [],
  patch: [],
  remove: []
};
