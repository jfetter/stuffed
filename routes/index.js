'use strict';

var express = require('express');
var router = express.Router();

var Room = require("../models/room");
var Item = require("../models/item")

router.get('/', function(req, res) {
 Room.find({}, function(err, rooms){
 		console.log("rooms", rooms)
 	if(err) return res.status(400).send("eror")
  res.render("index", {items: rooms}) 
	}); 
});

router.post('/', function(req, res) {
	console.log(req.body)
	Room.findById(req.body.id, function(err, rooms){
		if (err) res.status(400).send("eror")
			res.send(rooms)
	})
});

module.exports = router;
