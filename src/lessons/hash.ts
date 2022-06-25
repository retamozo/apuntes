class Hashy {
  data: Array<unknown>;
  constructor(size: number) {
    this.data = new Array(size);
  }

  hashMethod(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set<Value>(key: string, value: Value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    (this.data[address] as unknown[]).push([key, value]);
    return this.data;
  }

  get(key: string) {
    const address = this.hashMethod(key);
    const current = this.data[address] as unknown[][];
    if (current) {
      for (let i = 0; i < current.length; i++) {
        if (current[i][0] === key) {
          return current[i][1];
        }
      }
    }
    return undefined;
  }

  delete(key: string){
    const address = this.hashMethod(key)
    const current = this.data[address] as unknown[][]
    if(current){
        for(let i = 0; i < current.length; i++){
            if(current[i][0] === key){
                delete this.data[address]
                return current
            }
        }
    }
    return undefined
  }
}

const myhashy = new Hashy(20);

myhashy.set("poronga", "otra cosa");
myhashy.set("poronga", { deep: "deepest" });
myhashy.set("Enzo", { edad: 25 });
console.log(myhashy.data);
myhashy.delete("Enzo")
console.log(myhashy.data)
