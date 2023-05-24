import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/auth.context'
import "../styles/Form.css"
import { Link } from 'react-router-dom'

export const SignUp = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    const { signUp } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            signUp(user).then((res) => {
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
                        <label htmlFor="name">Name</label>
                    </span>
                    <input type="text" id='name' name='name' placeholder='Enter your name' onChange={(e) => handleChange(e)} required />
                </div>
                <div className="input-container">
                    <span>
                        <label htmlFor="email">Email</label>
                    </span>
                    <input type="email" id='email' name='email' placeholder='Enter your email' onChange={(e) => handleChange(e)} required />
                </div>
                <div className="input-container">
                    <span>
                        <label htmlFor="password">Password</label>
                    </span>
                    <input type="password" id='password' name='password' placeholder='Enter your password' onChange={(e) => handleChange(e)} required />
                </div>
                <button type='submit' className='btn submit-btn'>Sign up</button>
            </form>
            <Link to={"/login"}>Already have Account?</Link>

        </div>
    )
}
