let testCase1 = [
  { name: "chocolate", price: "£50", quantity: 2, discount: "2 for 45" },
  { name: "marmalade", price: "£50", quantity: 3, discount: "3 for 100" },
  { name: "rice", price: "£10", quantity: 1, discount: null },
];

class Discount {
  main(input) {
    if (Array.isArray(input) !== true) {
      return "You must call #main with an array of objects";
    }
    if (input[0] === undefined)
      return "You must call #main with an array of objects";
  }

  getPrice(price) {
    return price;
  }

  applyDiscount(price, quantity, discount) {
    return price;
  }
}

module.exports = {
  C: Discount,
  i: testCase1,
};