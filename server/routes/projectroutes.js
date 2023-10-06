const express = require('express');
const router = express.Router();


////////////////////////   User Profile   ////////////////////////
const {createProfile} =require("../controllers/ProfileController")

router.post('/user/create/profile',createProfile);
//////////////////////////////////////////////////////////////////

////////////////////////   Admin Profile   ////////////////////////
const {createAdmin} = require("../controllers/adminController")

router.post('/admin/create/profile',createAdmin);

//////////////////////// Event Management ////////////////////////
const {createEvent,recommendEvent} =require("../controllers/EventController")

router.post('/admin/:id/event/create',createEvent);

router.get('/user/:id/event/recommend',recommendEvent);
//////////////////////////////////////////////////////////////////

//////////////////////// Petition Management ////////////////////////
const {createPetition} = require("../controllers/petitionController")

router.post('/admin/:id/petition/create',createPetition);


module.exports = router;