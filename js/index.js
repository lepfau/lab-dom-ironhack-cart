// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')

let total = price.innerHTML * quantity.value
console.log(total)
product.querySelector('.subtotal span').innerHTML = total
return total
 
}

function calculateAll() {

  const manyProducts = document.querySelectorAll(".product");
  let sum = 0;
  manyProducts.forEach(function (el) {
    sum += updateSubtotal(el);
  });
  const total = document.querySelector("#total-value span");
  total.innerHTML = sum;


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
