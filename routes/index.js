'use strict';

var express = require('express');
var router = express.Router();

var Room = require("../models/room");

// what I would like to happen here is that
// if this is the initial page load or 
// a refresh request it will render
// the index page, but if it is
// the user selecting a room
// it will reply with all of the 
// names of the rooms. 
 // 	else if(req.body.initial)
 //  res.render("admin", {items: rooms});
	// else res.send(rooms.names)
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
