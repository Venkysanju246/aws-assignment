const mongoose = require("mongoose")
require("dotenv").config()

const conectionToDb = mongoose.connect(process.env.mongourl)

module.exports = conectionToDb