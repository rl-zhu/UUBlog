const db = require('../db/usersdb')

exports.getUserInfo= (req, res)=>{
    // res.send('get userinfo')
    // console.log(req.auth)
    const sql = `select id, username, nickname, email, user_pic from users where id=?`
   

    db.query (sql, req.auth.id,(err, results)=>{
        // console.log(results.length)
        if(err) return res.cc(err)
        if(results.length !== 1) return res.cc('query error')
        res.send({
            status:0,
            message: 'get user infor',
            data:results[0],

        })
    })
    
}


exports.updateUserInfo = (req, res)=>{
    res.send('updateUserInfo')
}