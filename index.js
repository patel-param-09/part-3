const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/part3")

const phonebookSchema = mongoose.Schema({
    id: Number,
    name:String,
    number:Number
})

module.exports = mongoose.model("phonebook", phonebookSchema)