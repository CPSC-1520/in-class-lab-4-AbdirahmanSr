
// Enter your code below.

const formOrder = document.querySelector("#new-order-form");

formOrder.addEventListener("submit", (event) => {
  event.preventDefault();

  const itemNameInput = event.target.elements["order-item-name"];
  const itemPriceInput = event.target.elements["order-item-price"];
  const orderSizeInput = event.target.elements["order-size"];

  let itemName = itemNameInput.value;
  let itemPrice = itemPriceInput.value;
  let orderSize = orderSizeInput.value;

  let isFormValid = true;

  // validate the form inputs
  if (!isValueNotEmpty(itemName)) 
  {
    itemNameInput.classList.add("is-invalid");
    isFormValid = false;
  } 
  else 
  {
    itemNameInput.classList.remove("is-invalid");
  }

  if (!isValueNotEmpty(itemPrice) || !isGreaterThanFive(itemPrice)) 
  {
    itemPriceInput.classList.add("is-invalid");
    isFormValid = false;
  } 
  else 
  {
    itemPriceInput.classList.remove("is-invalid");
  }

  if (!isValueNotEmpty(orderSize)) {
    orderSizeInput.classList.add("is-invalid");
    isFormValid = false;
  } 
  else 
  {
    orderSizeInput.classList.remove("is-invalid");
  }

  // add the order items to the list if form is valid
  if (isFormValid) 
  {
    addOrderItem(itemName, itemPrice, orderSize);
  }

  // reset input fields
  itemNameInput.value = "";
  itemPriceInput.value = "";
  orderSizeInput.value = "";
});

// functions needed for assessment (do not change.)

/**
 * Checks if a value is not empty.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is not empty, false otherwise.
 */
const isValueNotEmpty = (value) => {
  if (value !== "") {
      return true
  }
  return false
}

/**
 *
 * Checks if a given value is greater than zero.
 * @param {number} value - The value to be checked.
 * @returns {boolean} - True if the value is greater than zero, otherwise false.
 */
const isGreaterThanFive = (value) => {
  if (value > 5) {
      return true
  }
  return false
}

/**
 * Adds a new order item to the order list.
 *
 * @param {string} orderItemName - The name of the order item.
 * @param {number} orderItemPrice - The price of the order item.
 * @param {string} orderSize - The size of the order item.
 * @returns {void}
 */
const addOrderItem = (orderItemName, orderItemPrice, orderSize) => {
  let orderItemList = document.querySelector("#order-item-list")
  let newOrderItem = `<li class="list-group-item d-flex justify-content-between">
    <div class="w-100 justify-content-between">
      <h5 class="mb-1">${orderItemName}</h5>
      <small>${orderSize}</small>
    </div>
    <p class="mb-1">${'$'+orderItemPrice}</p>
  </li>`
  orderItemList.innerHTML += newOrderItem
}