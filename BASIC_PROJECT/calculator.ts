/**
 * Let's make a calculator 🧮
 */

type Command = 'add' | 'subtract' | 'multiply' | 'divide' | 'remainder'

function calculate(command: Command, x: number, y: number): number {
  if (command == 'add') return x + y;
  else if (command == 'subtract') return x - y;
  else if (command == 'multiply') return x * y;
  else if (command == 'divide') return x / y;
  else if (command == 'remainder') return x % y;
  else throw new Error('Unknown Command!');
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('subtract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
