import express from 'express';
import {getPosts , createPosts,updatePosts,deletePost,likePost} from '../controller/posts.js'

const router=express.Router();


router.get('/',getPosts);
router.post('/',createPosts);
router.patch('/:id',updatePosts);
router.delete('/:id',deletePost);
router.patch("/:id/likePost",likePost);


export default router;