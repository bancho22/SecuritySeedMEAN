/**
 * Created by Bancho on 12-Apr-16.
 */

var express = require('express');
var router = express.Router();

router.get("/names", function(req, res){
    res.json([{name : "Peter"}, {name : "Kurt"}, {name : "Justin"}]);
});

router.get("/hellos", function(req, res){
    res.json([{msg : "Hello world!"}, {msg : "Hello all!"}, {msg : "Hello guys and gals!"}]);
});

module.exports = router;
