import express from "express";
const router = express.Router();

import {
  getAllUser,
  createUser,
  signInUser
} from '../controllers/userController.js'

router.get("/all", getAllUser);

router.post("/signup", createUser);

router.post('/signin', signInUser)
export default router;
