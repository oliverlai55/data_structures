const readline = require('readline');

let input = [];

process.stdin.setEncoding('utf8');

let rl = readline.createInterface({
	input: process.stdin,
	terminal: false,
});

rl.on('line', data => {
	input.push(data);
	if (input.length === 2) {
		let nodes = input[1].split(' ').map(node => parseInt(node));
		console.log(treeHeight(nodes));
		process.exit();
	}
});

function treeHeight(nodes) {}
