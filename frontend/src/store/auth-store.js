
import { makeAutoObservable } from 'mobx'
import { http, getToken, setToken, clearToken } from '@/utils'
// import { query } from 'express';
const qs = require('qs');

class AuthStore {
    token = getToken() || ''
    
    constructor() {
        makeAutoObservable(this)
    }

    register = async ({ username, password }) => {
        // console.log('token', username, password)
        const res = await http.post('/auth/register', qs.stringify({ username, password }))
        return res;

    }
    login = async ({ username, password }) => {
        // console.log('token', username, password)
        const res = await http.post('/auth/login',
            qs.stringify({ username, password }),
            // {
            //     params: {
            //         ID: 12345
            //     },
            // }
            // {username, password}
        )

        // use token to store in memory
        // console.log(res.data)
        
        this.token = res.data.token
        // console.log('token is ', res.data.token)
        // console.log(res)

        //store in loginStore
        setToken(this.token)
        return res

    }
    logOut = ()=>{
        this.token = ''
        clearToken()
    }
}

export default AuthStore