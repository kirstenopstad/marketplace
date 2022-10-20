// Global Function Area

// Business Logic

function calcTotal() {
  const item = document.getElementById("beverage").value;
  console.log("item=" + item);
  // Get item price
  const itemPrice = document.getElementById("beverage").name;
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