

// basic implementation

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "No elements in the stack";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        return this.items;
    }
    findMiddle() {
      if (this.stack.length === 0) {
        console.log("Stack is empty!");
        return null;
      }
      let middleIndex = Math.floor(this.stack.length / 2);
      return this.stack[middleIndex];
    }
  
}

let stack4 = new Stack();
stack4.push(10);
stack4.push(20);
stack4.push(30);
console.log(stack4.pop());
console.log(stack4.peek());
console.log(stack4.display()); 



// reverse a string


function reverseString(str) {
    let stack = [];
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      stack.push(str[i]);
    }
  
    while (stack.length > 0) {
      result += stack.pop();
    }
  
    return result;
  }
  
  console.log(reverseString("hello"));
  

// over flow

class Stack {
    constructor(maxSize) {
      this.stack = [];
      this.maxSize = maxSize;  
    }
  
    push(element) {
      if (this.stack.length >= this.maxSize) {
        console.log("Stack Overflow: Cannot push, stack is full.");
        return;
      }
      this.stack.push(element);
      console.log(`${element} added to stack`);
    }
  
  }
  
  const myStack = new Stack(3);
  myStack.push(10);
  myStack.push(20);
  myStack.push(30);
  myStack.push(40);  
  

// under flow

class Stack {
    constructor() {
      this.stack = [];
    }
  
    pop() {
      if (this.isEmpty()) {
        console.log("Stack Underflow: Cannot pop, stack is empty.");
        return null;
      }
      return this.stack.pop();
    }

    isEmpty() {
      return this.stack.length === 0;
    }
  
  }
  
  const myStack1 = new Stack();
  myStack1.pop();  





  // STACK USING LINKED LIST

  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  class Stack {
    constructor() {
      this.top = null;  
      this.count = 0;   
    }
  
    push(value) {
      const newNode = new Node(value);
      newNode.next = this.top;  
      this.top = newNode;       
      this.count++;             
    }
  
    pop() {
      if (this.isEmpty()) {
        console.log("Stack is empty!");
        return null;
      }
      const poppedValue = this.top.value;
      this.top = this.top.next;  
      this.count--;              
      return poppedValue;
    }
  
    peek() {
      if (this.isEmpty()) {
        console.log("Stack is empty!");
        return null;
      }
      return this.top.value;
    }
  
    isEmpty() {
      return this.top === null;
    }
  
    size() {
      return this.count;
    }
    display() {
      let current = this.top;
      const elements = [];
      while (current) {
          elements.push(current.data);
          current = current.next;
      }
      return elements;
  }
  }
  const stack2 = new stack();
  stack2.push(10);
  stack2.push(20);
  stack2.push(30);
  
  console.log("Top element is: " + stack2.peek());  // Output: 30
  console.log("stack2 size is: " + stack2.size());   // Output: 3
  
  console.log("Popped element is: " + stack2.pop());  // Output: 30
  console.log("Top element is: " + stack2.peek());    // Output: 20
  console.log("stack2 size is: " + stack2.size());     // Output: 2
      



  // change elements
  class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.items.length === 0) {
        return "Underflow"; 
      }
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    change(index, newValue) {
      if (index >= 0 && index < this.items.length) {
        this.items[index] = newValue; 
      } else {
        console.log("Invalid index");
      }
    }
  
    printStack() {
      console.log(this.items);
    }
  }
  
  let stack3 = new Stack();
  stack3.push(10);
  stack3.push(20);
  stack3.push(30);
  stack3.push(40);
  
  console.log("Original stack3:");
  stack3.printstack3(); // Output: [10, 20, 30, 40]
  
  // Change the element at index 1 (20) to 25
  stack3.change(1, 25);
  
  console.log("stack3 after change:");
  stack3.printStack(); // Output: [10, 25, 30, 40]
  

  // removing middle
  class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
    
    printStack() {
      console.log(this.items);
    }
  }
  
  function removeMiddle(stack, currentIndex = 0, size = stack.size()) {
    // Base case: If stack is empty, return
    if (stack.isEmpty()) {
      return;
    }
  
    // Store the top element and pop it
    let topElement = stack.pop();
  
    // If the currentIndex is equal to half the size, we have reached the middle element
    if (currentIndex === Math.floor(size / 2)) {
      return; // Do not push this element back, effectively removing it
    }
  
    // Recursively call for the next element
    removeMiddle(stack, currentIndex + 1, size);
  
    // Push the top element back (except the middle one)
    stack.push(topElement);
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  
  console.log("Original Stack:");
  stack.printStack();
  
  removeMiddle(stack);
  
  console.log("Stack after removing middle element:");
  stack.printStack();
  



  /// find middle
  class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  class StackWithMiddle {
    constructor() {
      this.head = null; // Pointer to the top of the stack
      this.mid = null;  // Pointer to the middle of the stack
      this.size = 0;    // Size of the stack
    }
  
    // Push an element to the stack
    push(data) {
      let newNode = new Node(data);
  
      if (this.size === 0) {
        this.head = newNode;
        this.mid = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
  
        // Update the mid pointer when size becomes odd
        if (this.size % 2 === 0) {
          this.mid = this.mid.prev;
        }
      }
  
      this.size++;
    }
  
    // Pop an element from the stack
    pop() {
      if (this.size === 0) {
        console.log("Stack is empty");
        return null;
      }
  
      let poppedNode = this.head;
      this.head = this.head.next;
  
      if (this.head != null) {
        this.head.prev = null;
      }
  
      // Update the mid pointer when size becomes even
      if (this.size % 2 === 1) {
        this.mid = this.mid.next;
      }
  
      this.size--;
      return poppedNode.data;
    }
  
    // Find the middle element
    findMiddle() {
      if (this.size === 0) {
        console.log("Stack is empty");
        return null;
      }
      return this.mid.data;
    }
  
    // Delete the middle element
    deleteMiddle() {
      if (this.size === 0) {
        console.log("Stack is empty");
        return null;
      }
  
      let middleData = this.mid.data;
  
      if (this.size === 1) {
        this.head = null;
        this.mid = null;
      } else {
        let prevNode = this.mid.prev;
        let nextNode = this.mid.next;
  
        if (prevNode) prevNode.next = nextNode;
        if (nextNode) nextNode.prev = prevNode;
  
        // Update the mid pointer
        if (this.size % 2 === 0) {
          this.mid = nextNode;
        } else {
          this.mid = prevNode;
        }
      }
  
      this.size--;
      return middleData;
    }
  }
  
  // Example usage
  let stack5 = new StackWithMiddle();
  stack5.push(10);
  stack5.push(20);
  stack5.push(30);
  stack5.push(40);
  stack5.push(50);
  
  console.log("Middle element:", stack5.findMiddle()); // 30
  stack5.pop();
  console.log("Middle element after pop:", stack5.findMiddle()); // 20
  stack5.deleteMiddle();
  console.log("Middle element after deleting middle:", stack5.findMiddle()); // 40
  