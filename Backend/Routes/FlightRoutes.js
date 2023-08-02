const express = require('express');
const router = express.Router();
const flightController = require('../Controllers/FlightController');
const { signUp, login } = require('../Controllers/signUpController');



router.post('/signup', signUp);
router.post('/login', login);
router.post('/flights', flightController.getFlights);

module.exports = router;
