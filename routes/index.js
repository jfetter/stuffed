'use strict';

var express = require('express');
var router = express.Router();

var Room = require("../models/room");

router.get('/', function(req, res) {
 Room.find({}, function(err, rooms){
 		console.log("rooms", rooms)
 	if(err) return res.status(400).send("eror")
  res.render("index");// {items: rooms}
	}); 
});

router.post('/', function(req, res) {
  // console.log(req.query);
  res.send(req.query);
});


module.exports = router;
