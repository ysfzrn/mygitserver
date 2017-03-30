'use strict';

// task-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title:{ type: String, required: true },
  text: { type: String, required: true },
  status:{ type: Number, required: true },
  user_id: { type: Schema.Types.ObjectId, ref:'users' },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const taskModel = mongoose.model('task', taskSchema);

module.exports = taskModel;