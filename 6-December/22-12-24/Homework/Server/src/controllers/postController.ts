import { Request, Response } from 'express';
import { MongoError } from 'mongodb';
import mongoose from 'mongoose'; 
import { AuthenticatedRequest } from 'src/types/expressTypes';
import postModel from '../models/postModel';


// GET ALL POSTS
export const getAllPosts = async (req: Request, res: Response): Promise<void> => {
    try {

        const page = parseInt(req.query.page as string, 10) || 1;
        const limit = parseInt(req.query.limit as string, 10) || 10;

        const skip = (page - 1) * limit;

        const posts = await postModel.find().skip(skip).limit(limit);

        const totalPosts = await postModel.countDocuments();

        res.status(200).json({
            status: "success",
            message: "Posts fetched successfully",
            data: posts,
            meta: {
                totalPosts,
                currentPage: page,
                totalPages: Math.ceil(totalPosts / limit),
            },
        });

    } catch (error) {
        console.log(error); // dev mode
        if (error instanceof MongoError) {
            res.status(500).json({
                status: 'error',
                message: 'A database error occurred.',
                error: error.message
            });
        } else {
            res.status(500).json({
                status: 'error',
                message: 'An unexpected error occurred.',
                error: error instanceof Error ? error.message : 'Unknown error',
            });
        }
    }
}

// ADD POST - Done
export const createPost = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, content } = req.body;

        if(!title || !content) {
            res.status(400).send({status: "error", message: "Missing required parameters"});
            return;
        }

        const newPost = new postModel({
            title,
            content,
        });
    
        await newPost.save();

        res.status(201).json({
            status: "success",
            message: "The post created successfully",
            data: newPost
        });

    } catch (error) {
        console.log(error); // dev mode
        if (error instanceof MongoError) {
            res.status(500).json({
                status: 'error',
                message: 'A database error occurred.',
                error: error.message
            });
        } else {
            res.status(500).json({
                status: 'error',
                message: 'An unexpected error occurred.',
                error: error instanceof Error ? error.message : 'Unknown error',
            });
        }
    }
}

// GET POST BY ID - Done
export const getPostById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        if(!id) {
            res.status(400).send({status: "error", message: "Missing required parameters (id)"});
            return;
        }

        const post = await postModel.findById(req.params.id);

        if (!post) {
            res.status(404).json({ message: 'post not found' });
            return;
        }

        res.status(200).json({
            status: "success",
            message: "post found successfully",
            data: post
        });

    } catch (error) {
        console.log(error); // dev mode
        if (error instanceof MongoError) {
            res.status(500).json({
                status: 'error',
                message: 'A database error occurred.',
                error: error.message
            });
        } else {
            res.status(500).json({
                status: 'error',
                message: 'An unexpected error occurred.',
                error: error instanceof Error ? error.message : 'Unknown error',
            });
        }
    }
}

// EDIT POST - Done
export const updatePostById = async (req: Request, res: Response): Promise<void> => { 
    try {
        const { id: postId } = req.params;

        if(!postId) {
            res.status(400).send({status: "error", message: "Missing required parameters (id)"});
            return;
        }

        const post = await postModel.findById(postId);
    
        if (!post) {
            res.status(404).json({status:"error", message: 'post not found' });
            return;
        }
    
        const updatedData = req.body;
        const updatedPost = await postModel.findByIdAndUpdate(postId, updatedData, { new: true });
    
        res.status(200).json({
            status: "success",
            message: "The post updated successfully",
            data: updatedPost
        });

    } catch (error) {
        console.log(error); // dev mode
        if (error instanceof MongoError) {
            res.status(500).json({
                status: 'error',
                message: 'A database error occurred.',
                error: error.message
            });
        } else {
            res.status(500).json({
                status: 'error',
                message: 'An unexpected error occurred.',
                error: error instanceof Error ? error.message : 'Unknown error',
            });
        }
    }
}

// DELETE POST - Done
export const deletePostById = async (req: Request, res: Response): Promise<void> => { 
    try {
        const { id: postId } = req.params;

        if(!postId) {
            res.status(400).send({status: "error", message: "Missing required parameters (id)"});
            return;
        }

        const post = await postModel.findById(postId);

        if (!post) {
            res.status(404).json({status:"error", message: 'post not found' });
            return;
        }

    await post.deleteOne();

    res.status(200).json({
        status: "success", 
        message: 'post deleted successfully'
    });

    } catch (error) {
        console.log(error); // dev mode
        if (error instanceof MongoError) {
            res.status(500).json({
                status: 'error',
                message: 'A database error occurred.',
                error: error.message
            });
        } else {
            res.status(500).json({
                status: 'error',
                message: 'An unexpected error occurred.',
                error: error instanceof Error ? error.message : 'Unknown error',
            });
        }
    }
}