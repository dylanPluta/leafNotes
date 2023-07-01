const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    userName: String,
    id: Number
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;