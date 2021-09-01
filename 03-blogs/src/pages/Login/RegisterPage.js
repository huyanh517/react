import React, { useState } from 'react'
import { Input } from '../../shared/Input/Input'
import { Button } from '../../shared/Button/Button'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {

  const [username, setUsername] = useState('')
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [usernameError, setUsernameError] = useState({ })
  const [passwordError, setPasswordError] = useState({ })
  const [nicknameError, setNicknameError] = useState({ })
  const [confirmPasswordError, setConfirmPasswordError] = useState({ })


  const handleSubmitRegister = event => {
    event.preventDefault()
    formValidate()
  }

  const formValidate = () => {
    let usernameError = { }
    let passwordError = { }
    let nicknameError = { }
    let confirmPasswordError = { }

    if (username.trim().length < 1) {
      usernameError.required = 'Username must be Required'
    } else if (username.trim().length < 5) {
      usernameError.tooShort = 'Username must be longer than 5 characters '
    }

    if (password.trim().length < 1) {
      passwordError.required = 'Password must be Required'

    } else if (password.trim().length < 5) {
      passwordError.tooShort = 'Password must be longer than 5 characters '
    }

    if (nickname.trim().length < 1) {
      nicknameError.required = 'Nickname must be Required'
    } else if (nickname.trim().length < 5) {
      nicknameError.tooShort = 'Nickname must be longer than 5 characters '
    }

    if (confirmPassword.trim().length < 1) {
      confirmPasswordError.required = 'Nickname must be Required'
    } else if (confirmPassword.trim() !== password.trim()) {
      confirmPasswordError.match = 'Must match '
    }

    setUsernameError(usernameError)
    setPasswordError(passwordError)
    setNicknameError(nicknameError)
    setConfirmPasswordError(confirmPasswordError)
  }


  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Sign Up</h1>
            <div className="form-login-register">
              <form onSubmit={handleSubmitRegister}>
                <div className="form-control">
                  <Input
                    placeholder='Enter Nickname ...'
                    label='Nickname'
                    onChange={event => setNickname(event.target.value)}
                  />
                </div>

                {
                  Object.keys(nicknameError).map((key, index) => (
                    <div style={{ color: 'red' }} key={index}>{nicknameError[key]}</div>
                  ))
                }

                <div className="form-control">
                  <Input
                    placeholder='Enter Username ...'
                    label='Username'
                    onChange={event => setUsername(event.target.value)}
                  />
                </div>

                {
                  Object.keys(usernameError).map((key, index) => (
                    <div style={{ color: 'red' }} key={index}>{usernameError[key]}</div>
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
                    <div style={{ color: 'red' }} key={index}>{passwordError[key]}</div>
                  ))
                }

                <div className="form-control">
                  <Input
                    type='password'
                    placeholder='Confirm Password ...'
                    label='Confirm Password'
                    onChange={event => setConfirmPassword(event.target.value)}
                  />
                </div>

                {
                  Object.keys(confirmPasswordError).map((key, index) => (
                    <div style={{ color: 'red' }} key={index}>{confirmPasswordError[key]}</div>
                  ))
                }

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button
                    type='primary'
                    size='large'
                  >
                    Submit
                  </Button>

                  <Link to='/login'>Login</Link>

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
