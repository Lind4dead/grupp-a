const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY

exports.generateToken = user => {
  return jwt.sign({ id: user._id, isAdmin: user.isAdmin }, secretKey, { expiresIn: '1h' })
}


exports.verifyToken = (req, res, next) => {

  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token)
    req.userData = jwt.verify(token, secretKey);
    console.log(req.userData)
    
    next()
  }
  catch {
    return res.status(401).json({
      statusCode: 401,
      status: false,
      message: 'You have no access! Please login.'
    })
  }


}