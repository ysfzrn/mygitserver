'use strict';

// issue-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const issueSchema = new Schema({
  postid: { type: Schema.Types.ObjectId, required: true, ref:'postitems' },
  title: { type: String, required: true },
  text: { type: String, required: true },
  status:{ type: Boolean, required: true },
  category:{type:String,required:true, 'default':'I'},
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const issueModel = mongoose.model('issue', issueSchema);

module.exports = issueModel;