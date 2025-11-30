const productDetailsElem = document.querySelector('#productDetails');
const selectedProduct = JSON.parse(window.localStorage.getItem('selectedProduct'));

document.querySelector(`#title`).textContent = selectedProduct.title;
document.querySelector(`#price`).innerHTML = `💰 Price: $${selectedProduct.price}`;
document.querySelector(`#description`).innerHTML = `📝 ${selectedProduct.description}`;
document.querySelector(`#category`).innerHTML = `📁 Category: ${selectedProduct.category}`;
document.querySelector(`#image`).src = selectedProduct.image;
document.querySelector(`#image`).alt = selectedProduct.title;
document.querySelector(`#rating`).innerHTML = `⭐ Rating: ${selectedProduct.rating.rate}/5 (${selectedProduct.rating.count} reviews)`;



