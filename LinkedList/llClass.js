class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(newVal) {
    const newNode = new Node(newVal, this.head);
    this.head = newNode;
    this.length++;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  insertAtIndex(index, val) {
    if (index < 0 || index > this.length - 1) return null;
    let current = this.head;
    let newNext;
    for (let i = 0; i <= index - 1; i++) {
      current = current.next;
    }
    newNext = current.next;
    const nn = new Node(val, newNext);
    current.next = nn;
    return nn;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.fromValues = (...values) => {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
