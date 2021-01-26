const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    user : String,
    userId: Number
})

const userModel = mongoose.model("userSchema",userSchema)

module.exports = userModel;