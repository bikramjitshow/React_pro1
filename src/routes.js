import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Login from './components/authform/Login'
import Register from './components/authform/Register'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
