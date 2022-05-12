const User = require('./userSchema')
const bcrypt = require('bcryptjs')
const auth = require('../../authentication/auth')
const { json } = require('express')


exports.userRegistration = (req, res) => {
  
  User.exists({ email: req.body.email }, (err, result) => {

    if(err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'You made a bad request',
        err
      })
    }
    if(result) {
      return res.status(401).json({
        statusCode: 401,
        status: false,
        message: 'User with that email already exists'
      })
    }

    
    bcrypt.genSalt(10, (err, salt) => {

      bcrypt.hash(req.body.password, salt, (err, hash) => {

        User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          passwordHash: hash,
        })
        .then(data => {
          console.log(data)
          res.status(201).json({
            statusCode: 201,
            status: true,
            message: 'User was successfully created',
            token: auth.generateToken(data),
            data
          })
        })
        .catch(err => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to create user',
            err
          })
        })


    });

    })

  })
}




exports.loginUser = (req, res) => {

  User.findOne({ email: req.body.email }, (err, user) => {

    if(err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'You made a bad request'
      })
    }

    if(!user) {
      return res.status(401).json({
        statusCode: 401,
        status: false,
        message: 'Incorrect email or password'
      })
    }

    bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {

      if(err) {
        return res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Something went wrong when trying to decrypt the password'
        }) 
      }

      if(!result) {
        return res.status(401).json({
          statusCode: 401,
          status: false,
          message: 'Incorrect email or password'
        })
      }

      res.status(200).json({
        statusCode: 200,
        status: true,
        message: 'Authentication was successful',
        token: auth.generateToken(user),
        user
      })


    })

  })

}



exports.updateUser = (req, res) => {
  
  User.findById({ _id: req.userData.id }, (err, data) => {

    if(!data.isAdmin) {
      return res.status(401).json({
        statusCode: 401,
        status: false,
        message: 'Unauthorized! You do not have permission!'
      })
    }
  
  User.exists({ _id: req.params.id }, (err, result) => {
    

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
        message: 'User does not exist',
        err
      })
    }


    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, data) => {

      if(err) {
        return res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to update user'
        })
      }

      return res.status(200).json({
        statusCode: 200,
        status: true,
        message: 'User updated successfully',
        data
      })

    })
    

  })
})
}