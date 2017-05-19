var express = require('express');
var burger = require('../models/burger.js');
var bodyParser = require('body-parser');
var connection = require('../config/connection.js');
var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {

        res.render("index", { burgers: data });
    });

});

router.post("/", function(req, res) {
    burger.insertOne(req.body.burger_name, function() {

        res.redirect("/");
    });
});


router.put("/:id", function(req, res) {
    burger.updateOne(req.params.id, function() {

        res.redirect("/");

    });
});

module.exports = router;
