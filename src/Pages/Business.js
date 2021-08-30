 import React from 'react'
 import { useEffect, useState } from 'react'
 import axios from 'axios';
 import { Link } from 'react-router-dom';
 import News from '../Components/News'
 import Header from '../Components/Header'
 
 export default function Business() {
    const d = new Date();
    const [ business, setBusiness ] = useState([]);

  useEffect(() => {
        axios.get('https://backend-news-app-api.herokuapp.com/api/stories/category/business')
        .then((res)  => {
            console.log(res.data.data)
            setBusiness(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
  }, [])
        


    
     return (
         <div>
                <Header /> 

                <div className="label">
                  <img  style={{width: "20px"}} src={process.env.PUBLIC_URL  + '/Calender.png'}  alt="..."/>
                  <p>{d.toLocaleTimeString()}</p>
                  <p>{d.toDateString()}</p>
                  <p className="breaking-news">Breaking News</p>
                  <p>Indonesian says located black box recorders from crashed plane.</p>
                  <p>We'll deploy more resources to other sectors in 2022 -Okowa</p>
                  <Link to='./signin' className="nav-signin">Admin Sign In</Link>
                  <i style={{ marginTop: "-15px"}} class="fas fa-search"></i>
              </div> 





             {
                 business.map((news) => (

                     <News  key={news.id} news={news} />

                 )) 
             }
         
     
            
            </div>
            
         
         
     )
 }
 