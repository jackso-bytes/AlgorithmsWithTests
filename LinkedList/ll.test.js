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
  });
});
