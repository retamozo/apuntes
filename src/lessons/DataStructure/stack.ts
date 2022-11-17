/**
 * Los stacks usan un método conocdio usado LIFO
 * LAST IN - FIRST OUT
 */
import { INode, Node } from "../linkedlist"


class Stack {
    top: unknown
    bottom: unknown;
    length: number;
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push<Value>(value: Value) {
        const newNode = new Node(value as unknown as INode)
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode
        } else {
            const bufferNode = this.top;
            this.top = newNode;
            this.bottom = bufferNode;
        }
        this.length++
    }
}

const st = new Stack()
console.log(st)
st.push(1)
console.log(st)
st.push(2)
console.log(st)
st.push(3)
console.log(st)
console.log(`peek`, st.peek())
