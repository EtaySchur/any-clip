'use strict';

import mongoose from 'mongoose';

var CommentSchema = new mongoose.Schema({
    text: {type: String, required: true, unique: false},
    videoId: {type: String, required: true, unique: false},
    createdAt : {type: Date, default: Date.now}
});

export default mongoose.model('Comment', CommentSchema);
