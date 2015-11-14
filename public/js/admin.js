'use strict';

$(document).ready(init);

function init() {
	console.log('Hello jQuery!');
	$(".addRoom").on("click", addRoom)
	$(".addItem").on("click", addItem)
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

function addItem(){
	console.log("add ITEM")
	var newItem = {
		"name": $("#itemName").val(), 
		"value": $("#itemValue" ).val(), 
		"description": $("#description").val(), 
		"createdAt": (new Date).getTime() 
	};
	console.log("added Item" , newItem)
	$.post("/items", newItem)
	.done(function(data){
		console.log("data", data)
	})
	.fail(function(err){
		console.log(err)
	})
}


function moveStuff(){
	console.log("in the show room")

	// $.get(function())
	// 	.done
	// 	.error

}