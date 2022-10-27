import path from 'path'
import express from 'express'
import dotenv  from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import nodemailer from 'nodemailer'
import {notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'


dotenv.config()

connectDB()

const app = express()

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

app.post('/send_mail', cors(), async (req, res) => {
  let {text} =req.body
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    }
  })

await transport.sendMail({
  from: 'admin@example.com',
  to: "test@test.com",
  subject: "test email",
  html: `<div className="email" style="
  border: 1px solid black;
  padding: 20px;
  font-family: sans-serif;
  line-height: 2;
  font-size: 20px;
  ">
  <h2>Here is your email</h2>
  <p>${text}</p>

  <p>All the best, LOGO</p>
  </div>`
  
})
})

app.get('/', (req, res) => {
  res.send('API is running..')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.use(notFound)

app.use(errorHandler)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
