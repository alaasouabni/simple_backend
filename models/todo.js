const mongoose = require('mongoose');

// User Schema
const TodoSchema = new mongoose.Schema({
    email: {type: String, required: true},
    reminder: {type: String, required: true},
    completed: {type: Boolean, required: true, default: false}
})

// User model
const Todo = mongoose.model("Todo", TodoSchema)

module.exports = Todo