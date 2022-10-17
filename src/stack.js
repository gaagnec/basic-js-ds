const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = arr[];
  }
  push(element) {
    this.stack[stack.lenght + 1] = value;
    stack.lenght += 1;
  }
  peek() {
    console.log(this.stack[stack.lenght]);
    return 1;
  }

  pop() {
    console.log(this.stack[stack.lenght]);
    stack.lenght -= 1;
    return 1;
  }
}

module.exports = {
  Stack,
};
