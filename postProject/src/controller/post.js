import Post from "../models/post.js";
import { encrypt } from "../utils/encrypt.js";
import { decrypt } from "../utils/encrypt.js";

export const createPost =async(req, res)=>{
    const {message, spotifyLink, unlockDate, isPublic}= req.body;
    const ecnryptedMsg= encrypt(message);
    const post = await Post.create({
        owner: req.user.id,
        message: ecnryptedMsg,
        spotifyLink, unlockDate, isPublic,
        media: req.file?.path
    });
    res.json(post);
}

export const openPost = async(req, res)=>{
    const post=await Post.findById(req.params.id);
    if(!post.isUnlocked){
        return res.json({message: "post still locked"});
    }
    const decrypted=decrypt(post.message);
    res.json({ 
        message:decrypted,
        media: post.media,
        spotifyLink: post.spotifyLink
    });   
}