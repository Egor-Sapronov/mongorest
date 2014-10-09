var express = require('express');
var router = express.Router();
var mongo = require('../libs/mongo');

router.get('/', function (req, res) {
    var names = mongo.getCollections();
    res.status(200).send({collections: names});
});

module.exports = router;
