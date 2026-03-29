import React from 'react'
import { useState } from 'react'
import './App.css'
import {Header} from './Header'
import {LoginPage} from './LoginPage'
import {SignUpPage} from './SignUpPage'
import Home from './Home'


function App() {
  const [showLoginPage, setShowLoginPage] = useState(false)
  const [loginHeaderText, setLoginHeaderText] = useState('Login')
  const [showSignUpPage, setShowSignUpPage] = useState(false)
  const [signUpHeaderText, setSignUpHeaderText] = useState('Sign Up')
  const [page, setPage] = useState(null)
 

  const handleLoginClick = () => {
    setLoginHeaderText('Welcome Back!')
    setShowLoginPage(true)
  }

  const handleLoginSubmit = ({ username, password }) => {
    alert(`Logged in as ${username}`)
    console.log('Login form data:', { username, password })
    setShowLoginPage(false)
    setPage('home')
  }

  if (showLoginPage) {
    return <LoginPage headerText={loginHeaderText} onSubmit={handleLoginSubmit} />
  }

  const handleSignUpClick = () => {
    setSignUpHeaderText('Thanks for your interest in "Letters to Her"!')
    setShowSignUpPage(true)
  }

  const handleSignUpSubmit = ({ username, name, password }) => {
    alert(`Account created for ${name}`)
    console.log('Sign up form data:', { username, name, password })
    setShowSignUpPage(false)
    setPage('home')
  }

  if (showSignUpPage) {
    return <SignUpPage headerText={signUpHeaderText} onSubmit={handleSignUpSubmit} />
  }

  if (page === 'home') {
    return <Home setPage={setPage} />
  }

  return (
    <div className="app-shell">
      <div className="auth-actions">
        <button onClick={handleLoginClick}>Log In</button>
        <button onClick={handleSignUpClick}>Sign Up</button>
      </div>
      <Header />
      {page === 'home' && <Home setPage={setPage} />}
    </div>
  )
}

export default App
