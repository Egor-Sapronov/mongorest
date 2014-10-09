var mongoose = require('mongoose');
var log = require('./log')(module);
var config = require('./config');

mongoose.connect(config.get('mongoose:uri'));
var connection = mongoose.connection;

connection.on('error', function (err) {
    log.error('connectionDb error:', err.message);
});

connection.once('open', function callback() {
    log.info("Connected to DB!");

    module.exports.getCollections = function () {
        var collections = connection.modelNames();
        return collections;
    };
});


