var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
  var price = Math.floor((Math.random()* 100 ) + 1)
 cart.push({itemName: name, itemPrice:price})
 return `${name} has been added to your cart.` 
}

function generateCartDescription() {
  cart = getCart()
  var statement = `In your cart, you have`
  if (cart.length === 1) {
    for(var i = 0; i < cart.length; i++) {
 statement += ` ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}` 
 } 
  }
  if (cart.length === 2) {
    for(var i = 0; i < cart.length - 1; i++) {
 statement += ` ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}` 
} 
   statement += `, and ${cart[1]["itemName"]} at $${cart[1]["itemPrice"]}`
  }
  if (cart.length > 2) {
    for(var i = 0; i < cart.length - 1; i++) {
      statement += ` ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]},` 
    } 
  return statement + ` and ${cart[cart.length - 1].itemName} at $${cart[cart.length -1].itemPrice}.`
  }
return statement + `.`
} 

function viewCart() {
  return getCart().length === 0 ? `Your shopping cart is empty.` : generateCartDescription()
}

function total() {
var total = 0
for(var i = 0; i < getCart().length; i++) { 
total += getCart()[i].itemPrice;
}
return total
}

function removeFromCart(item) {
  for(var i in cart)

function placeOrder(cardNumber) {
  // write your code here
}
