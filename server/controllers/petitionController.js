const Petition = require("../models/petitionModel")
const User = require("../models/userModel")
const File = require("../models/fileModel")
const multer = require('multer'); // For handling multipart/form-data (file upload)

const storage = multer.memoryStorage(); // Store file data in memory
const upload = multer({ storage: storage });

const createPetition = async (req, res) => {
    const admin_id = req.params.id
    const scope = req.body.scope
    const topic = req.body.topic
    const title = req.body.title
    const story = req.body.story
    const image = req.body.image != null ? req.body.image : null
    const updates = req.body.updates != null ? req.body.updates : null

    const petition = new Petition({
        admin_id: admin_id,
        scope: scope,
        topic: topic,
        title: title,
        story: story,
        image: image,
        updates: updates
    })
    await petition.save();
    return res.status(200).json({
        "status": "success",
        "message": "Petition created successfully",
        "data": petition
    })
}

// const createPetition = async (req, res) => {
//     try {
//         const admin_id = req.params.id;
//         const scope = req.body.scope;
//         const topic = req.body.topic;
//         const title = req.body.title;
//         const story = req.body.story;
//         const updates = req.body.updates != null ? req.body.updates : null;

//         // Check if an image was uploaded
//         upload.single('image')(req, res, async (err) => {
//             if (err) {
//                 return res.status(400).json({ message: 'Image upload failed.', error: err.message });
//             }

//             const image = req.file || null;
//             try {
//                 const petition = new Petition({
//                     admin_id: admin_id,
//                     scope: scope,
//                     topic: topic,
//                     title: title,
//                     story: story,
//                     image:image.buffer?{data: image.buffer, contentType: image.mimetype}:null,
//                     updates: updates
//                 });

//                 await petition.save();
//                 return res.status(200).json({
//                     "status": "success",
//                     "message": "Petition created successfully",
//                     "data": petition
//                 });
//             } catch (error) {
//                 return res.status(400).json({
//                     "status": "error",
//                     "data":{
//                         "admin_id": admin_id,
//                         "scope": scope,
//                         "topic": topic,
//                         "title": title,
//                         "story": story,

//                     },
//                     "error": error.message
//                 });
//             }
//         });
//     } catch (error) {
//         res.status(500).json({
//             "status": "error",
//             "message": "Internal server error",
//             "error": error.message
//         })
//     }
// };

const uploadImage = async (req, res) => {
    const admin_id = req.params.id;
        const scope = req.body.scope;
        const topic = req.body.topic;
        const title = req.body.title;
        const story = req.body.story;
        const updates = req.body.updates != null ? req.body.updates : null;

    upload.single('image')(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: 'Image upload failed.', error: err.message });
        }

        const image = req.file || null;
        const img = new Petition({
            admin_id: admin_id,
                    scope: scope,
                    topic: topic,
                    title: title,
                    story: story,
                    image:image.buffer?{data: image.buffer, contentType: image.mimetype}:null,
                    updates: updates
        });

        await img.save();

        return res.status(200).json({
            "status": "success",
            "message": "Image uploaded successfully",
            "data": img
        });
    });
}

const getFile = async (req, res) => {
    try {
        const file = await File.findById(req.params.id);

        if (!file) {
            return res.status(404).json({ message: 'File not found.' });
        }

        res.set('Content-Type', file.contentType);
        res.send(file.data);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error.', error: error.message });
    }
}

const recommendPetition_Region = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        try {
            let petitions = [];
            for (let interest of user.area_of_interest) {
                const petition = await Petition.find({
                    topic: interest,
                    'location.region': user.location.region
                });
                petitions = petitions.concat(petition);
            }
            return res.status(200).json({
                "status": "success",
                "message": "Regional Petitions fetched successfully",
                "data": petitions
            })
        }
        catch (error) {
            return res.status(400).json({
                "status": "error",
                "error": error.message
            })
        }
    } catch (error) {
        return res.status(500).json({
            "status": "error",
            "message": "Internal Server Error",
            "error": error.message
        })
    }
}

const recommendPetition_City = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        try {
            let petitions = [];
            for (let interest of user.area_of_interest) {
                const petition = await Petition.find({
                    topic: interest,
                    'location.city': user.location.city
                });
                petitions = petitions.concat(petition);
            }
            return res.status(200).json({
                "status": "success",
                "message": "City Petitions fetched successfully",
                "data": petitions
            })
        }
        catch (error) {
            return res.status(400).json({
                "status": "error",
                "error": error.message
            })
        }
    } catch (error) {
        return res.status(500).json({
            "status": "error",
            "message": "Internal Server Error",
            "error": error.message
        })
    }
}

const recommendPetition_State = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        try {
            let petitions = [];
            for (let interest of user.area_of_interest) {
                const petition = await Petition.find({
                    topic: interest,
                    'location.state': user.location.state
                });
                petitions = petitions.concat(petition);
            }
            return res.status(200).json({
                "status": "success",
                "message": "State Petitions fetched successfully",
                "data": petitions
            })
        }
        catch (error) {
            return res.status(400).json({
                "status": "error",
                "error": error.message
            })
        }
    } catch (error) {
        return res.status(500).json({
            "status": "error",
            "message": "Internal Server Error",
            "error": error.message
        })
    }
}

const recommendPetition_Country = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        try {
            let petitions = [];
            for (let interest of user.area_of_interest) {
                const petition = await Petition.find({
                    topic: interest,
                    'location.country': user.location.country
                });
                petitions = petitions.concat(petition);
            }
            return res.status(200).json({
                "status": "success",
                "message": "Country Petitions fetched successfully",
                "data": petitions
            })
        }
        catch (error) {
            return res.status(400).json({
                "status": "error",
                "error": error.message
            })
        }
    } catch (error) {
        return res.status(500).json({
            "status": "error",
            "message": "Internal Server Error",
            "error": error.message
        })
    }
}

const recommendPetition_Global = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        try {
            let petitions = [];
            for (let interest of user.area_of_interest) {
                const petition = await Petition.find({
                    topic: interest
                });
                petitions = petitions.concat(petition);
            }
            return res.status(200).json({
                "status": "success",
                "message": "Global Petitions fetched successfully",
                "data": petitions
            })
        }
        catch (error) {
            return res.status(400).json({
                "status": "error",
                "error": error.message
            })
        }
    } catch (error) {
        return res.status(500).json({
            "status": "error",
            "message": "Internal Server Error",
            "error": error.message
        })
    }
}

module.exports = {
    createPetition,
    recommendPetition_Region,
    recommendPetition_City,
    recommendPetition_State,
    recommendPetition_Country,
    recommendPetition_Global,
    uploadImage,
    getFile
}