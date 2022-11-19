const express = require('express')
const getUser = require('./controllers/user/getDataUser')
const registerUser = require('./controllers/user/register')
const validateToken = require('./middleware/authantication')
const login = require('./controllers/login/login')
const registerCar = require('./controllers/cars/registerCar')
const getAllCars = require('./controllers/cars/getAllCars')
const getCarId = require('./controllers/cars/getCar')
const routes = express()

routes.post('/usuario', registerUser);
routes.post('/login', login)

routes.use(validateToken)

routes.get('/usuario', getUser);
routes.post('/carros', registerCar);
routes.get('/carros', getAllCars);
routes.get('/carros/:id', getCarId);

module.exports = routes