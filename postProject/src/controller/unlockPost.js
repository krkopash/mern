import cron from "node-cron";

import Post from "../models/post.js";

cron.schedule("", async()=>{
    const now = new Date();
    const post = await Post.updateMany({
        unlockDate: {$lt:now},
        isUnlocked: false
    }, {isUnlocked: true});

    console.log("post unlocked:", post.modifiedCount);
})
