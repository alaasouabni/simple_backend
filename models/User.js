const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");


// User Schema
const UserSchema = new mongoose.Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    verified: {
        type: Boolean,
        required: true,
        default: false
    },
    resetToken: {
        type: String,
    },
    expireToken: {
        type: Date,
    },
});

UserSchema.methods.generateVerificationToken = function () {
    console.log("test");
    const user = this;
    const verificationToken = jwt.sign(
        { ID: user._id },
        process.env.USER_VERIFICATION_TOKEN_SECRET,
        { expiresIn: "1h" }
    );
    console.log(verificationToken);
    return verificationToken;
};

// User model
const User = mongoose.model("User", UserSchema)

module.exports = User