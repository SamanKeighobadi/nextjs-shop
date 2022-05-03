import connectDB from "../../../utils/connectDB";
// import bcrypt from 'bcrypt'
import User from "../../../models/userModel";

connectDB();

const register = async (req,res) => {
    try {
        const {name,email,password,confimrPassword} = req.body;

        // const passwordHash = await bcrypt(password,12)

        const newUser = new User({name,email,password,confimrPassword})
        console.log(newUser);
        
        res.json({mgs:"Register success"})
    } catch (ex) {
        console.log(ex);
        return res.status(500).json({err:"error"})
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req,res) => {
    switch(req.method){
        case "POST":
            await register(req,res);
            break;
        default:
            break;
    }
}