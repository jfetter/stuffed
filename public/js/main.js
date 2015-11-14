'use strict';

var roomItems; 

$(document).ready(init);

function init() {
	console.log('Hello jQuery!');
	loadSelections();
	$("#select").on("click", selectRoom)
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
	var selected = $("#sel :selected")
	var id = {"id": selected.data("id").replace (/"/g,'')};

	console.log(selected, id)
	$.post("/", id)
	.done(function(data){
		console.log("data", data)
		roomItems = data;
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






