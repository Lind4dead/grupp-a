const Order = require('./ordersSchema');
// const auth = require('../../authentication/auth')
// const auth = require('../../authentication/auth');



exports.createOrder = (req, res) => {
  console.log(req)
  Order.create({
    cart: req.body.cart,
    user: req.userData.id,
    total: req.body.total,
    quantity: req.body.quantity
  })
  .then(data => {
    res.status(201).json({
      statusCode: 201,
      status: true,
      message: 'Order successfully stored',
      data
    })
  })
  .catch(err => {
    res.status(401).json(err)
  
  })


}


exports.findOrderAdmin = (req, res) => {

  Order.find({ }, (err, result) => {
    
    if(err) {
      return res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Something went wrong when fetching the products',
        err
      })
    }

    if(!result) {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: 'You do not have any orders',
        err
      })
    }

    res.status(200).json(result)
  })
  
}
exports.findOrder = (req, res) => {

  Order.find({ user: req.userData.id }, (err, result) => {
    if(err) {
      return res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Something went wrong when fetching the products',
        err
      })
    }

    if(!result) {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: 'You do not have any orders',
        err
      })
    }

    res.status(200).json(result)
  })
  
}

exports.getOneOrder = (req, res) => {

  Order.exists({ _id: req.params.id }, (err, result) => {
    if(err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'You made a bad request',
        err
      })
    }
    if(!result) {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: 'That order does not exist',
      })
    }

    
    
    Order.findById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: err.message || 'Internal server error'
      })
    })

  } )

}


exports.updateOrder = (req, res) => {

  Order.exists({ _id: req.params.id }, (err, result) => {

    if (err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'You made a bad request',
        err
      })
    }

    if (!result) {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: 'That order does not exist',
      })
    }

    Order.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(data => {
        res.status(200).json({
          statusCode: 200,
          status: true,
          message: 'Order updated successfully',
          data
        })
      })
      .catch(err => {
        
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to update order',
          err
        })
      })

  })

}



