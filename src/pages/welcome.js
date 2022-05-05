import Header from "./wel_header"
import Form from "./Form";
import Reg from "./reg";
import React from 'react'
import './welcome.css'
import { useState } from 'react';
import { useStore } from '../store/indexStore'
import { Outlet } from "react-router-dom";

const Welcome = () => {
    const { loginSore } = useStore()
    const loginLink = "./";
    const regLink = "./"
    const [showlog, setLog] = useState('hide')
    const [showreg, setReg] = useState('hide')


    const showLog = () => {
        setLog('show')
        console.log('show login box')
        console.log()
    }
    const showReg = () => {
        setReg('show')
        console.log('show reg box')
        console.log()
    }


    return (
        <>
            <Header
                onLog={()=>showLog()}
                onReg={()=>showReg()}
            />
            <Form  showLog = {showlog}/>
            <Reg  showLog = {showreg}/>
            
            <Outlet />
        </>

    )

}

export default Welcome