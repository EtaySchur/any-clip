'use strict';

import mongoose from 'mongoose';

var RatingSchema = new mongoose.Schema({
  videoId:  {type: String, required: true, unique: false},
  rate:  {type: Number, required: true, unique: false},
  createdAt : {type: Date, default: Date.now}
});

export default mongoose.model('Rating', RatingSchema);
