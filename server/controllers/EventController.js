const Event = require("../models/eventModel")

const createEvent = async(req,res)=>{
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
        title:title,
        description:description,
        location:location,
        req_volunteers:req_volunteers,
        type:type,
        start_date:start_date,
        end_date:end_date,
        time:time,
        questions:questions,
        image:image
    })
    await event.save();
    return res.status(200).json({
        "status":"success",
        "message":"Event created successfully",
        "data":event
    })
}