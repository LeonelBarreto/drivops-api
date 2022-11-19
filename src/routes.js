const express = require('express')
const routes = express()

routes.get('/', ((req, res)=> {
    return res.send('oi!')
}))

module.exports = routes