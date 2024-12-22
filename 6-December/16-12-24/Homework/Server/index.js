import express from "express";
import { Server as SocketIOServer } from "socket.io";
import http from "http";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import messageModel from "./models/messageModel.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

// Database Connection
mongoose.connect(process.env.DB_URI).then(() => console.log("Successfully Connected to DB"));


app.get('/', (req, res) => res.status(200).send("Server is alive"));

const io = new SocketIOServer(server, {
    cors: {
        origin: "http://localhost:5173",
    },
});

// start a connection:
io.on("connection", (socket) => {
    // console.log("a client connected", socket.id);

    // Listen for first join event
    socket.on("join", (username) => {
        console.log(`${username} joined chat`);
        socket.username = username;
    });
    // Listen for join room
    socket.on("join-room", (room) => {
        socket.join(room);
        console.log(`${socket.username} joined room: ${room}`);

        socket.broadcast.to(room).emit("message", {
            by: "System",
            text: `${socket.username} has joined the ${room} chat`,
        });

        messageModel.find({ room })
        .sort({ timestamp: 1 })
        .then(messages => socket.emit("previous-messages", messages))
        .catch(error => console.error("Error fetching messages:", error))
    });
    // Listen for leave room
    socket.on("leave-room", (room) => {
        socket.leave(room);
        console.log(`${socket.id} left room: ${room}`);

        socket.broadcast.to(room).emit("message", {
            by: "System",
            text: `${socket.username} has left the ${room} chat`,
        });
    });

    // Listen for message event
    socket.on("message", (message) => {
        const rooms = Array.from(socket.rooms).slice(1); // Exclude socket's own ID
    
        if (rooms.length > 0) {
            const room = rooms[0];

            const newMessage = new messageModel({
                by: socket.username,
                text: message,
                room,
            });

            newMessage.save()
            .then(() => {
                // Broadcast the message to the room
                io.to(room).emit("message", newMessage);
            })
            .catch((error) => {
                console.error("Error saving message:", error);
            });
        }
    });
    // Listen to typing message event 
    socket.on("user-typing-message", () => {
        const rooms = Array.from(socket.rooms).slice(1); // Exclude socket's own ID
        
        if (rooms.length > 0) {
            const room = rooms[0];
            socket.broadcast.to(room).emit("user-typing-message", socket.username);
        }
    });
    socket.on("stop-typing-message", () => {
        const rooms = Array.from(socket.rooms).slice(1); // Exclude socket's own ID
        
        if (rooms.length > 0) {
            const room = rooms[0];
            socket.broadcast.to(room).emit("stop-typing-message"); 
        }
    });

    // end a connection:
    socket.on("disconnect", () => {
        if (!socket.username) return;
        console.log("a client disconnected", socket.id);
    });
});






server.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
);
