const productDetailsElem = document.querySelector('#productDetails');
const selectedProduct = JSON.parse(window.localStorage.getItem('selectedProduct'));

document.querySelector(`#title`).innerHTML = `<p>Title: ${selectedProduct.title}</p>`;
document.querySelector(`#price`).innerHTML = `<p>Price: ${selectedProduct.price}</p>`;
document.querySelector(`#description`).innerHTML = `<p>Description: ${selectedProduct.description}</p>`;
document.querySelector(`#category`).innerHTML = `<p>Category: ${selectedProduct.category}</p>`;
document.querySelector(`#image`).src = `${selectedProduct.image}`;
document.querySelector(`#rating`).innerHTML = `<p>Rating: ${selectedProduct.rating.rate} (${selectedProduct.rating.count} reviews)</p>`;



