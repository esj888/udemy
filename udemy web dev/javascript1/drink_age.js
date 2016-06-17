console.log("start drink_age.js");

var age = prompt("How old are you? ");

if (age < 0) {
	alert("Error. Invalid age.");
}
else if (age < 21) {
	alert("Sorry too young to drink");
}
else if (age == 21) {
	alert("happy 21st birthday");
}
else if (age > 21) {
	alert("come in and enjoy")
}

if (age % 2 === 1) {
	alert("your age is odd!");
}

var perfectSqr = Math.sqrt(age) % 1;
console.log("perfectSqr = " + perfectSqr);	

if (perfectSqr == 0) {
	alert("your age is a perfect square!");
}
