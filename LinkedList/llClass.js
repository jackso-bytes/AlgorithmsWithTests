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
    if (index < 0 || index > this.length) return null;
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
