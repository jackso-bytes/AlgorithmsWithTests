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
    if (index === 0) return this.insertAtHead(val);
    let prevVal = this.getByIndex(index - 1);
    const nn = new Node(val, prevVal.next);
    prevVal.next = nn;
    this.length++;
    return nn;
  }

  deleteAtIndex(index) {
    if (index < 0 || index > this.length - 1) return null;
    let previous = this.getByIndex(index - 1);
    let current = previous.next;

    previous.next = current.next;
    current.next = null;

    this.length--;
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
