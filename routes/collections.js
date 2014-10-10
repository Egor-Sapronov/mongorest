var express = require('express');
var router = express.Router();
var mongo = require('../libs/mongo');

router.get('/', function (req, res) {
    mongo.getCollections(function (collections) {
        res.status(200)
            .send({collections: collections});
    });

});

module.exports = router;
