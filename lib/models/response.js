'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ResponseSchema = new Schema({
        pollId:Number,
        responses : [
                {
                        questionId: Number,
                        response : String,
                        correspondentRef:String
                }
        ]
});
mongoose.model('Response', ResponseSchema);