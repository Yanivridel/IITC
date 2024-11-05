import express from "express"
import morgan from "morgan"
import logRequest from "./middleware/logger.js"
// import authUser from './middleware/auth.js'

// Routes Import
import jokesRoutes from "./routes/jokesRoute.js"
import productsRoutes from "./routes/productsRoute.js"
import usersRoutes from "./routes/usersRoute.js"

const app = express()
const PORT = 3000

// Middleware
app.use(express.json())
app.use(morgan("tiny"))
app.use(logRequest)
// app.use(authUser)
app.use(express.static('public'));

// Base Routes
app.get("/", (req, res) => {
    res.render("index.html")
    // res.send("Hello World!")
})

app.get("/api/status", (req, res) => {
    res.send({ message: "Server is UP" })
})

// Jokes
app.use("/api/jokes", jokesRoutes)

// Users
app.use("/api/users", usersRoutes)

// Products
app.use("/api/products", productsRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})