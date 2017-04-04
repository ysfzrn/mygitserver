"use strict";

// activity-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  relatedpost_id: {  type: Schema.Types.ObjectId, required: false },
  user_id: { type: Schema.Types.ObjectId, required: true, ref: "users" },
  owner_id: { type: Schema.Types.ObjectId, required: true, ref: "users" },
  posttype:{ type: String, required: true },
  body: { type: String, required: true },
  route: { type: String, required: true },
  readed:{ type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const activityModel = mongoose.model("activity", activitySchema);

module.exports = activityModel;
