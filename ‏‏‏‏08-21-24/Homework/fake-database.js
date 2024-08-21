
const products = [
    { id: 1, name: "banana", price: 10},
    { id: 2, name: "apple", price: 20},
    { id: 3, name: "orange", price: 30}
];

function getProducts() {
    return products
}

function getProductsById(id){
    return products.find((item) => item.id === parseInt(id))
}

module.exports = {
    getProducts,
    getProductsById
}