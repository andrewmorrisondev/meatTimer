const router = require('express').Router()
const controller = require('./controllers.js')

router.get('/', controller.land)
router.get('/countdown', controller.countdown)