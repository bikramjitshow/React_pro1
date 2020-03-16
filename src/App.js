import React from 'react'
import './App.css'
import Header from './components/header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Routes from './routes'

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  )
}

export default App
