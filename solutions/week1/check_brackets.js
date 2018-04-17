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
  if (str.length == 0) return false;

  let matchingOpenBracket, char, index, result
  let stack = [];

  let openingBrackets = ['[', '(', '{'];
  let closingBrackets = [']', ')', '}'];

  for (index = 0; index < str.length; index++) {
    char = str[index];

    if (closingBrackets.indexOf(char) > -1) {
      matchingOpenBracket = openingBrackets[closingBrackets.indexOf(char)]
      if (stack.length == 0 || (stack.pop() != matchingOpenBracket)) {
        index = index * 1 + 1;
        return index;
      }
    } else {
      stack.push(char);
    }
  }
  result = stack.length == 0 ? 'Success' : index;
  return result;
}
