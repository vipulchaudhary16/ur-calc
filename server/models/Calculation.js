const mongoose = require("mongoose")

/*
User
    - userId : String
    - name : String
    - calculation: String
*/

const Calculation = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    calculation: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("calculation", Calculation)
