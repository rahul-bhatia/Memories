import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

export const getPosts = async (req,res) =>{
    try {
       const postMessages = await PostMessage.find();
       res.status(200).json(postMessages);        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const createPosts = async (req,res) =>{
    const post= req.body;

    const newPost=new PostMessage(post);
    try {
        console.log(post);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({messgae:error.message});
    }
}

export const updatePosts = async (req,res) =>{
    const {id :_id} = req.params;
    const post=req.body;
    console.log(post);
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not an Valid Id ')

    //This 'new:true' will return the updated version of data
    
    const updatedPost=await PostMessage.findOneAndUpdate(_id,{...post,_id} ,{new:true})
    console.log(updatedPost);
    res.json(updatedPost)

} 