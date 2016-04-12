/**
 * Created by Bancho on 12-Apr-16.
 */

var MongoClient = require('mongodb').MongoClient;
var connection;
var connect = function(url, done) {
    if (connection) return done();

    MongoClient.connect(url, function(err, db) {
        if (err){
            return done(err);
        }
        connection = db;
        console.log("Connection to Mongo database successful");
        done();
    })
};
var get = function() {
    return connection;
};
var close = function(done) {
    if (connection) {
        connection.close(function(err, result) {
            connection= null;
            if(err){
                return done(err);
            }
            console.log("Mongo conn closed");
            done();
        })
    }
};
module.exports.connect = connect;
module.exports.get = get;
module.exports.close = close;

/*
module.exports = {
    'secret': 'BanchoIsAwesome',
    'database': 'mongodb://127.0.0.1:27017/test'
};
*/