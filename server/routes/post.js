import express from 'express';
import {getPosts , createPosts,updatePosts,deletePost} from '../controller/posts.js'

const router=express.Router();


router.get('/',getPosts);
router.post('/',createPosts);
router.patch('/:id',updatePosts);
router.delete('/:id',deletePost);


export default router;