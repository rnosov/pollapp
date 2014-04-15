'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({
        pollId : Number,
        title : String,
        description: String,
        startDate: Date,
        endDate: Date,
        questions:[
                        {
                                questionId: Number,
                        question : String,
                        options : Array,
                        format: String
                        }
                ]
});
mongoose.model('Poll', PollSchema);
