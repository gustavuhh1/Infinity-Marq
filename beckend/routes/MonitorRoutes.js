const { MonitorControllers } = require('../controllers/MonitorControllers')

const router = require('express').Router()

router.post('/auth/register', MonitorControllers.createMonitor)

module.exports = router