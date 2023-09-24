const userModel = require ("../models/user")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const createUser = async (req, res)=>{
    const userInfo = req.body
    const existingUser = await userModel.findOne({where:{email:userInfo.email}})
    if(existingUser){
      return res.status(409).json({
            message:"user already exist"
        })
    }
    const newUser = await userModel.create({
        username:userInfo.username,
        password:userInfo.password,
        email:userInfo.email,
        phone_number:userInfo.phone_number,
        gender:userInfo.gender,
        address:userInfo.address,
        city:userInfo.city,
        state:userInfo.state,
        country:userInfo.country
    })

    const token = jwt.sign({email:newUser.email, _id:newUser._id}, process.env.JWT_SECRET, {expiresIn:"2h"})

    res.status(200).json({
        message:"successful signup",
        newUser,
        token
    })
}

const login = async (req,res)=>{
    const userLoginInfo = req.body
    const existingUser = await userModel.findOne({where:{email:userLoginInfo.email}})
    if(!existingUser){
      return res.status(404).json({
            message:"you are not found",
        })
    }

    const validPassword = await existingUser.validPassword(userLoginInfo.password)
    if(!validPassword){
      return  res.status(422).json({
            message:"email or password is incorrect",
        })
    }

    const token = await jwt.sign({email:existingUser.email, _id:existingUser._id},process.env.JWT_SECRET,{expiresIn:"1h"})
    
    return res.status(200).json({
        message:"successful Login",
        token,
        existingUser
    })
}

module.exports = {createUser, login}