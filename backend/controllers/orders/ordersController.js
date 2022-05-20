const router = require('express').Router();
const orderModel = require('../../models/orders/ordersModel')
const auth = require('../../authentication/auth')

// Skapa order
router.post('/', auth.verifyToken,  orderModel.createOrder)

// Hitta order som admin
router.get('/admin', auth.verifyToken, orderModel.findOrderAdmin)
// Hitta användarens ordrar
router.get('/', auth.verifyToken, orderModel.findOrder)

router.get('/:id', orderModel.getOneOrder)


module.exports = router;