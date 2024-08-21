import React from "react"
import AuthStore from "./auth-store"
import UserStore from "./users-store"

class RootStore{
    constructor(){
        this.authStore = new AuthStore()
        this.userStore = new UserStore()
    }
}


const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = ()=> React.useContext(context)

export {useStore}