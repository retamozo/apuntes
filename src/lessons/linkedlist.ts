// let linkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null,
//         },
//       },
//     },
//   },
// };

export interface INode {
    value: unknown;
    next: INode | null;
}

  class Node {
    value: unknown;
    next: INode;
    constructor(value: INode) {
        (this.value = value), (this.next = null);
    }
}

class Linkedlist {
    head: INode;
    tail: INode;
    length: number;
    constructor(value: INode) {
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;
        this.length = 0;
    }

    append(value) {
        const node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    insert(index, value){
        if ( index >= this.length) {
            return this.append(value)
        }
        const node = new Node(value);
        const previousPointer = this.findNodeByIndex(index - 1) // node1 --- node2 --- node3 I want to pick the previous
        const bufferPointer = previousPointer.next;
        previousPointer.next = node;
        node.next = bufferPointer;

    }

    findNodeByIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter != index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

const list = new Linkedlist({ value: 1, next: null });

list.append(1)
list.append(2)
list.append(3)
list.insert(2, 5)
console.log(list);
export { Node };
