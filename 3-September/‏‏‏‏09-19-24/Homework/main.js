
const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Smartphone', price: 600 },
    { id: 3, name: 'Headphones', price: 100 },
    { id: 4, name: 'Keyboard', price: 50 },
    { id: 5, name: 'Mouse', price: 30 },
    { id: 6, name: 'Monitor', price: 300 },
    { id: 7, name: 'Printer', price: 150 },
    { id: 8, name: 'Webcam', price: 80 },
    { id: 9, name: 'USB Cable', price: 10 },
    { id: 10, name: 'External Hard Drive', price: 120 },
];

const _productsContainer = document.getElementById("products-container");
const _table = document.getElementById("main-table");
const _clearButton = document.getElementById("clear-button");
const _totalAmount = document.getElementById("total-amount");

if(!localStorage.getItem("cart"))
    localStorage.setItem("cart", JSON.stringify([]));

renderTable();

for(const product of products) {
    _productsContainer.innerHTML += `
    <div class="item" data-product-id="${product.id}">
        <div>
            <span class="prod-name">${product.name}</span>
            <span class="prod-price">${product.price}</span>
        </div>
        <button class="add-button">Add</button>
    </div>
    `;
}

_productsContainer.addEventListener("click", (e) => handleProdClick(e))
_clearButton.addEventListener("click", clear);
_table.addEventListener("click", (e) => handleTableClick(e));

function clear() { localStorage.setItem("cart", JSON.stringify([])); renderTable()}
function renderTable() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    let currPrice, sum = 0;
    _table.innerHTML = 
    `<tr>
        <th>Product Name</th>
        <th>Product Price</th>
        <th>Amount</th>
        <th>Total</th>
        <th>Remove</th>
    </tr>`;

    for(const item of cart) {
        currPrice = item.price * item.amount;
        sum += currPrice;
        _table.innerHTML += 
    `<tr data-product-id="${item.id}">
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td><input value="${item.amount}" type="number" min="1"/}</td>
        <td>${currPrice}</td>
        <td><button>remove</button></td>
    </tr>`;
    }
    _totalAmount.textContent = `Total Amount: ${sum}`;
}
function handleProdClick(e) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    // Add Item
    if(e.target.matches("tr button.")){
        const prodId = parseInt(e.target.parentElement.dataset.productId);
        let flag = false;
        for(let i=0; i < cart.length && !flag; i++){
            if(cart[i].id === prodId){
                cart[i].amount += 1;
                flag = true;
            }
        }
        if(!flag) {
            const idx = products.findIndex((element) => element.id === prodId);
            cart.push({...products[idx], amount: 1});
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderTable();
}
function handleTableClick(e){
    const cart = JSON.parse(localStorage.getItem("cart"));
    //Delete Item
    if(e.target.matches("button.add-button")){
        const prodId = parseInt(e.target.parentElement.dataset.productId);
        
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderTable();
}


