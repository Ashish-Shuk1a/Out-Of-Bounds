const Event = require("../models/eventModel")
const User = require("../models/userModel")

const createEvent = async (req, res) => {
    const admin_id = req.params.id
    const title = req.body.title
    const description = req.body.description
    const location = req.body.location
    const req_volunteers = req.body.req_volunteers
    const type = req.body.type
    const start_date = req.body.start_date
    const end_date = req.body.end_date
    const time = req.body.time
    const questions = req.body.questions != null ? req.body.questions : []
    const image = req.body.image != null ? req.body.image : null

    const event = new Event({
        admin_id: admin_id,
        title: title,
        description: description,
        location: location,
        req_volunteers: req_volunteers,
        type: type,
        start_date: start_date,
        end_date: end_date,
        time: time,
        questions: questions,
        image: image
    })
    await event.save();
    return res.status(200).json({
        "status": "success",
        "message": "Event created successfully",
        "data": event
    })
}

const recommendEvent_Region = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        try {
            let events = [];
            for (let interest of user.area_of_interest) {
                const event = await Event.find({
                    type: interest,
                    'location.region':user.location.region
                });
                events = events.concat(event);
            }
            return res.status(200).json({
                "status": "success",
                "message": "Regional Events fetched successfully",
                "data": events
            })
        } catch (error) {
            return res.status(400).json({
                "status": "error",
                "error": error.message
            })
        }
    } catch (error) {
        return res.status(500).json({
            "status": "error",
            "message": "Internal server error",
            "error": error.message
        })
    }
}

const recommendEvent_City = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        try {
            let events = [];
            for (let interest of user.area_of_interest) {
                const event = await Event.find({
                    type: interest,
                    'location.city':user.location.city
                });
                events = events.concat(event);
            }
            return res.status(200).json({
                "status": "success",
                "message": "City Events fetched successfully",
                "data": events
            })
        } catch (error) {
            return res.status(400).json({
                "status": "error",
                "error": error.message
            })
        }
    } catch (error) {
        return res.status(500).json({
            "status": "error",
            "message": "Internal server error",
            "error": error.message
        })
    }
}
const recommendEvent_State = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        try {
            let events = [];
            for (let interest of user.area_of_interest) {
                const event = await Event.find({
                    type: interest,
                    'location.state':user.location.state
                });
                events = events.concat(event);
            }
            return res.status(200).json({
                "status": "success",
                "message": "State Events fetched successfully",
                "data": events
            })
        } catch (error) {
            return res.status(400).json({
                "status": "error",
                "error": error.message
            })
        }
    } catch (error) {
        return res.status(500).json({
            "status": "error",
            "message": "Internal server error",
            "error": error.message
        })
    }
}
const recommendEvent_Country = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        try {
            let events = [];
            for (let interest of user.area_of_interest) {
                const event = await Event.find({
                    type: interest,
                    'location.country':user.location.country
                });
                events = events.concat(event);
            }
            return res.status(200).json({
                "status": "success",
                "message": "Country Events fetched successfully",
                "data": events
            })
        } catch (error) {
            return res.status(400).json({
                "status": "error",
                "error": error.message
            })
        }
    } catch (error) {
        return res.status(500).json({
            "status": "error",
            "message": "Internal server error",
            "error": error.message
        })
    }
}
const recommendEvent_Global = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        try {
            let events = [];
            for (let interest of user.area_of_interest) {
                const event = await Event.find({
                    type: interest,
                });
                events = events.concat(event);
            }
            return res.status(200).json({
                "status": "success",
                "message": "Global Events fetched successfully",
                "data": events
            })
        } catch (error) {
            return res.status(400).json({
                "status": "error",
                "error": error.message
            })
        }
    } catch (error) {
        return res.status(500).json({
            "status": "error",
            "message": "Internal server error",
            "error": error.message
        })
    }
}

module.exports = {
    createEvent,
    recommendEvent_Region,
    recommendEvent_City,
    recommendEvent_State,
    recommendEvent_Country,
    recommendEvent_Global
}