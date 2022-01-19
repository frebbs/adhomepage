const express = require('express');
const router = express.Router()

const adminController = require('../controller/adminController')

router.use('/', adminController.getAdminPage)

module.exports = router;