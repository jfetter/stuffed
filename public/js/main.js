'use strict';

$(document).ready(init);

function init() {
  console.log('Hello jQuery!');
  $("#select").on("click", selectRoom)
  $(".room").on("click", showRoom)
}

function selectRoom(){
	
	var roomName = {"name": $("#sel").val(), "createdAt": (new Date).getTime(), "items": [] };
	console.log(roomName)
	$.post("/", roomName)
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

