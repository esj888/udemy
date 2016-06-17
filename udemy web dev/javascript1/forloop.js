console.log("Print all numbers between -10 and 19");
for (var count1 = -9; count1 < 19; count1++) {
	console.log(count1);
}

console.log("Print all even numbers between 10 and 40");
var count2 = 10;
for (var count2 = 10; count2 < 40; count2 += 2) {
	console.log(count2);
}

console.log("Print all odd numbers between 300 and 333");
for (var count3 = 300; count3 < 333; count3 += 1) {
	if (count3 % 2 === 1) {
		console.log(count3);
	}
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
for (var count4 = 5; count4 < 50; count4 += 1) {
	if (count4 % 5 === 0 && count4 % 3 === 0) {
		console.log(count4);
	}
}
