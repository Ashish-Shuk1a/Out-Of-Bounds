const express = require('express');
const router = express.Router();


////////////////////////   User Authentication   ////////////////////////
const {getOTP,verifyOtp} = require("../controllers/loginController")

router.post('/otp',getOTP);
router.post('/otp/verify',verifyOtp);


////////////////////////   User Profile   ////////////////////////
const {createProfile,getUserDetail} =require("../controllers/ProfileController")

router.post('/user/create/profile',createProfile);
router.get('/user/:id/profile',getUserDetail);
//////////////////////////////////////////////////////////////////

////////////////////////   Admin Profile   ////////////////////////
const {createAdmin} = require("../controllers/adminController")

router.post('/admin/create/profile',createAdmin);

//////////////////////// Event Management ////////////////////////
const {createEvent,recommendEvent_Region,recommendEvent_City,
    recommendEvent_Country,recommendEvent_State,recommendEvent_Global,
userEventParticipation,getAdminEvents,adminEventParticipants} =require("../controllers/EventController")

router.post('/admin/:id/event/create',createEvent);

router.get('/user/:id/event/recommend/region',recommendEvent_Region);
router.get('/user/:id/event/recommend/city',recommendEvent_City);
router.get('/user/:id/event/recommend/state',recommendEvent_State);
router.get('/user/:id/event/recommend/country',recommendEvent_Country);
router.get('/user/:id/event/recommend/global',recommendEvent_Global);

router.post('/user/:id/event/participate',userEventParticipation);
router.get('/admin/:id/events',getAdminEvents);
router.post('/admin/:id/event/participants',adminEventParticipants);
//////////////////////////////////////////////////////////////////

//////////////////////// Petition Management ////////////////////////
const {createPetition,uploadImage,getFile} = require("../controllers/petitionController")

router.post('/admin/:id/petition/create',createPetition);
router.post('/petition/upload/image',uploadImage);
router.get('/petition/get/file/:id',getFile);

////////////////////////////////////////////////////////////////////


//////////////////////// Changes Management ////////////////////////
const {editLocation,addEventScope,addAbout,addZipCode,changeEvent} = require("../controllers/changesController")

router.put('/edit/location',editLocation);

router.put('/add/event/scope',addEventScope);
router.put('/add/about',addAbout);
router.put('/add/zip_code',addZipCode);
router.put('/change/event',changeEvent);


module.exports = router;