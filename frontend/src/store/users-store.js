import { makeAutoObservable } from 'mobx'
import {http} from '@/utils'

class UserStore{
    userInfo = {}
    constructor(){
        makeAutoObservable(this)
    }
    getUserInfo = async()=>{
        const res = await http.get('/my/userinfo')
        this.userInfo = res.data.data
    }

}

export default UserStore