import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <div className="login">
        <h1>Login Page</h1>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </div>
    )
  }
}

export default Login
