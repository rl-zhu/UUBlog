// const res = require("express/lib/response")
const db = require('../db/usersdb')

//  import bcryptjs
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')



exports.register = (req, res) => {
    console.log("in the register")
    const userinfo = req.body
    console.log(userinfo)
    const sqlStr = 'select * from users where username = ?'
    db.query(sqlStr, [userinfo.username], (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (results.length > 0) {
            return res.cc('Users exists')
        }
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
            if (results.affectedRows !== 1) return res.cc('Registration failed: Please try again later.');
            res.send({ message: 'Registration successful! Welcome aboard.' });
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
            return res.cc(err)
        }
        if (results.length !== 1) {
            return res.cc('User not found', 5);
        }
        // compare bcrypted password with input password
        const comparePassword = bcrypt.compareSync(userinfo.password, results[0].password)
        if(!comparePassword) return res.cc('Incorrect password. Please try again.', 6);

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

    })

}