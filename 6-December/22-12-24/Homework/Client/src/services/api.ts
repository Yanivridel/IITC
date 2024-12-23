import { IPost } from '@/types/postTypes';
import axios from 'axios';
import { getCookie } from './cookies';

const LOCAL_HOST = 'http://localhost:3000';
const API_URL = LOCAL_HOST;


// Check user authentication
export const getSelf = async (token: string) => {
    try {
        const { data } = await axios.get(`${API_URL}/api/users/get-self`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data;
    } catch (error) {
        console.error('Auth check error:', error);
        throw error;
    }
};
interface checkLoginType {
    email: string;
    password: string;
}
export const checkLogin = async ({email, password}: checkLoginType) => {
    try {
        const { data } = await axios.post(`${API_URL}/api/users/login`, { email, password }, { withCredentials: true });
        return data;
    } 
    catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

export const getAllPosts = async (page = 1, limit = 10) => {
    try {
        const { data } = await axios.get(`${API_URL}/api/posts`, {
            params: { page, limit },
        });
        return data.data;
    } catch (error) {
        console.error('get posts error:', error);
    }
};

export const createPost = async ({title, content}: IPost) => {
    try {
        const { data } = await axios.post(`${API_URL}/api/posts`, { title, content });
        return data;
    } 
    catch (error) {
        console.error('create post error:', error);
    }
};

export const getPostById = async (id: string) => {
    try {
        const { data } = await axios.get(`${API_URL}/api/posts/${id}`);
        return data.data;
    } 
    catch (error) {
        console.error('get post error:', error);
    }
};

export const updatedPostById = async ({title, content, _id}: IPost ) => {
    try {
        const { data } = await axios.put(`${API_URL}/api/posts/${_id}`, { title, content });
        return data;
    } 
    catch (error) {
        console.error('edit post error:', error);
    }
}

export const deletePostById = async (recipeId: string ) => {
    try {
        const { data } = await axios.delete(`${API_URL}/api/posts/${recipeId}`);
        return data;
    } 
    catch (error) {
        console.error('Delete post error:', error);
    }
}

