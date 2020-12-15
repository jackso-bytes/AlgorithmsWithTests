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

describe("#getByIndex", () => {
  describe("with index less than 0", () => {
    test("it returns null", () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(-1)).toBeNull();
    });
  });

  describe("with index greater than list length", () => {
    test("it returns null", () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(5)).toBeNull();
    });
  });

  describe("with index 0", () => {
    test("it returns the head", () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(0).value).toBe(10);
    });
  });

  describe("with index in the middle", () => {
    test("it returns the element at that index", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);

      expect(ll.getByIndex(2).value).toBe(30);
    });
  });

  describe("check LL isn't manipulated by method", () => {
    test("ll, is still in tact after running #getByIndex", () => {
      const ll = LinkedList.fromValues(10, 20, 30);

      expect(ll.getByIndex(2).value).toBe(30);
      expect(ll.getByIndex(2).value).toBe(30);
    });
  });

  describe("#insertAtIndex", () => {
    test("returns null when i > range", () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      expect(ll.insertAtIndex(4)).toBeNull();
    });

    test("return null when i < 0", () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.insertAtIndex(-1)).toBeNull();
    });

    test("return correct no at valid index", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      expect(ll.insertAtIndex(1, 20).value).toBe(20);
      expect(ll.length).toBe(5);
    });

    test("edge case that last possible index is selected", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      expect(ll.insertAtIndex(3, 40).value).toBe(40);
      expect(ll.length).toBe(5);
    });

    test("first index selected should call #insertAtHead for time complexity gains", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(0, 30);

      expect(ll.head.value).toBe(30);
      expect(ll.head.next.value).toBe(10);
      expect(ll.length).toBe(3);
    });
  });

  describe("#deleteAtIndex", () => {
    test("if i < 0 return null", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);

      expect(ll.deleteAtIndex(-1)).toBeNull();
    });

    test("expect i > ll.length to be null", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);

      expect(ll.deleteAtIndex(6)).toBeNull();
    });
    test("if node deleted, ll intact and length updated", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);

      ll.deleteAtIndex(1);

      expect(ll.length).toBe(3);
      expect(ll.getByIndex(1).value).toBe(30);
      expect(ll.getByIndex(1).next.value).toBe(40);
    });
  });

  describe("deleteAtHead", () => {
    const ll = LinkedList.fromValues(10, 20, 30, 40);

    ll.deleteAtHead();

    expect(ll.length).toBe(3);
    expect(ll.head.value).toBe(20);
    expect(ll.head.next.value).toBe(30);
  });
});
