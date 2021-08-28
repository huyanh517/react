import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../shared/Button/Button'
import { Input } from '../../shared/Input/Input'
import './login.css'

export const LoginPage = () => {
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Login</h1>
            <div className="form-login-register">
              <form>
                <div className="form-control">
                  <Input
                    placeholder='Enter Username ...'
                    label='Username'
                  />
                </div>
                <div className="form-control">
                  <Input
                    type='password'
                    placeholder='Enter Password ...'
                    label='Password'
                  />
                </div>
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
