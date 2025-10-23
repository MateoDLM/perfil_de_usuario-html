let tableContent = "";
const tableBodyElem = document.querySelector('#tableBody');
let totalProducts = JSON.parse(window.localStorage.getItem('totalProducts')) || [];
const searchInputElem = document.querySelector('#searchInput');

searchInputElem.addEventListener('input', (event) => {
  const searchValue = event.target.value.toLowerCase();
  const filteredProducts = totalProducts.filter(product => product.title.toLowerCase().includes(searchValue));
  renderTable(filteredProducts);
});

const goToProductDetails = (productId) => {
  const selectedProduct = totalProducts.find(product => product.id === productId);
  window.localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
  window.location.href = `productDetails.html?id=${productId}`;
};

const fetchProducts = async () => {
    try {
       fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
    totalProducts = products;
    window.localStorage.setItem('totalProducts', JSON.stringify(products));
    renderTable(totalProducts);
    tableBodyElem.innerHTML = tableContent;
  });
    } catch (error) {
        console.error("Error:", error);
    }
};

const renderTable = (products) => {
  tableContent = "";
  products.forEach(product => {
    tableContent +=  `
      <tr>
        <td><a href="#" onclick="goToProductDetails(${product.id})">${product.title}</a></td>
        <td>${product.price}</td>
        <td><img src="${product.image}" alt="${product.title}" width="50" height="50"></td>
      </tr>
    `;
  });
  tableBodyElem.innerHTML = tableContent;
};

if (totalProducts.length === 0) {
  fetchProducts();
} else {
  renderTable(totalProducts);
}
