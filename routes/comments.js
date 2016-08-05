var express = require('express');
var router = express.Router();
var databaseConnection = require("../database_connection");

router.get('/', function(req, res, next) {
    databaseConnection("site")
    .first()
    .where("url", req.query.site_url)
    .then(function(site){
        return databaseConnection("comment").where("site", parseInt(site.id)).orderBy("id", "desc");
    }).then(function(comments){
        res.send(comments);
    });
});

router.post('/', function(req, res, next) {
    databaseConnection("site")
    .first()
    .where("url", req.body.site_url)
    .then(function(site){
        if (!site){
            return databaseConnection("site").insert({
                url: req.body.site_url
            }).returning("id");
        } else {
            return site.id;
        }
    }).then(function(siteId){
        return databaseConnection("comment").insert({
            message: req.body.message,
            site: siteId
        });
    }).then(function(){
        res.render("index");
    });
});

module.exports = router;
