const express = require('express');
const router = express.Router();
const parksRouter = express.Router();

router.use('/users', require('./users'));
parksRouter.use('/parks', require('./parks'));

module.exports = router;