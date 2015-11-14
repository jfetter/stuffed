'use strict';

$(document).ready(init);

function init() {
  console.log('Hello jQuery!');
  $(".selectRoom").on("click", addItem)
  $(".addRoom").on("click", addRoom)
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
	console.log("in the show room")

	// $.get(function())
	// 	.done
	// 	.error

}