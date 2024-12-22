import express, { Request, Response } from "express";
import {
    createUser,
    loginUser,
    getSelf,
    changeUsername,
    likeRecipe,
    unlikeRecipe,
} from '../controllers/userController';
import { authenticateToken } from "./../middleware/authMiddleware";

const router = express.Router();

router.post("/signup", createUser);

router.post('/login', loginUser);

router.get('/get-self', getSelf);

router.post('/change/username', changeUsername);

router.post('/like/:id', authenticateToken, likeRecipe);

router.post('/unlike/:id', authenticateToken, unlikeRecipe);

export default router;
