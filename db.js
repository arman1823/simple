var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var userlist = new Schema({
    user_id         : String,
    user_firstname  : String,
    user_lastname   : String,
    done            : Boolean
})

mongoose.model( 'userlist' , userlist);

mongoose.connect( 'mongodb://simple:simpletask@troup.mongohq.com:10091/SimpleTask' );