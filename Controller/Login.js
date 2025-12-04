import express from 'express'
import User from '../MODELS/User.js'

const Login = () => {
  const {username,password} =req.body
  try {
    const existeduser= User.findOne({username:username})
    if(!existeduser){
      return res.status(404).json({status:404,message:"User not found"})     
    }
    if(existeduser.password !== password){
      return res.status(401).json({status:401,message:"Invalid password"})
    }
    return res.status(200).json({status:200,message:"Login successful",data:existeduser})
}catch (error) {
    return res.status(500).json({status:500,message:"Server error",error:error.message})
  }
}

export default Login
