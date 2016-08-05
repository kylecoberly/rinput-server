var express = require('express');
var router = express.Router();
var databaseConnection = require("../database_connection");

router.post('/', function(req, res, next) {
    databaseConnection("comment").insert({
        message: req.body.message
    }).then(function(){
        res.sendStatus(201);
    });
});

module.exports = router;
