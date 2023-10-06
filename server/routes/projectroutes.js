const express = require('express');
const router = express.Router();

const {createUser,getUser,updateUser,deleteUser} = require('../controllers/testController')

router.post('/user/create',createUser);
router.get('/user/:id',getUser);
router.put('/user/:id/update',updateUser);
router.delete('/user/:id/delete',deleteUser);


module.exports = router;