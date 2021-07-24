import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
    const [list, setList]=useState([])
    useEffect(()=>{
        axios.get('https://api.unsplash.com/photos/?client_id=pD-JjQjxBITjyCvLkwVkHJQtdU0VWfvu758EkbifqyE')
           .then( res =>{
               console.log(res)
               setList(res.data)
           })
           .catch(err=>{
               console.log(err)
           })
    })
    return (
        <div>
            <h1>Home</h1>
            <div className="App-header">
                <Link className="header-link" to="/login">Login</Link>
                      </div>
            <div className="image-list">
            
            {list.map(el => 
            <div  key ={el.id} >
                <div className="container">
                <img src={el.urls.small} alt="pic" className="img"/>
                </div>
               
                </div>)}
            </div>
        </div>
    )
}

export default Home
