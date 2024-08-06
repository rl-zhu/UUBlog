import React from "react"
import LoginStore from "./login-store"
import UserStore from "./users-store"

class RootStore{
    constructor(){
        this.loginStore = new LoginStore()
        this.userStore = new UserStore()
    }
}


const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = ()=> React.useContext(context)

export {useStore}