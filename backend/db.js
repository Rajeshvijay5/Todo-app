const mongoose = require("mongoose");
const { string } = require("zod");
import { mongoDBURL } from "./config";

mongoose.connect(mongoDBURL)

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed : Boolean

})

const todo = mongoose.model('todos',todoSchema);

module.exports={
    todo
}