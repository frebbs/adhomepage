const express = require('express');
const router = express.Router();

const rootController = require('../controller/rootController')

router.get('/', rootController.getHomePAge)
router.get('/about', rootController.getAboutPage)
router.get('/login', rootController.getLoginPage)

module.exports = router;