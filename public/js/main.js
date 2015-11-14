'use strict';

var roomItems; 

var storageId;// = ID OF STORAGE ROOM

$(document).ready(init);

function init() {
	console.log('Hello jQuery!');
	loadSelections();
	$("#select").on("click", selectRoom)
	// $("#addToRoom").on("click", addItemsToRoom)
	// $("#deleteFromRoom").on("click", moveItems)
}

function loadSelections(){
	console.log("getting selections")
	$.get("/", {"initial": true})
	.done(function(data){
		console.log("got some data")
	})
	.fail(function(err){
		console.log(err)
	})
}

function selectRoom(){
	var selected = $("#selRm :selected")
	var id = {"id": selected.data("id").replace (/"/g,'')};

	console.log(selected, id)
	$.post("/", id)
	.done(function(data){
		console.log("data", data)
		roomItems = data;
		//displays items in room
		showRoom();
	})
	.fail(function(err){
		console.log(err)
	})
}


function showRoom(){
	console.log("in the show room")

	var $name = roomItems.name
	var $value = roomItems.value
	var $description = roomItems.description
	var $createdAt = roomItems.createdAt

	roomItems.items.forEach(function(item, index, all){
		console.log("for each", item)
		$newRow = buildRow($name, $value, $description, $createdAt );
		$(".roomContainer").append($newRow);   
	})
}


function buildRow(name, value, description, createdAt){
	var $setRow = $('<tr>');
	var $setTd1 = $("<td>").text(roomItems.name).addClass(name);
	var $setTd2 = $("<td>").text(roomItems.value).addClass(value);
	var $setTd3 = $("<td>").text(roomItems.description).addClass(description);
	var $setTd4 = $("<td>").text(roomItems.createdAt).addClass(createdAt)

	$setRow.append($setRow, $setTd1, $setTd2, $setTd3,setTd4);
	return $setRow;
};

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
	$.get("/distribute", {"room": room})
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

function moveItems(itemId, newRoomId, oldRoomId){
		var deleteFrom()
		if ($(this).hasClass("remove"){
			deleteFrom = {"id": selected.data("id").replace(/"/g,'')}
		} else {
			deleteFrom = {"id": storageId.replace(/"/g,'')}
		}
		//eliminateAndAdd(deleteFrom);

	 	var roomId; // find the id of storage and add it here
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

function eliminateAndAdd(deleteFrom){
	var roomId;
	if (deleteFrom === "IDOFSTORAGEROOM"){
		roomId === "IDOFSTORAGEROOM"
	} else {
		roomId === deleteFrom
	}
	var selected = $("#selItem :selected")
	var itemId = {"id": selected.data("id").replace(/"/g,'')}
	$.delete("/rooms", itemId)
		.done(function(data){
		console.log("data", data)
		//addItemToNewRoom(itemId, roomId )
	})
		.fail(function(err){
		console.log(err)
	})
}
}

function addItemToRoom(itemId, roomId){
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





