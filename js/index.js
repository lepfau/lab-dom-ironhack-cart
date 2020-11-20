// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')

  let priceValue = Number(price.innerHTML)
  let quantityValue = Number(quantity.value)
  let total = priceValue * quantityValue

  
  return product.querySelector('.subtotal').innerHTML = `$${total}`
  
}

function calculateAll() {

  let products = [].slice.call(document.getElementsByClassName("product")) //transform HTML collection into array
  products.forEach(product => { //loop trough array to apcply function to all products
    updateSubtotal(product)
  });
  
  // ITERATION 3
  let total = document.querySelector("#total-value span")  //value to be filled at the end



  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
