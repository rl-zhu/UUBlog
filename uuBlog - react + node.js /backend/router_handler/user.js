// const res = require("express/lib/response")
const db = require('../db/usersdb')

//  import bcryptjs
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')



exports.register = (req, res) => {
    const userinfo = req.body
    console.log(userinfo)
    // console.log(req)
    //res.send只能在同时存在一次
    // 确定数据库
    const sqlStr = 'select * from users where username = ?'
    db.query(sqlStr, [userinfo.username], (err, results) => {
        console.log('in query')
        if (err) {
            // return res.send({ message: err.message })
            // use the res.cc func
            return res.cc(err)
        }
        if (results.length > 0) {
            // return res.send({ message: 'users exists' })
            return res.cc('users exists')
        }
        // res.send('Register successfully')
        // console.log('query sql')
        // use bcript.hasgSync()
        console.log(userinfo.password)
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        console.log(userinfo.password)
        const id = Math.random() * 100
        // add  new user
        const newuser = `insert into users set ?`
        db.query(newuser, { id: id, username: userinfo.username, password: userinfo.password }, function (err, results) {
            // if (err) return res.send({status:1, message: err.message})
            if (err) return res.cc(err)
            // if(results.affectedRows !==1) return res.send({message: 'shibai'})
            if (results.affectedRows !== 1) return res.cc('registering error')
            res.send({ message: 'success register' })
        })
    })

}

// sql 

exports.login = (req, res) => {
    const userinfo = req.body
    console.log(userinfo)
    // console.log(req.query)
    const sqlStr = 'select * from users where username = ?'
    db.query(sqlStr, [userinfo.username], (err, results) => {
        if (err) {
            // return res.send({ message: err.message })
            // use the res.cc func
            return res.cc(err)
        }
        if (results.length !== 1) {
            // return res.send({ message: 'users exists' })
            return res.cc('uery result !== 1, login fails')
        }
        // compare bcrypted password with input password
        const comparePassword = bcrypt.compareSync(userinfo.password, results[0].password)
        if(!comparePassword) return res.cc('password error')

        // console.log(results[0])
        // token generate 
        // 1、hide pw and pic 
        const user = { ...results[0], password: '', user_pic: '' }
        // 2、generate token

        const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn})
        console.log(tokenStr)
        return res.send({
            status: 0,
            token: 'Bearer '+tokenStr,
            message: "login ok",
        })
        // return res.send(req)

    })



    // console.log(req) 
}