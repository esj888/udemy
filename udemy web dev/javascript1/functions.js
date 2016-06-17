console.log("start functions.js");

function isEven (num1) {
	if (num1 % 2 === 0) {
		return true;
	}
	else {
		return false;
	}

}

function factorial (num2) {
	if (num2 === 0 || num2 === 1) {
		return (1);
	}

	for (var i = num2 - 1; i > 1; i--) {
		num2 *= i;
	}
	return (num2);
}

function kebabToSnake (kebab) {
	for (var i = kebab.length; i > 0; i--) {
		kebab = kebab.replace("-", "_");
	}
	return (kebab);
}

console.log(isEven(3));
console.log(isEven(10));
console.log(isEven(12));
console.log(isEven(7));

console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(0));
console.log(factorial(10));

console.log(kebabToSnake("this-is-a-kebab"));
console.log(kebabToSnake("another-kebab-test"));
console.log(kebabToSnake("this_is_a_snake"));
