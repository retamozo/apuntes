
class MyOwnArray {
    data: Record<any, unknown>
    length = 0

    constructor() {
        this.data = {};
        this.length
    }

    get(index: number) {
        return this.data[index]
    }

    push(element: unknown) {
        this.data[this.length] = element
        this.length++
        return this.data
    }
}
