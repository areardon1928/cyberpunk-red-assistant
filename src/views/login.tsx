
import React, { FC, useState } from 'react'

import { Helmet } from 'react-helmet'
import {pb } from '../lib/pocketbase'

import LoginBox from '../components/login-box'
import './login.css'
import { RootState } from '../lib/store'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../lib/userAuth'
import { useNavigate } from 'react-router-dom'

const Login:FC = () => {

  const [error, setError] = useState<string | undefined>();
  const user = useSelector((state: RootState) => state.user.userData)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleLogin = async (username: string, password: string) => {
    await pb.collection('users').authWithPassword(username, password).then((value) => {
      console.log('Logged in: ' + JSON.stringify(value))
      dispatch(setUser(pb.authStore.model))
      navigate("/character")
    }).catch((err) => {
      setError('Incorrect, please provide valid credentials to access data term');
    });
  }

  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Cyberpunk Character App</title>
        <meta property="og:title" content="Login - Cyberpunk Character App" />
      </Helmet>
      <div className="login-container1">
        <div className="login-container2">
          <h1 className="login-text">WELCOME, EDGERUNNER</h1>
        </div>
        <div className="login-container3">
          <LoginBox handleLogin={handleLogin} rootClassName="login-box-root-class-name"></LoginBox>
          {error &&
            <p style={{color: 'red', padding: '4px'}}>{error}</p>
          }
        </div>
        <div className="login-container4">

        </div>
      </div>
    </div>
  )
}

export default Login
