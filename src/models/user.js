const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    firstname : String,
    lastname : String,
    email : { 
        type: String, 
        unique : true },
    password : String,
    role : String,
    departamento : String,
    municipio : String,
    active : Boolean,
    avatar : String
});

module.exports = mongoose.model("User", UserSchema);
