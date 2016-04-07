'use strict';

import mongoose from 'mongoose';

var VideosSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: false},
    type: {type: String, required: true, unique: false},
    description: {type: String, required: true, unique: false},
    videoLink: {type: String, required: true, unique: false},
    thumbnailUrl : {type: String, required: true, unique: false} ,
    createdAt: Date
});

export default
mongoose.model('Videos', VideosSchema);
