console.log("start color_changer.js");

var button = document.querySelector("button");

button.addEventListener("click", function() {	
	// another option:
	// var body = document.querySelector("body");
	// body.classList.toggle("purple");

	document.body.classList.toggle("purple");
});