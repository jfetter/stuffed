'use strict';

$(document).ready(init);

function init() {
	console.log('Hello jQuery!');
	//populateDropDowns();
	$(".addRoom").on("click", addRoom)
	$(".addItem").on("click", addItem)
	$(".addToRoom")
}

function populateDropDowns(){
//put items in storage if they
// are not in another room

//other drop down has to be populated
// with items from the items area of the object
// ie room.items.item
// stuffs = items.item

		// if (ROOM IS STORAGE, ){
		// 	roomId == ID OF STORAGE
		// }else{
		// var roomId = {"id": selectedItem.data("id").replace (/"/g,'')};
		// }
		// var itemId ={"id": selectedRoom.data("id").replace (/"/g,'')};
		// var itemRoom = {"item": itemId, "room": roomId}
	console.log("getting selections")
	$.get("/", {"room": room, "item": item})
	.done(function(data){
		console.log("got some data")
	})
	.fail(function(err){
		console.log(err)
	})
})
	.done(function(data){
		console.log("got some data")
	})
	.fail(function(err){
		console.log(err)
	})
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




function addToRoom(){
	console.log("add to room")

		// if (ROOM IS STORAGE, ){
		// 	roomId == ID OF STORAGE
		// }else{
		// var roomId = {"id": selectedItem.data("id").replace (/"/g,'')};
		// }
		// var itemId ={"id": selectedRoom.data("id").replace (/"/g,'')};
		// var itemRoom = {"item": itemId, "room": roomId}
 		$.put("/rooms", itemRoom)
	.done(function(data){
		console.log("data", data)
	})
	.fail(function(err){
		console.log(err)
	})
	

}