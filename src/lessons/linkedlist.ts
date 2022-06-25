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

interface LNode {
    value: unknown,
    next: LNode | null
}

class Node {
    value: LNode;
    next: LNode;

    constructor(value: LNode){
        this.value = value,
        this.next = null
    }
}

class Linkedlist {
    head: LNode;
    tail: LNode;
    constructor(value: LNode){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
    }
}

export { Node }