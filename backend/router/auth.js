const express = require('express')
const router = express.Router()
const routerHandler = require('../router_handler/auth')

// data format
const expressJoi = require('@escook/express-joi')
const {reg_login_schema} = require('../schema/user')


console.log("in router")
// Register new user
router.post('/register', expressJoi(reg_login_schema), routerHandler.register)

// Login in
router.post('/login', expressJoi(reg_login_schema), routerHandler.login)

module.exports = router;