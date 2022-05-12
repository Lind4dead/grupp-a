const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const productsController = require('./controllers/products/productsController');
const userController = require('./controllers/users/userController')
const orderController = require('./controllers/orders/ordersController')


dotenv.config()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/products', productsController)
app.use('/api/users', userController)
app.use('/api/orders', orderController)

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI

app.listen(PORT, () => console.log('Server is running at http://localhost:' + PORT))
mongoose.connect(MONGO_URI, () => console.log('Connected to DB'))


