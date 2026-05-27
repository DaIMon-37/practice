import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../model/user.js';
import { sendCookie } from '../utils/features.js';


export const getAllUsers = async (req, res) =>{
    
};

export const login = async (req, res, next) => {
    const {email, password} = req.body || {};

    const user = await User.findOne({email}).select("+password");
    if (!user){
        return res.status(404).json({
            success : false,
        message : "Invalid email or password"
        });
    };
    const ismatch = await bcrypt.compare(password, user.password);
    if (!ismatch){
        return res.status(404).json({
            success : false,
            message : "Invalid email or password"
        });
    }
    
    sendCookie(user, res,`Welcome Back, ${user.name}`, 200);
}

export const register = async (req, res) => {
    const {name, email, password} = req.body;

    let user = await User.findOne({email});

    if (user){
        return res.status(400).json({
            success : false,
        message : "User already exists"
        });
    }

    user = await User.create({
        name,
        email,
        password : await bcrypt.hash(password, 10)
    })
    sendCookie(user, res, "Registered Successfully", 201);
};

export const logout =  (req, res) => {

    res.status(200).cookie("token", "",{expires:new Date(Date.now())}).json({
        success : true,
        user : req.user
    });
};

export const getMyDetails =  (req, res) => {

    res.status(200).json({
        success : true,
        user : req.user
    });
};