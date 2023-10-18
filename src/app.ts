import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"

import Auth from "./controller/auth"

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.set("port", process.env.PORT || 3100)

mongoose.connect('mongodb://localhost/node-ts', {
  useCreateIndex: true,
  useNewUrlParser: true
})

let auth = new Auth

app.post('/login', auth.login)
app.post('/sign-up', auth.signup)
app.put('/reset-password', auth.resetPassword)

export default app