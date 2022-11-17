
class MyOwnArray {
    data: Record<any, unknown> = {}
    length = 0

    constructor() {
        this.data = {};
        this.length
    }

    get(index: number) {
        return this.data[index] || null
    }

    push(element: unknown) {
        this.data[this.length] = element
        this.length++;
        return this.data
    }

    pop() {
        const last = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--;
        return last
    }

    delete(index: number) {
        const item = this.data[index]
        this.shiftIndex(index)
        return item;
    }

    shiftIndex(index: number) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    shift() {
        return this.delete(0)
    }

    unshift(element: unknown) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1]
        }
        this.data[0] = element
        this.length++;
        return this.data
    }

}

const arr = new MyOwnArray()
arr.push("puma")
arr.push("enzo")
arr.push("toto")

console.log(">", arr.data);
arr.unshift("primero")
console.log("-----------");
console.log(" >", arr.data);
console.log("sdas")