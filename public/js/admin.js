'use strict';

$(document).ready(init);

function init() {
  console.log('Hello jQuery!');
  $("button").on("click", addRoom)
  $("#room").on("click", showRoom)
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

function showRoom(){
	console.log("in the show room")

	// $.get(function())
	// 	.done
	// 	.error

}