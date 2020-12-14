const { expect } = require("@jest/globals");
const LinkedList = require("./llClass");

describe("#inserting at head", () => {
  test("it adds element to beginning of list", () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);

    const oldHead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});
