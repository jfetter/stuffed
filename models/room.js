'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Room;

let roomSchema = Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, required: true, default: new Date() },
  items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
 });

Room = mongoose.model('Room', roomSchema);

//create a room of requirement to stick all the stuff that is not
//currently in a room. Make that room undeletable

module.exports = Room;

