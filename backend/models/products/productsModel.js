const Product = require('./productsSchema')


exports.getAllProducts = (req, res) => {

  Product.find({}, (err, result) => {
    if (err) {
      return res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Something went wrong when fetching the products',
        err
      })
    }

    res.status(200).json(result)
  })



}

exports.getOneProduct = (req, res) => {

  Product.exists({ _id: req.params.id }, (err, result) => {
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
        message: 'That product does not exist',
      })
    }



    Product.findById(req.params.id)
      .then(data => res.status(200).json(data))
      .catch(err => {
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: err.message || 'Internal server error'
        })
      })

  })

}

exports.createNewProduct = (req, res) => {

  // Product.exists({ subTitle: req.body.subTitle }, (err, result) => {

  //   if (err) {
  //     return res.status(500).json(err)
  //   }
  //   if (result) {
  //     return res.status(401).json({
  //       statusCode: 401,
  //       status: false,
  //       message: 'A product by that name already exists.',
  //       res
  //     })
  //   }

    Product.create({
      title: req.body.title,
      subTitle: req.body.subTitle,
      price: req.body.price,
      imgUrl: req.body.imgUrl,
      produced: req.body.produced,
      container: req.body.container,
      alcPercentage: req.body.alcPercentage,
      desc: req.body.desc,
      prisL: req.body.prisL,
      type: req.body.type,
    })
      .then(data => {
        res.status(201).json({
          statusCode: 201,
          status: true,
          data
        })
      })
      .catch(err => {
        res.status(401).json(err)
      })
  // })

}

exports.updateProduct = (req, res) => {

  Product.exists({ _id: req.params.id }, (err, result) => {

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
        message: 'That product does not exist',
      })
    }

    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(data => {
        res.status(200).json({
          statusCode: 200,
          status: true,
          message: 'Product updated successfully',
          data
        })
      })
      .catch(err => {
        if (err.code === 11000) {
          return res.status(400).json({
            statusCode: 400,
            status: false,
            message: 'A product with that name already exists'
          })
        }

        res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to update product',
          err
        })
      })

  })

}

exports.deleteProduct = (req, res) => {
  Product.exists({ _id: req.params.id }, (err, result) => {

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
        message: 'That product does not exist',
      })
    }

    Product.findOneAndDelete({ _id: req.params.id })
      .then(data => {
        res.status(200).json({
          statusCode: 200,
          status: true,
          message: 'Product has been deleted successfully',
          data
        })
      })
      .catch(err => {
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to update product',
          err
        })
      })

  })
}