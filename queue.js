
// basic queue

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    printQueue() {
        return this.items.join(" ");
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.printQueue()); // Output: 10 20 30
console.log(queue.dequeue());    // Output: 10
console.log(queue.peek());       // Output: 20
console.log(queue.size());       // Output: 2
console.log(queue.isEmpty());    // Output: false




//1. Simple Queue

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    printQueue() {
        return this.items.join(' ');
    }
}

// Example Usage:

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.printQueue());  // Output: 1 2 3
console.log(q.dequeue());     // Output: 1
console.log(q.peek());        // Output: 2
console.log(q.isEmpty());     // Output: false
console.log(q.size());        // Output: 2


// 2. Circular Queue (Improved Space Efficiency)

class CircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = Array(size).fill(null);
        this.front = -1;
        this.rear = -1;
    }

    enqueue(element) {
        if ((this.rear + 1) % this.size === this.front) {
            return "Queue is full";  // Queue is full condition
        } else if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
            this.queue[this.rear] = element;
        } else {
            this.rear = (this.rear + 1) % this.size;
            this.queue[this.rear] = element;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        } else if (this.front === this.rear) {
            const temp = this.queue[this.front];
            this.queue[this.front] = null;
            this.front = -1;
            this.rear = -1;
            return temp;
        } else {
            const temp = this.queue[this.front];
            this.queue[this.front] = null;
            this.front = (this.front + 1) % this.size;
            return temp;
        }
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.queue[this.front];
    }

    isEmpty() {
        return this.front === -1;
    }

    printQueue() {
        return this.queue.join(' ');
    }
}

// Example Usage:
let cq = new CircularQueue(5);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
console.log(cq.printQueue());  // Output: 10 20 30 40 null
console.log(cq.dequeue());     // Output: 10
cq.enqueue(50);
console.log(cq.printQueue());  // Output: null 20 30 40 50
