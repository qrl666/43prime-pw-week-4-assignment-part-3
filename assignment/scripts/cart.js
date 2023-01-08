console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function isFull(array) {
  if (array.length >= maxItems) {
    return true;
  } else {
    return false;
  }
}
console.log("Is basket full? (Expect false)", isFull(basket));

function addItem(item, array) {
  if (isFull(array) == false) {
    array.push(item);
    return true;
  } else {
    return false;
  }
}

console.log(`Basket is ${basket}`);
console.log("Adding crickets (expect true)", addItem("crickets", basket));
console.log(`Basket is now ${basket}`);

console.log(
  "Adding snail shells (expect true)",
  addItem("snail shells", basket)
);
console.log("Adding newt eyes (expect true)", addItem("newt eyes", basket));
console.log("Adding cat food (expect true)", addItem("cat food", basket));
console.log(`Basket is now ${basket}`);

function listItems(array) {
  for (let element of array) {
    console.log(element);
  }
  return console.log("End of list");
}
console.log("Here is a list of items in the basket:");
listItems(basket);

function empty(array) {
  return (array.length = 0);
}

console.log("Emptying the basket", empty(basket));
console.log(`Basket is now ${basket}`);
console.log("Here is a list of items in the basket:");
listItems(basket);

console.log("Adding bat wings (expect true)", addItem("bat wings", basket));
console.log("Adding broom grip (expect true)", addItem("broom grip", basket));
console.log(
  "Adding wretched souls (expect true)",
  addItem("wretched souls", basket)
);
console.log(
  "Adding screaming amulet (expect true)",
  addItem("screaming amulet", basket)
);
console.log(
  "Adding cosmetic warts (expect true)",
  addItem("cosmetic warts", basket)
);
console.log(`Basket is now ${basket}`);
console.log("Here is a list of items in the basket:");
listItems(basket);

console.log("Is basket full? (expect true)", isFull(basket));

console.log(
  "Adding silver knife (expect false)",
  addItem("silver knife", basket)
);
console.log("Here is a list of items in the basket:");
listItems(basket);

function removeItem(item, array) {
  if (array.indexOf(item) >= 0) {
    array.splice(array.indexOf(item), 1);
    return item;
  } else {
    return null;
  }
}

console.log(basket.indexOf("cosmetic warts"))

console.log(
  "Removing cosmetic warts, expect cosmetic warts:",
  removeItem("cosmetic warts", basket)
);
console.log("Here is a list of items in the basket:");
listItems(basket);

console.log("Removing flowers, expect null:", removeItem("flowers", basket));
