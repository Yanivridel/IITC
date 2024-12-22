import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    by: { type: String, required: true },
    text: { type: String, required: true },
    room: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("Message", messageSchema);;
