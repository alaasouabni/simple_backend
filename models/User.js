const mongoose = require('mongoose');


// User Schema
const UserSchema = new mongoose.Schema({
    email: {type: String, unique: true, required: true},
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true}
})

// User model
const User = mongoose.model("User", UserSchema)

module.exports = User