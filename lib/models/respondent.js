'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RespondentSchema = new Schema({
        firstNames : String,
        surname: String,
        email: String,
        ref: String,
        address:{
                premiseNumber:Number,
                premiseName:String,
                postcode:String,
                lat:Number,
                'long':Number
        }
});
mongoose.model('Respondent', RespondentSchema);
