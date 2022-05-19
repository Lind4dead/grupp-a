const router = require('express').Router();
const orderModel = require('../../models/orders/ordersModel')
const auth = require('../../authentication/auth')

// Skapa order
router.post('/', auth.verifyToken,  orderModel.createOrder)

// Hitta order
router.get('/', orderModel.findOrder)

router.get('/:id', orderModel.getOneOrder)


module.exports = router;