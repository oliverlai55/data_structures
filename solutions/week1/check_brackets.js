const readline = require('readline');
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
	input: process.stdin,
});

const readLine = line => {
	console.log(checkBrackets(line));
	process.exit();
};

rl.on('line', readLine);

const checkBrackets = str => {
	let indexOfStr;
	let stack = [];
	// for (let char of str) {
	// 	if (char === '(' || '[' || '{') {
	// 		stack.push(char);
	// 	} else {
	// 		// check if stack is empty
	// 		console.log(stack.length);
	//
	// 		let top = stack.pop();
	// 		console.log('top', top);
	// 		if ((top === '[' && char != ']') || (top === '(' && char != ')')) {
	// 			return false;
	// 		}
	// 	}
	// }

	for (let index in str) {
		let char = str[index];

		if (char === '(' || '[' || '{') {
			// console.log('char', char);
			stack.push(char);
			console.log(stack);
		} else {
			let top = stack.pop();
			if (
				(top === '[' && char !== ']') ||
				(top === '(' && char !== ')') ||
				(top === '{' && char !== '}')
			) {
				indexOfStr = index * 1 + 1;
				return indexOfStr;
			} else {
				stack.pop();
			}
		}
	}
	let result = stack.length ? indexOfStr : 'Success';
	// console.log(result);
	return result;
};
