 import React from 'react'
 import { Link } from 'react-router-dom'
 import LOGO from '../NewsApp Props/LOGO.png'
 import playstore from '../NewsApp Props/playstore.png'
 
 function Header() {
     return (
         
            <nav>
                
               <div className="nav-items">
                    <div className="logo">
                       <img src={LOGO} alt=""/>
                    </div>
                   <Link to='./' className="nav-buttons">Home</Link>
                   <Link to='./politics' className="nav-buttons">Politics</Link>
                   <Link to='./business' className="nav-buttons">Business</Link>
                   <Link to='./science-tech' className="nav-buttons">Science &amp; Tech</Link>
                   <Link to='./sports' className="nav-buttons">Sports</Link>
                   <Link to='./entertainment' className="nav-buttons">Entertainment</Link>
                   <img src={playstore}  className="play" alt=""/>
                
               </div> 
            </nav> 
         
     )
 }
 
 export default Header
 