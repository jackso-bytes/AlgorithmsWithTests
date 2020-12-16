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

    let priceFl = getPrice(input.price);
    let quantFl = this.getPrice(input.quantity);

    let finalPrice = this.applyDiscount(priceFl, quantFl, input.discount);
  }

  getPrice(price) {
    if (typeof price !== "string") return null;
    let regex = /\d/g;
    if (regex.test(price) !== true) return null;
    price = price.replace(/[^0-9.]/g, "");
    return parseFloat(price);
  }

  applyDiscount(price, quantity, discount) {
    if (discount === "2 for 45") {
      if (quantity === 1) return price;
      if (quantity % 2 === 0) {
        price = (quantity / 2) * 45;
        return price;
      } else {
        price = price * quantity;
        return price;
      }
    }

    if (discount === "3 for 100") {
      if (quantity === 1) return price;
      if (quantity % 3 === 0) {
        price = (quantity / 3) * 100;
        return price;
      } else {
        price = price * quantity;
        return price;
      }
    }
    price = price * quantity;
    return price;
  }
}

module.exports = {
  C: Discount,
  i: testCase1,
};
