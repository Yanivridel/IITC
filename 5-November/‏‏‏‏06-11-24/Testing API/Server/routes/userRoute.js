import express from "express";

import {
  getAllUser,
  createUser,
  signInUser,
  getUserById
} from '../controllers/userController.js'

import { isAdmin, verifyToken } from "../middleware/auth.js";

const router = express.Router();


router.get("/all", verifyToken, isAdmin, getAllUser);

router.post("/signup", createUser);

router.post('/signin', signInUser);

router.get('/:id', getUserById)

export default router;
