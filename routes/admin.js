'use strict';

var express = require('express');
var router = express.Router();

//var Admin = require("../models/admin")
var Room = require("../models/room");

router.get('/', function(req, res) {
 Room.find({}, function(err, rooms){
 		console.log("rooms", rooms)
 	if(err) return res.status(400).send("eror")
  res.render("admin", {items: rooms});
	}); 
});

router.post('/', function(req, res) {
	console.log("room route", req.body)
  Room.create(req.body)
  res.send(req.query);
});


module.exports = router;