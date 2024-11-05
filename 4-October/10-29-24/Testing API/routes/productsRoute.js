import express from "express"
import authUser from '../middleware/auth.js'

// Dummy DB Import
import products from './../db/products.json' assert { type: "json" }

const router = express.Router()

const writeToFile = async (filename, data) => {
    try {
        await fs.routerendFile(filename, JSON.stringify(data))
        return true
    } catch (error) {
        console.error(`Error writing to ${filename}:`, error)
        return false
    }
}

router.get('', (req, res) => {
    res.json(products)
})

router.get('/random', (req, res) => {
    const randomProduct = products[Math.floor(Math.random() * products.length)]
    res.json(randomProduct)
})

router.get("/:id", (req, res) => {
    const id = +req.params.id
    const product = products.find(product => product.id === id)
    
    if (!product) {
        return res.status(404).json({ error: "Product not found" })
    }
    
    res.json(product)
})

router.post("/", async (req, res) => {
    const { id, name, price, description } = req.body

    if (!name || !price) {
        return res.status(400).json({ error: "Name and price are required" })
    }

    const newProduct = {
        id,
        name,
        price,
        description
    }

    products.push(newProduct)
    const success = await writeToFile("./db/products.json", products)

    if (!success) {
        return res.json({ error: "Failed to save product" })
    }

    res.status(201).json({
        message: "New product added",
        product: newProduct
    })
})

router.put("/:id", async (req, res) => {
    const id = +req.params.id
    const { name, price, description } = req.body

    if (!name || !price) {
        return res.status(400).json({ error: "Name and price are required" })
    }

    const productIndex = products.findIndex(product => product.id === id)

    products[productIndex] = {
        ...products[productIndex],
        name,
        price,
        description: description || products[productIndex].description
    }
    
    const success = await writeToFile("./db/products.json", products)

    if (!success) {
        return res.status(500).json({ error: "Failed to update product" })
    }

    res.json({
        message: "Product updated",
        product: products[productIndex]
    })
})

router.delete("/:id", async (req, res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(product => product.id === id)
    
    if (productIndex === -1) {
        return res.status(404).json({ error: "Product not found" })
    }

    const deletedProduct = products.splice(productIndex, 1)[0]
    const success = await writeToFile("./db/products.json", products)

    if (!success) {
        return res.status(500).json({ error: "Failed to delete product" })
    }

    res.json({
        message: "Product deleted",
        product: deletedProduct
    })
})

export default router