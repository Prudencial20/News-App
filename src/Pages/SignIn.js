import React from 'react'
import LOGO2 from '../NewsApp Props/LOGO2.png'
export default function SignIn() {
    return (
        <div className="admin-container">
        <div className="singin-logo">
        <img src={LOGO2} alt=""/>
        <span className="span-news">NEWS</span>
        </div>
        <section className='signin-main'>
           

            <div  className="signin-container">
            <h1>Welcome Back</h1>
            <p className="p-tag">Enter your Admin Details</p>
            <div>
                
            </div>
            <input type= "text" placeholder="&#x1f464; enter your username" className="signin-input"/>
            <input type="password" placeholder="&#x1f512;  Enter your password"className="signin-input" />
            <button className="signin-btn">Sign In</button>
            </div>
            </section>
            <div className="reset-password">
            <p className="forgot-password">Forgot your Password?</p>
            <p>Reset Password</p>
            </div>
            </div>
    )
}
