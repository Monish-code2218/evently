const express = require('express');
const router = express.Router();
const {getallevents} = require('../controllers/admin');


router.route('/events').get(getallevents);


module.exports = router;