
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
const _sortBy = document.getElementById("sort-by");
const _sortDirection = document.getElementById("sort-direction");

if(!localStorage.getItem("cart"))
    localStorage.setItem("cart", JSON.stringify([]));

renderTable();

for(const product of products) {
    _productsContainer.innerHTML += `
    <div class="item" data-product-id="${product.id}">
        <div>
            <i class="fa-solid fa-sun fa-spin" style="color: #e17547;"></i>
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
_sortBy.addEventListener('change', renderTable)
_sortDirection.addEventListener("change", renderTable)

function clear() { localStorage.setItem("cart", JSON.stringify([])); renderTable()}

function renderTable() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    let currPrice, sum = 0;
    if(_sortBy.value === 'name')
        cart.sort((a,b) => (a.name > b.name) ? 1 : -1);
    else if(_sortBy.value === 'price')
        cart.sort((a,b) => a.price - b.price);
    else
        cart.sort((a,b) => a.price*a.amount - b.price*b.amount);
    if(_sortDirection.value === 'descending') cart.reverse();
    _table.innerHTML = 
    `<thead><tr>
        <th>Product Name</th>
        <th>Product Price</th>
        <th>Amount</th>
        <th>Total</th>
        <th>Remove</th>
    </tr></thead>`;

    for(const item of cart) {
        currPrice = item.price * item.amount;
        sum += currPrice;
        _table.innerHTML += 
    `<tbody><tr data-product-id="${item.id}">
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td><input class="input-number" value="${item.amount}" type="number" min="1"/}</td>
        <td>${currPrice}</td>
        <td><button>remove</button></td>
    </tr></tbody>`;
    }
    _totalAmount.textContent = `Total Amount: ${sum}`;
}


function handleProdClick(e) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    // Add Item
    if(e.target.matches("button.add-button")){
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
    // Change Amount
    if (e.target.matches('input.input-number')) {
        const prodId = parseInt(e.target.closest("tr").dataset.productId);
        const idx = cart.findIndex((element) => element.id === prodId);        
        cart[idx].amount = parseInt(e.target.value);
    }
    // Delete Item
    else if(e.target.matches("tr td button")){
        const prodId = parseInt(e.target.closest("tr").dataset.productId);
        const idx = cart.findIndex((element) => element.id === prodId);
        cart.splice(idx,1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderTable();
}



