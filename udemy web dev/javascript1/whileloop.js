console.log("Print all numbers between -10 and 19");
var count1 = -9;
while (count1 < 19) {
	console.log(count1);
	count1++;
}

console.log("Print all even numbers between 10 and 40");
var count2 = 10;
while (count2 < 40) {
	console.log(count2);
	count2 += 2;
}

console.log("Print all odd numbers between 300 and 333");
var count3 = 300;
while (count3 < 333) {
	if (count3 % 2 === 1) {
		console.log(count3);
	}
	count3 += 1;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
var count4 = 5;
while (count4 < 50) {
	if (count4 % 5 === 0 && count4 % 3 === 0) {
		console.log(count4);
	}
	count4 += 1;
}
