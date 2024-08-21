const express = require("express");
const app = express();
const port = 3000;
const {getProducts, getProductsById } = require("./fake-database");



app.get("/", (req, res) => {
res.send("Welcome to my basic Express server!");
});

app.get("/about", (req, res) => {
    res.send("This server was created by Yaniv");
});

app.get("/contact", (req, res) => {
    res.json({ phone: "052-4678-433", email: "yanivridel@gmail.com"});
});

app.get("/api/products", (req, res) => {
    res.json(getProducts());
});

app.get("/api/products/:id", (req, res) => {
    const { id } = req.params;
    product = getProductsById(id);
    product ? res.json(product) : res.redirect("/*");
});

app.get("*", (req, res) => {
    res.send("You are definitely lost!");
})

app.listen(3000, () => {
    console.log(`The server has started listening on port ${port}...`);
})