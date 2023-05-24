import { createContext, useState } from "react";
import axios from "axios"
export const AuthContext = createContext({
    signUp: () => { },
    logIn: () => { },
})

export const AuthProvider = ({ children }) => {
    const API = process.env.REACT_APP_BACKEND

    const signUp = (user) => {
        return axios.post(
            API + "/api/auth/signup",
            user
        )
    }

    const logIn = (user) => {
        return axios.post(
            API + "/api/auth/login",
            user
        )
    }

    const value = { signUp, logIn }
    return <AuthContext.Provider value={value} >
        {children}
    </AuthContext.Provider>
}