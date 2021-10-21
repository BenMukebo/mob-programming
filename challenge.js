class Stack {
    constructor() {
      this.array = [];
    }
    push(number) {
      // your code here
      this.array.unshift(number);
    }
    
    pop() {
      // your code here
      return this.array.shift()
    }
  }
  
  const stack = new Stack()
  stack.push(3)
  stack.push(5)
  console.log(stack.pop())
  // => 5
  
  stack.push(2)
  stack.push(7)
  console.log(stack.pop())
  // => 7
  
  console.log(stack.pop())
  // => 2
  
  console.log(stack.pop())
  // => 3
  
  module.exports = Stack