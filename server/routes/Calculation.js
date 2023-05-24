const express = require('express')
const { addCalculation, deleteCalculation, getHistory } = require('../controllers/Calculation')
const verifyToken = require('../middlewares/VerifyToken')
const router = express.Router()

router.post("/", verifyToken, addCalculation)
router.get("/", verifyToken, getHistory)
router.delete("/:id", verifyToken, deleteCalculation)

module.exports = router