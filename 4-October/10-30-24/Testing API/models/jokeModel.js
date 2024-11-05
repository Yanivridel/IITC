import mongoose from "mongoose"

const jokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: true
    },
    punchline: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model("Joke", jokeSchema)
