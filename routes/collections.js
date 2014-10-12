var express = require('express');
var mongo = require('../libs/mongo');

function getCollections(req, res) {
    mongo.getCollections(function (collections) {
        res.status(200)
            .send({collections: collections});
    });
}
module.exports.get = getCollections;

