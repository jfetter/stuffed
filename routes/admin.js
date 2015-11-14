'use strict';

var express = require('express');
var router = express.Router();

//var Admin = require("../models/admin")
var Room = require("../models/room");

router.get('/', function(req, res) {
 Room.find({}, function(err, rooms){
 		console.log("rooms", rooms)
 	if(err) return res.status(400).send("eror")
  res.render("admin", {space: rooms})
	}); 
});

router.post('/', function(req, res) {
	console.log("room route", req.body)
  Room.create(req.body)
  if(err) return res.status(400).send("eror")
  res.send("room created successfully");
});

// router.get("/distribute", function(req,res){
//	Room.findById({ID OF ROOM})
//	Room.findById({ID OF STORAGE})
// 	console.log("truffle shuffle time!", req.body)
//	
//		var storage = 
//  	res.render("admin", {space: rooms, storage: store}
// })



module.exports = router;