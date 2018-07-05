var express = require('express');
var session = require('express-session');


var app = express();

app.listen(3001);

var sessionManager;
console.log('Server is running @ 3001');

app.set('view engine','ejs');

app.use(session({
   resave: true,
     saveUninitialized: true,
     secret: "sudhakar key"
    }));

app.use(function(req, res, next) {
  res.locals.user = req.session.user;
  next();
});

app.get('/',function(req,res){
res.sendFile(__dirname + '/index.html');
});

app.get('/FormSubmitted',function(req,res){
sessionManager = req.session;
//sessionManager.UserName = req.query.txtName;
req.session.user = req.query.txtName;
//app.locals.UserName = req.query.txtName;
console.log(sessionManager.user);
res.locals.user = req.query.txtName;
res.render('details');
});


var userDetailsRoute = require('./getUserDetails');
app.use(userDetailsRoute);

app.get('/aboutus',function(req,res){
res.render('aboutus');
});