var mongoose = require( 'mongoose' );
var userlist = mongoose.model( 'userlist' );



exports.index = function(req, res) {
    res.render('index.html');
}
exports.list = function(req, res) {
    userlist.find(function(err,userlist) {
        console.log(userlist);
        if (err)
            res.send(err)
        res.json(userlist);
    });
}

exports.add = function(req, res) {
    console.log(req.body.user_lastname);
    console.log(req.body.user_firstname);
    userlist.create({
        user_lastname : req.body.user_lastname,
        user_firstname : req.body.user_firstname,
        done : false
    }, function(err, name) {
        console.log(name);
        console.log(err);
        if (err)
            res.send(err);
        userlist.find(function(err,names) {
            if (err)
                res.send(err)
            res.json(names);
        });
    });

}

exports.calculate = function(req , res){
    var number = req.body.number;
    var sumnum = function(num) {
        var remainder = num % 10;
        var sum = remainder;
        var mancac = (num - remainder) / 10;
        if ( mancac )
            sum += sumnum(mancac);
        return (sum > 9 ? sumnum(sum) : sum);
    };
    var count = sumnum(number);
    res.json(count);
};

exports.recursestr = function(req , res){
    var string = req.body.string ;
    var recurstext = function(text){
        if (text === "") {
            return "";
        } else {
            return recurstext(text.substr(1)) + text.charAt(0);
        }
    };
    recurstring = recurstext(string);
    res.json(recurstring);
}
