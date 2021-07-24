import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../redux/actions/authActions'

const Login = () => {
    const [info, setInfo] = useState({
        email: "",
        password: ""
    })
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(info))
    }
    const history = useHistory()
    useEffect(() => {
        if (auth.isAuth)
            history.push('/')
    }, [auth.isAuth])
    return (
        <div class="container" onclick="onclick">
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="center" onSubmit={handleSubmit}>
          <h2>Please Sign In</h2>
          <input type="email" placeholder="email" onChange={(e) => setInfo({ ...info, email: e.target.value })}/>
          <input type="password" placeholder="password" onChange={(e) => setInfo({ ...info, password: e.target.value })} />
          <p>You don't have an accout? <span><a href="/register">Register Here</a></span></p>
          <a href="/profile">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <button type="submit" className="btn">Submit</button> 
          </a>
      
      
          <h2>&nbsp;</h2>
        </div>
      </div>
      
    )
}

export default Login