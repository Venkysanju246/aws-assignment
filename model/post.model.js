const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    title:String,
    content:String
})

const Usermodel = mongoose.model("user", postSchema)

module.exports = Usermodel