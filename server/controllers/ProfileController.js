const User = require("../models/userModel")

const createProfile = async (req, res) => {
    try {
        const name = req.body.name
        const email = req.body.email != null ? req.body.email : null
        const number = req.body.number
        const location = req.body.location != null ? req.body.location : null
        const area_of_interest = req.body.area_of_interest != null ? req.body.area_of_interest : []
        const prior_exp = req.body.prior_exp != null ? req.body.prior_exp : []
        const user = new User({
            name: name,
            email: email,
            number: number,
            location: location,
            area_of_interest: area_of_interest,
            prior_exp: prior_exp
        })
        await user.save();
        return res.status(201).json({
            "status": "success",
            "message": "User created successfully",
            "data": user
        })
    } catch (error) {
        return res.status(500).json({
            "status": "error",
            "message": "Internal server error",
            "error": error.message
        })
    }
}

const getUserDetail = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        return res.status(200).json({
            "status": "success",
            "message": "User fetched successfully",
            "data": user
        })
    } catch (error) {
        res.status(500).json({
            "status": "error",
            "message": "Internal server error",
            "error": error.message
        })
    }
}

module.exports = {
    createProfile,
    getUserDetail
}