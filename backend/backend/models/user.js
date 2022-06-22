import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : String,
    password: String,
    Cat: String, //create at
    Cby: String,  //created by
});

const RegisterUser = mongoose.model("RegisterUser", userSchema);

export default RegisterUser;