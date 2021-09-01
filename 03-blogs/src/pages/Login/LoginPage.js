import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../shared/Button/Button'
import { Input } from '../../shared/Input/Input'
import './login.css'

export const LoginPage = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [usernameError, setUsernameError] = useState({ })
  const [passwordError, setPasswordError] = useState({ })

  

  const handleSubmitLogin = event => {
    event.preventDefault()
    formValidate()
  }

  const formValidate = () => {
    let usernameError = {}
    let passwordError = {}
    if (username.trim().length < 1) {
      usernameError.required = 'Username must be Required'     
    } else if (username.trim().length < 5) {
      usernameError.tooShort = 'Username must be longer than 5 characters '    
    }

    if (password.trim().length < 1) {
      passwordError.required = 'Password must be Required'
    
    }else if (password.trim().length < 5) {
      passwordError.tooShort = 'Password must be longer than 5 characters '
    }

    setUsernameError(usernameError)
    setPasswordError(passwordError)
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Login</h1>
            <div className="form-login-register">
              <form onSubmit={handleSubmitLogin}>
                <div className="form-control">
                  <Input
                    placeholder='Enter Username ...'
                    label='Username'
                    onChange={event => setUsername(event.target.value)}
                  />
                </div>
                {
                  
                  Object.keys(usernameError).map((key, index) => (
                    <div key={index} style={{color: 'red'}}>{usernameError[key]}</div>
                  ))

                }
                <div className="form-control">
                  <Input
                    type='password'
                    placeholder='Enter Password ...'
                    label='Password'
                    onChange={event => setPassword(event.target.value)}
                  />
                </div>
                {
                  Object.keys(passwordError).map((key, index) => (
                    <div key={index} style={{color: 'red'}}>{passwordError[key]}</div>
                  ))
                }
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button
                    type='primary'
                    size='large'
                  >
                    Submit
                  </Button>
                  <Link to='/register'>Register</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>

  )
}
