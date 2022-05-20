const router = require('express').Router();
const userModel = require('../../models/users/userModel')
const auth = require('../../authentication/auth')

// POST för att registera användare
router.post('/register', userModel.userRegistration)

// POST för att logga in användare
router.post('/login', userModel.loginUser)

// Uppdatera användare med ID
router.patch('/:id', auth.verifyToken, userModel.updateUser)

// Hämta alla användare
router.get('/', userModel.getAllUsers)

// Hämta en specifik användare med ID
router.get('/:id', userModel.getUserById)






module.exports = router;