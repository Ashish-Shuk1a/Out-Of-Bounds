const express = require('express');
const router = express.Router();

const {createProfile} =require("../controllers/ProfileController")

router.post('/user/create/profile',createProfile);


module.exports = router;