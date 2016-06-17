console.log("start arrays.js");

// arrays are parameters for all functions.

function printReverse(arr1) {
// [1,2,3,4] or ["a", "b", "c"]
	console.log("printReverse");
	for (var i = arr1.length - 1; i >= 0; i--) {
		console.log(arr1[i]);
	}

}

function isUniform(arr1) {
// [1,1,1,1] or ["a", "b", "b"]
	console.log("isUniform");
	var char1 = arr1[0];
	for (i = 1; i < arr1.length; i++) {
		if (char1 !== arr1[i]) {
			return false;
		}
	}

	return true;
}

function sumArray(arr1) {
// [1,2,3]
	console.log("sumArray");
	var total = 0;
	arr1.forEach(function(item) {
		total += item;
	});

	return total;
}

function max(arr1) {
// [100,-5]
	console.log("max");
	var max = arr1[0]; //initialize max val at first item
// added index just to show value.  there is a 3rd parm for array that isn't used too much.
	arr1.forEach(function(item, index) {
		console.log("item = " + item + "   index = " + index);
		if (item > max) {
			max = item;
		} 
	});

	return max;
}

printReverse([1,2,3,4]);
printReverse(["a","b","c"]);

console.log(isUniform([1,1,1,1]));
console.log(isUniform(["a","a","a"]));
console.log(isUniform([3,3,4,4]));

console.log(sumArray([1,2,3]));
console.log(sumArray([5,3,1,1]));

console.log(max([100,-5]));
console.log(max([-3,0,888,15]));
console.log(max([-1,-10,-3,-2]));
