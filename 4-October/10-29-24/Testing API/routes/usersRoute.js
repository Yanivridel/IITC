import express from "express"
import authUser from '../middleware/auth.js'

// Dummy DB Import
import users from './../db/users.json' assert { type: "json" }

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

router.get('/', (req, res) => {
    res.json(users)
})

router.get('/random', (req, res) => {
    const randomUser = users[Math.floor(Math.random() * users.length)]
    res.json(randomUser)
})

router.get("/:id", (req, res) => {
    const id = +req.params.id
    const user = users.find(user => user.id === id)
    
    if (!user) {
        return res.status(404).json({ error: "User not found" })
    }
    
    res.json(user)
})

router.post("/", async (req, res) => {
    const { name, email, age } = req.body

    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" })
    }

    const newUser = {
        id: users.length ? Math.max(...users.map(user => user.id)) + 1 : 1,
        name,
        email,
        age: age || null
    }

    users.push(newUser)
    const success = await writeToFile("./db/users.json", users)

    if (!success) {
        return res.status(500).json({ error: "Failed to save user" })
    }

    res.status(201).json({
        message: "New user added",
        user: newUser
    })
})

router.put("/:id", async (req, res) => {
    const id = +req.params.id
    const { name, email, age } = req.body

    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" })
    }

    const userIndex = users.findIndex(user => user.id === id)
    
    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" })
    }

    users[userIndex] = { ...users[userIndex], name, email, age: age || users[userIndex].age }
    const success = await writeToFile("./db/users.json", users)

    if (!success) {
        return res.status(500).json({ error: "Failed to update user" })
    }

    res.json({
        message: "User updated",
        user: users[userIndex]
    })
})

router.delete("/:id", async (req, res) => {
    const id = +req.params.id
    const userIndex = users.findIndex(user => user.id === id)
    
    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" })
    }

    const deletedUser = users.splice(userIndex, 1)[0]
    const success = await writeToFile("./db/users.json", users)

    if (!success) {
        return res.status(500).json({ error: "Failed to delete user" })
    }

    res.json({
        message: "User deleted",
        user: deletedUser
    })
})

export default router;