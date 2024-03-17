"use strict";
let shoppingCart = [];
function addItem(item) {
    shoppingCart.push(item);
    console.log(`this item is added to the shopping cart${item}`);
    printCart();
}
function removeitem(item) {
    const index = shoppingCart.indexOf(item);
    if (index !== -1) {
        shoppingCart.splice(index, 1);
        console.log(`item is removed${item}`);
    }
    else {
        console.log(`this item isnt found in cart${item}`);
    }
    printCart();
}
function updateItem(item, quantity) {
    const index = shoppingCart.indexOf(item);
    if (index !== -1) {
        shoppingCart.splice(index, 1, item.repeat(quantity));
        console.log(`quantity is updated foe the item${item}.`);
    }
    else {
        console.log(`the item is not found in the cart${item}.`);
    }
    printCart();
}
function printCart() {
    console.log("cart contents:" + shoppingCart.join(","));
}
// adding items
addItem("apple");
addItem("peach");
addItem("orange");
addItem("kiwi");
addItem("watermelon");
//remove items
removeitem("orange");
//updating quantity
updateItem("strawberry", 3);
