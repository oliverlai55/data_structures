const readline = require('readline');
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
})

const readLine = line => {
  console.log(checkBrackets(line));
  process.exit();
}

rl.on('line', readLine);

const checkBrackets = (str) => {
  let stack = [];
  for (let char of str ) {
    if (char === '(' || '[') {
      stack.push(char);
    } else {
      // check if stack is empty
      if
    }
  }
}