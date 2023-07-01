const mongoose = require("mongoose")

const CommentsSchema = new mongoose.Schema({
    commentor: String,
    commentorId: String,
    content: String,
    postId: String,
    id: String
});

const CommentsModel = mongoose.model("comments", CommentsSchema);
module.exports = CommentsModel;