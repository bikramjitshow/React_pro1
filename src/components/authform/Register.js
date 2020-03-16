import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Register extends Component {
  render() {
    return (
      <div className="register">
        <h1>Register Page</h1>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </div>
    )
  }
}

export default Register
