const Event = require("../models/eventModel")
const User = require("../models/userModel")
const EventParticipants = require("../models/eventParticipantsModel")

const createEvent = async (req, res) => {
    const admin_id = req.params.id
    const title = req.body.title
    const description = req.body.description
    const scope = req.body.scope
    const location = req.body.location
    const req_volunteers = req.body.req_volunteers
    const type = req.body.type
    const start_date = req.body.start_date
    const end_date = req.body.end_date
    const time = req.body.time
    const questions = req.body.questions != null ? req.body.questions : []
    const image = req.body.image != null ? req.body.image : null
    const video = req.body.video != null ? req.body.video : null
    const open = req.body.open
    const res_req = req.body.res_req
    const clip_req = req.body.clip_req
    const resp = {
        clip_req: clip_req,
        questions: questions
    }
    const event = new Event({
        admin_id: admin_id,
        title: title,
        description: description,
        scope: scope,
        location: location,
        req_volunteers: req_volunteers,
        type: type,
        start_date: start_date,
        end_date: end_date,
        time: time,
        image: image,
        video: video,
        open: open,
        res_req: res_req,
        response: resp
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
                    'location.region': user.location.region
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
                    'location.city': user.location.city
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
                    'location.state': user.location.state
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
                    'location.country': user.location.country
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

const userEventParticipation = async (req, res) => {
    try {
        const userId = req.params.id
        const eventId = req.body.event_id
        const user = await User.findById(userId)
        const event = await Event.findById(eventId)
        const isOpen = event.open
        try {
            if (isOpen) {
                const eventParticipant = new EventParticipants({
                    event_id: eventId,
                    participant_id: userId,
                    admin_id: event.admin_id,
                    status: "accepted"
                })
                await eventParticipant.save();

                return res.status(200).json({
                    "status": "success",
                    "message": "Event joined successfully",
                    "data": eventParticipant
                })
            }
            if (!event.res_req) {
                const eventParticipant = new EventParticipants({
                    event_id: eventId,
                    participant_id: userId,
                    admin_id: event.admin_id,
                    status: "pending"
                })
                await eventParticipant.save();

                return res.status(200).json({
                    "status": "success",
                    "message": "Event joining request sent successfully",
                    "data": eventParticipant
                })
            }
            else {
                let ans = []
                let resp = {}
                for (let question of event.response.questions) {
                    const answer = {
                        question: question,
                        answer: req.body.answers[question]
                    }
                    ans.push(answer)
                }
                if (event.response.clip_req) {
                    resp = {
                        video_clip: req.body.video_clip,
                        answers: ans
                    }
                }
                resp = {
                    video_clip: null,
                    answers: ans
                }
                const eventParticipant = new EventParticipants({
                    event_id: eventId,
                    participant_id: userId,
                    admin_id: event.admin_id,
                    status: "pending",
                    response: resp
                })
                await eventParticipant.save();

                return res.status(200).json({
                    "status": "success",
                    "message": "Event joining request sent successfully",
                    "data": eventParticipant
                })
            }
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

const getAdminEvents = async (req, res) => {
    const adminId = req.params.id
    const events = await Event.find({ admin_id: adminId })
    return res.status(200).json({
        "status": "success",
        "message": "Events fetched successfully",
        "data": events
    })
}


const adminEventParticipants = async (req, res) => {
    const adminId = req.params.id
    const eventId = req.body.event_id
    const participants = await EventParticipants.find({ admin_id: adminId, event_id: eventId })
    return res.status(200).json({
        "status": "success",
        "message": "Event participants fetched successfully",
        "data": participants
    })
}

module.exports = {
    createEvent,
    recommendEvent_Region,
    recommendEvent_City,
    recommendEvent_State,
    recommendEvent_Country,
    recommendEvent_Global,
    userEventParticipation,
    getAdminEvents,
    adminEventParticipants
}