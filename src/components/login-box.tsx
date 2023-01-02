import React, { FC, useState } from 'react'

import './login-box.css'

interface LoginBoxProps {
  rootClassName: any,
  handleLogin: Function
}

const LoginBox:FC<LoginBoxProps> = (props) => {

  const [username, setUsername] = useState<String>()
  const [password, setPassword] = useState<String>()

  return (
    <div className={`login-box-container ${props.rootClassName} `}>
      <div className="login-box-container1">
        <div className="login-box-container2">
          <span className="login-box-text">USERNAME</span>
          <input
            type="text"
            placeholder="username"
            id="username_input"
            className="login-box-textinput input"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login-box-container3">
          <span className="login-box-text1">PASSWORD</span>
          <input
            type="password"
            placeholder="password"
            id="password_input"
            className="login-box-textinput1 input"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-box-container4">
          <button className="login-box-button button" onClick={() => props.handleLogin(username, password)}>[ LOGIN ]</button>
        </div>
      </div>
    </div>
  )
}

LoginBox.defaultProps = {
  rootClassName: '',
}


export default LoginBox
