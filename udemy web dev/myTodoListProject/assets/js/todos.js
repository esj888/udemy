// check off specific todos by clicking

//$("li").click(function() {
//change to on click to listen for future li's.  need to add listener to ul since li's may not exist yet.
$("ul").on("click", "li", function() {

//the following line replaced all the code below along with completed class.
	$(this).toggleClass("completed");

	// // if li is gray turn it black. else turn it gray.
	// // console.log($(this).css("color")); for debug use.  log showed rgb color so cannot compare to gray.

	// if ($(this).css("color") === "rgb(128, 128, 128)") {
	// 	// console.log("it is curretnly gray") for debug use.
	// $(this).css({
	// 	color: "black",
	// 	textDecoration: "none"  //need to use textDecoration camelcase for javascript property. dash invalid.
	// });	
	// }
	// else {
	// // $(this).css("color", "gray");
	// // $(this).css("text-decoration", "line-through");

	// // instead of the above 2 lines combine and pass object.
	// $(this).css({
	// 	color: "gray",
	// 	textDecoration: "line-through"  //need to use textDecoration camelcase for javascript property. dash invalid.
	// });		
	// }
});

//click on X to delete todo
//to stop event bubbling pass event (can be called anything)
//$("span").click(function(event) {
//change to on click for delete
$("ul").on("click", "span", function(event) {

	//li still exists when using code below
	//$(this).parent().remove();  //remove li if X is clicked.  parent() is the li... without it only the span gets deleted.
	
	//add fadeout and remove li.  replaced code above.
	//note wasn't delted when type was faceout instead of fadeOut. checked console and error faceout is not a function.
	$(this).parent().fadeOut(500,function(){  //this=span
		$(this).remove();  //removes li. this=li
	});
	event.stopPropagation();
});

//cheeck for user hitting enter key
$("input[type='text'").keypress(function(event) {
	if (event.which === 13) {
		//grab text from input
		var todoText = $(this).val();
		$(this).val(""); //clear input box
		//create new li and add to ul dynamically
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});

// //show event bubbling

// $("ul").click(function() {
// 	alert("clicked on ul");
// })

// $("#container").click(function() {
// 	alert("clicked on container div");
// })

// $("body").click(function() {
// 	alert("clicked on body");
// })
