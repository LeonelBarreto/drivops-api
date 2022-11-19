const express = require('express')
const getUser = require('./controllers/user/getDataUser')
const registerUser = require('./controllers/user/register')
const validateToken = require('./middleware/authantication')
const login = require('./controllers/login/login')
const routes = express()

routes.post('/usuario', registerUser);
routes.post('/login', login)

routes.use(validateToken)

routes.get('/usuario', getUser);

module.exports = routes