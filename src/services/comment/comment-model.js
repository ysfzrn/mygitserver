'use strict';

// comment-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  user_id      : { type: Schema.Types.ObjectId, required: true, ref:'users' },
  relatedid    : { type: Schema.Types.ObjectId, required: true, ref:'issues' },
  text         : { type: String, required: true },
  createdAt    : { type: Date, 'default': Date.now },
  updatedAt    : { type: Date, 'default': Date.now }
});

const commentModel = mongoose.model('comment', commentSchema);

module.exports = commentModel;