console.log("moviesdb.js");

var movies = [
	{
		title: "Star Wars",
		rating: "*****",
		watched: true
	},
	{
		title: "Scary Movie V",
		rating: "*",
		watched: true
	},
	{
		title: "Captain America",
		rating: "*****",
		watched: false
	}
]

//forEach option
movies.forEach(function(obj, index) {
	console.log(index);
	console.log(obj.title);
	console.log(obj.rating);
	if (obj.watched === true) {
		console.log("Have watched.");
	}
	else {
		console.log("Didn't watch.");
	}
});

// for loop option
// for (var i = 0; i < movies.length; i++) {
// 	console.log(movies[i].title);
// 	console.log(movies[i].rating);
// 	if (movies[i].watched === true) {
// 		console.log("Have watched.");
// 	}
// 	else {
// 		console.log("Didn't watch.");
// 	}
// }

