const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    poster: String,
    posterId: Number,
    title: String,
    content: String,
    id: Number
});

const PostModel = mongoose.model("posts", PostSchema);
module.exports = PostModel;