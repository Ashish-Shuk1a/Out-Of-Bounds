const User = require("../models/userModel")
const Event = require("../models/eventModel")
const Petition = require("../models/petitionModel")
const Admin = require("../models/adminModel")

const editLocation = async (req, res) => {
    try {
        const user = await User.updateMany({}, { location: { region: "Malad", city: "Mumbai", state: "Maharashtra", country: "India" } })
        const event = await Event.updateMany({}, { location: { region: "Malad", city: "Mumbai", state: "Maharashtra", country: "India" } })
        const petition = await Petition.updateMany({}, { location: { region: "Malad", city: "Mumbai", state: "Maharashtra", country: "India" } })
        return res.status(200).json({
            "status": "success",
            "message": "Location updated successfully"
        })
    } catch (error) {
        return res.status(400).json({
            "status": "error",
            "error": error.message
        })
    }
}

const addEventScope = async (req, res) => {
    try {
        const event = await Event.updateMany({}, { scope: "local" })
        return res.status(200).json({
            "status": "success",
            "message": "Scope updated successfully"
        })
    } catch (error) {
        return res.status(400).json({
            "status": "error",
            "error": error.message
        })
    }
}

module.exports = {
    editLocation,
    addEventScope
}