
// Enter your code below.

const formOrder = document.querySelector("#new-order-form");

//add event listener
formOrder.addEventListener('submit',(event)=>{

    //prevent default form submission
   
    //get the values from form
    event.preventDefault();
    let itemName = event.target.elements["order-item-name"].value;
    let itemPrice = event.target.elements["order-item-price"].value;
    let orderSize = event.target.elements["order-size"].value;


    //validate form inputs
    let isFormValid = true;

    if (isValueNotEmpty(itemName))
    {
      event.target.elements["order-item-name"].classList.remove("is-invalid");
    }
    else
    {
      event.target.elements["order-item-name"].classList.add("is-invalid");
      isFormValid = false;
    }

    
    
    if(isValueNotEmpty(itemPrice) && isGreaterThanFive(itemPrice))
    {
      event.target.elements["order-item-price"].classList.remove("is-invalid");
    }
    else
    { 
      event.target.elements["order-item-price"].classList.add("is-invalid");   
      isFormValid = false;      
    }

   
   
    if(isValueNotEmpty(orderSize))
    {
      event.target.elements["order-size"].classList.remove("is-invalid");
    }
    else
    {
      event.target.elements["order-size"].classList.add("is-invalid");
      isFormValid = false;
    }

    
    //if form is valid add order item to list
    if (isFormValid)
    {
      addOrderItem(itemName, itemPrice, orderSize);
    }


    //reset input fields
    itemName = event.target.elements["order-item-name"].value="";
    itemPrice = event.target.elements["order-item-price"].value="";
    orderSize = event.target.elements["order-size"].value="";
    

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