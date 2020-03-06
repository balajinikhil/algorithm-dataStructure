class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }
  push(val) {
    this.storage[this.count] = val;
    this.count++;
  }
  pop() {
    if (this.count == 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
  size() {
    return this.count;
  }
  peek() {
    return this.storage[this.count - 1];
  }
}

const arr = new Stack();

arr.push("racecar");
arr.push("freeCodeCamp");
// arr.pop();
console.log(arr.size());
console.log(arr);
