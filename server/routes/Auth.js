const express = require('express')
const { signUp, logIn } = require('../controllers/Auth')
const router = express.Router()

router.post("/signup", signUp)
router.post("/login", logIn)

module.exports = router