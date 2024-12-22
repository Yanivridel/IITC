import express, { Request, Response } from "express";
import {
    getAllPosts,
    createPost,
    getPostById,
    updatePostById,
    deletePostById,
} from '../controllers/postController';
import { authenticateToken } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", getAllPosts);

router.post('/', createPost);

router.get('/:id', getPostById);

router.put('/:id', updatePostById);

router.delete('/:id', deletePostById);


export default router;
