import express from 'express';

import { getPostsBySearch, getPosts, createPost, updatePost, deletePost, likePost } from '../controller/posts.js';
import auth from '../middleware/auth.js'

const router = express();

router.get('/' , getPosts);
router.get('/search', getPostsBySearch)
router.post('/' , auth, createPost);
router.patch('/:id', auth, updatePost);     //patch is used to update.
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;