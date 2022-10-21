// Global Function Area

// Business Logic

function calcTotal() {
  // Menu
  const Coffee = 4;
  const Tea = 2;
  const Kombucha = 5;
  const Water = 1;

  const item = document.getElementById("beverage").value;
  console.log("item=" + item);
  // Get item price
  let itemPrice;
  if (item === "Coffee") {
    itemPrice = Coffee;
  } else if (item === "Tea") {
    itemPrice = Tea;
  } else if (item === "Kombucha") {
    itemPrice = Kombucha;
  } else if (item === "Water") {
    itemPrice = Water;
  }
  console.log("price=$" + itemPrice);
  // Apply discount

  // Get total


};

// UI Logic

// Display receipt that includes:

// Item, quantity of items & discounted price.

// Shipping address

// When page loads, run these functions
window.addEventListener("load", function() {

  // When submit button is pushed
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    // Ensure page does not reload on submit
    event.preventDefault();
    // Calculate total
    calcTotal();
    // Display receipt
  });
});