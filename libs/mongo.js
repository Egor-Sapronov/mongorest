var mongoose = require('mongoose');
var log = require('./log')(module);
var config = require('./config');

mongoose.connect(config.get('mongoose:uri'));
var connection = mongoose.connection;

connection.on('error', function (err) {
    log.error('connectionDb error:', err.message);
});

connection.on('open', function callback() {
    log.info("Connected to DB!");


});

module.exports.getCollections = function (callback) {
    connection.db.collectionNames(function (err, collections) {
        var names = [];

        if (err) {
            log.error(err.message);
        }
        else {
            collections.forEach(function (collection) {
                names.push(collection.name);
            });

            callback(names);
        }
    });
};