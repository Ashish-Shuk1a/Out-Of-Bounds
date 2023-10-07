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

const addAbout = async(req,res)=>{
    const user = await User.updateMany({}, { about: "This is a sample about"},{new:true})
    return res.status(200).json({
        "status": "success",
        "message": "About updated successfully",
        "data": user
    })
}

const addZipCode = async(req,res)=>{
    const user = await User.updateMany({},{location:{region:"Malad",city:"Mumbai",state:"Maharashtra",country:"India",zip_code:"400064"}})
    const event = await Event.updateMany({},{location:{region:"Malad",city:"Mumbai",state:"Maharashtra",country:"India",zip_code:"400064"}})
    const petition = await Petition.updateMany({},{location:{region:"Malad",city:"Mumbai",state:"Maharashtra",country:"India",zip_code:"400064"}})
    return res.status(200).json({
        "status": "success",
        "message": "Zip Code updated successfully"
    })
}

const changeEvent = async(req,res)=>{
    const event = await Event.updateMany({},{video:null,open:true,res_req:false,response:{clip_req:false,questions:[]},questions:null},{new:true})
    return res.status(200).json({
        "status": "success",
        "message": "Event updated successfully",
        "data": event
    })
}

const changeInterest = async(req,res)=>{
    const user = await User.updateMany({},{area_of_interest:["Education","Health"]},{new:true})
    const events = await Event.updateMany({},{type:"Education"},{new:true})
    const petitions = await Petition.updateMany({},{topic:"Education"},{new:true})
    return res.status(200).json({
        "status": "success",
        "message": "Interest updated successfully",
        "data": user,events,petitions
    })
}

module.exports = {
    editLocation,
    addEventScope,
    addAbout,
    addZipCode,
    changeEvent,
    changeInterest
}