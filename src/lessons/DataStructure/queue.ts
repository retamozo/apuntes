/**
 * Las queues son como en la vida real, el primero en llegar es el primero en salir
 */

class MyNode {
    value: unknown;
    next: unknown
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    first: unknown;
    last: unknown;
    length: number;
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first
    }

    enqueue(value: unknown) {
        const newNode = new MyNode(value)
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const buffer = this.last;
            this.last[this.length - 1] = buffer
            this.last = newNode;
        }
        this.length++
    }
}

const q = new Queue()
console.log(q)
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q)
console.log("peek",q.peek())