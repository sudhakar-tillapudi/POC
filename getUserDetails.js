var express = require('express');
var miniapp = express.Router();


miniapp.get('/getUserDetails',function(req,res){
    var sess = req.session;
res.send('displaying users data : '+sess.user);
});

module.exports = miniapp;