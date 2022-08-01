const Router = require('express').Router;
const status = require('./status');

const router = new Router();

router.use('/status', status);

module.exports = router;