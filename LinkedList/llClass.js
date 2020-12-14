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
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
