import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/auth.context'
import { Link } from 'react-router-dom'

export const LogIn = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const { logIn } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            logIn(user).then((res) => {
                localStorage.setItem('token', res.data.token)
                alert(res.data.message)
            }).catch((err) => {
                alert(JSON.parse(err.request.response).message)
            })
        } catch (error) {
            alert("Internal server error")
        }
    }

    const handleChange = (event) => {
        const name = event.target.name
        setUser({ ...user, [name]: event.target.value })
    }
    return (
        <div className="container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-container">
                    <span>
                        <label htmlFor="Email">Name</label>
                    </span>
                    <input type="email" id='email' name='email' placeholder='Enter your email' onChange={(e) => handleChange(e)} />
                </div>
                <div className="input-container">
                    <span>
                        <label htmlFor="password">Password</label>
                    </span>
                    <input type="password" id='password' name='password' placeholder='Enter your password' onChange={(e) => handleChange(e)} />
                </div>
                <button type='submit' className='btn submit-btn'>Log In</button>
            </form>
            <Link to={"/signup"}>Create New Account</Link>
        </div>
    )
}
