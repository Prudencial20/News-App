import React from 'react'
import Logo3 from '../NewsApp Props/Logo3.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


export default function SignIn() {

        //  const [username, setUserName] = useState();
        //  const [password, setPassword] = useState();

        // onChange={e => setUserName(e.target.value)}
        // onChange={e => setPassword(e.target.value)} 
        // onClick={handleSubmit}

        //  const handleSubmit = async e => {
        //    e.preventDefault();
        //    const admin = { username , password}

        //    fetch('https://backend-news-app-api.herokuapp.com/api/admin/login', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(admin)
        // })
        //   .then(data => data.json())
        // console.log('logged in')
        //  }
    return (
        <div className="admin-container">
        <div className="singin-logo">
        <img style={{ marginLeft:"400px", height: "80px" }} src={Logo3} alt=""/>
        </div>
        <section className='signin-main'>
           

            <div  className="signin-container">
            <h1>Welcome Back</h1>
            <p className="p-tag">Enter your Admin Details</p>
            <div>
                
            </div>
            <input type= "text"  placeholder="&#x1f464; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; enter your username" className="signin-input"/>
            <input type="password"   placeholder="&#x1f512; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Enter your password"className="signin-input" />
            <Link to='./dashboard'><button className="signin-botn">Sign In</button></Link>
            </div>
            </section>
            <div className="reset-password">
            <p className="forgot-password">Forgot your Password?</p>
            <p>Contact your Support Centre</p>
            </div>
            
            </div>

    )
}
