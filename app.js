require( './db' );

var express = require( 'express' );
var user    = require( './routes/user' )
var http    = require( 'http' );
var path    = require( 'path' );
var app     = express();

app.set( 'port', process.env.PORT || 3001 );
app.engine( 'html', engine );
app.set( 'views', path.join( __dirname, 'views' ));
app.set( 'view engine', 'ejs' );
app.use( express.logger( 'dev' ));
app.use( express.cookieParser());
app.use( express.bodyParser());
app.use( express.json());
app.use( express.urlencoded());
app.use( express.methodOverride());
app.use( express.static( path.join( __dirname, 'public' )));


if( 'development' == app.get( 'env' )){
    app.use( express.errorHandler());
}

app.get ('/',           user.index      );
app.get ('/userlist',   user.list       );
app.post('/userlist',   user.add        );
app.post('/calcnumber', user.calculate  );
app.post('/recursestr', user.recursestr );



http.createServer( app ).listen( app.get( 'port' ), function (){
    console.log( 'Express server listening on port ' + app.get( 'port' ));
});