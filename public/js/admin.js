'use strict';

$(document).ready(init);

function init() {
	console.log('Hello jQuery!');
	$(".addRoom").on("click", addRoom)
	$(".addItem").on("click", addItem)
	// $(".deleteItem").on("click", deleteItem)
	// $(".deleteRoom").on("click", deleteRoom)
}

function addRoom(){
	console.log("add room")
	var roomName = {"name": $("#roomName").val(), "createdAt": (new Date).getTime(), "items": [] };
	console.log("added room" , roomName)
	$.post("/admin", roomName)
	.done(function(data){
		console.log("data", data)
	})
	.fail(function(err){
		console.log(err)
	})
}

// function addItem(){
// 	console.log("add ITEM")
// 	var newItem = {
// 		"name": $("#itemName").val(), 
// 		"value": $("#itemValue" ).val(), 
// 		"description": $("#description").val(), 
// 		"createdAt": (new Date).getTime() 
// 	};
// 	console.log("added Item" , newItem)
// 	$.post("/items", newItem)
// 	.done(function(data){
// 		console.log("data", data)
// 		var itemId = data.items._id
// 	})
// 	.fail(function(err){
// 		console.log(err)
// 	})
// 	addItemToStorage(itemId)
// }

//this should be a utility function because I 
// need it on both pages... 
function addItemToStorage(itemId){
	var roomID; // find the id of storage and add it here
		//ADD ITEM TO STORAGE
		var url = "/:" + roomId + "/addItem/:" + itemId + "/:" 
		console.log(url)
	$.put(url)
	.done(function(data){
		console.log("data", data)
	})
	.fail(function(err){
		console.log(err)
	})
}

function deleteRoom(roomId){
	console.log(deleting room);
		var roomID; // find the id of storage and add it here
		//ADD ITEM TO STORAGE 
		console.log(url)
	$.delete("/rooms", roomID)
	.done(function(data){
		console.log("data", data)
	})
	.fail(function(err){
		console.log(err)
	})
}


