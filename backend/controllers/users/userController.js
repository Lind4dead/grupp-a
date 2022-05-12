const router = require('express').Router();
const userModel = require('../../models/users/userModel')
const auth = require('../../authentication/auth')

// POST för att registera användare
router.post('/register', userModel.userRegistration)

// POST för att logga in användare
router.post('/login', userModel.loginUser)

router.patch('/:id', auth.verifyToken, userModel.updateUser)







module.exports = router;