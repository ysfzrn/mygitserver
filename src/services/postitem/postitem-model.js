'use strict';

// postitem-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postitemSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, required: true, ref:'users' },
  posttype: { type:String, required:true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const postitemModel = mongoose.model('postitem', postitemSchema);

module.exports = postitemModel;