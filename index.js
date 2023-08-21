class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(`list: ${arr}, length: ${this.length}`);
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let newTail;
    let current = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.length) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let targetNode = this.head;
    for (let i = 0; i < index; i++) {
      targetNode = targetNode.next;
    }
    return targetNode;
  }

  set(index, val) {
    const targetNode = this.get(index);
    if (!targetNode) return false;
    targetNode.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
    } else if (index === 0) {
      this.unshift(val);
    } else {
      const newNode = new Node(val);
      const prevNode = this.get(index - 1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const node = this.get(index - 1);
    const removeNode = node.next;
    node.next = removeNode.next;
    this.length--;
    return removeNode;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
  }
}

const list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.pop();
list.shift();
list.unshift(1);
list.insert(4, 6);
console.log(list.get(4));
list.set(4, 5);
list.remove(4);
list.reverse();
list.print();
