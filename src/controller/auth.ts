import { Request, Response } from "express";
import mongoose from "mongoose";

import userSchema from "../schema/userSchema";

let User = mongoose.model('user', userSchema);

class Auth{
  async signup(req: Request, res: Response){
    try {
      let user = await User.create(req.body)
      res.status(200).send(user)
    }
    catch (e) {
      console.log(`error occured ${e}`)
    }
  }
  async login(req: Request, res: Response){
    try {
      let user = await User.find({ username: req.body.username, password: req.body.password })
      if (user.length) res.status(200).send(user[0])
      else res.status(404).send('no user found')
    }
    catch (e) {
      console.log(`error occured ${e}`)
    }
  }
  async resetPassword(req: Request, res: Response){
    try {
      let user = await User.find({ username: req.body.username })
      if (user.length) {
        await User.updateOne({ '_id': user[0]._id }, { $set: { password: req.body.password } }, { upsert: true })
        res.status(200).send('password updated succesfully')
      }
      else {
        res.status(404).send('No such user name found')
      }
    }
    catch (e) {
      console.log(`error occured ${e}`)
    }
  }
}

export default Auth

 

