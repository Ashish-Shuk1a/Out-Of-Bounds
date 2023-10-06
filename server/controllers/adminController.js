const Admin = require("../models/adminModel")

const createAdmin = async (req, res) => {
    try {
        const name = req.body.name
        const email = req.body.email
        const number = req.body.number
        const admin = new Admin({
            name: name,
            email: email,
            number: number
        })
        await admin.save();
        return res.status(201).json({
            "status": "success",
            "message": "Admin created successfully",
            "data": admin
        })
    } catch (error) {
        return res.status(500).json({
            "status": "error",
            "message": "Internal server error",
            "error": error.message
        })
    }
}

module.exports ={
    createAdmin
}