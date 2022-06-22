import RegisterUser from "../models/user.js";
import bcrypt from 'bcrypt';

export const SignupNewUser =async (req, res) => {  
    try {
       const user = req.body
        const newUser =new RegisterUser(user);

        await newUser.save();

        return res.status(200).json({msg: 'Signup successfully'});
    } catch (error) {
        res.status(500).json({msg: "Error while signup user", error})
    }
};

export const AuthenticateLog =async (req, res) => {
    let user = await RegisterUser.findOne({username:req.body.username, password: req.body.password});

   
    try {
       if(user) {
        res.status(200).json({msg: 'success'});
       }
       else {
        res.status(404).json({msg: 'entered details are incorrect'})
       }
    } catch (error) {
        res.status(400).json("Entered details are incorrect")
    }
};

// if(!user) {
//     res.status(404).json({msg: 'Entered details does not match'});
// }

