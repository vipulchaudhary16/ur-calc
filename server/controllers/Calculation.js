const Calculation = require("../models/Calculation")

const addCalculation = async (req, res) => {
    try {
        const { name, calculation } = req.body
        const { userId } = req.user
        const calculationObj = new Calculation({
            name,
            calculation,
            userId
        })
        await calculationObj.save()
        res.json({ message: "Calculation saved" })
    } catch (error) {
        //internal server error
        res.status(500).json({ 'message': "Internal Server error" })
        console.log(error)
    }
}

const deleteCalculation = async (req, res) => {
    try {
        const { id } = req.params
        const { userId } = req.user
        await Calculation.findOneAndDelete({ _id: id, userId }).then(() => {
            res.json({ message: "Calculation deleted" })
        }).catch(() => {
            res.status(404).json({ message: "Calculation does not exists" })
        })
    } catch (error) {
        //internal server error
        res.status(500).json({ 'message': "Internal Server error" })
        console.log(error)
    }
}

const getHistory = async (req, res) => {
    try {
        const { userId } = req.user
        await Calculation.find({ userId }).then((data) => {
            res.json(data)
        }).catch(() => {
            res.status(404).json({ message: "Calculations does not exists" })
        })
    } catch (error) {
        //internal server error
        res.status(500).json({ 'message': "Internal Server error" })
        console.log(error)
    }
}

module.exports = { addCalculation, deleteCalculation, getHistory }