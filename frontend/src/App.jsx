
import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { LoginPage } from './pages/LoginPage'
import { SignUpPage } from './pages/SignUpPage'
import Home from './Home'
import { CreateLetterPage } from './pages/CreateLetterPage'
import { MyLetters } from './pages/MyLetters'

function App() {
  const [showLoginPage, setShowLoginPage] = useState(false)
  const [loginHeaderText, setLoginHeaderText] = useState('Login')
  const [showSignUpPage, setShowSignUpPage] = useState(false)
  const [signUpHeaderText, setSignUpHeaderText] = useState('Sign Up')
  const [page, setPage] = useState(null)
  const [letters, setLetters] = useState([])

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

  const handleSignUpClick = () => {
    setSignUpHeaderText('Thanks for your interest in Unwritten!')
    setShowSignUpPage(true)
  }

  const handleSignUpSubmit = ({ username, name, password }) => {
    alert(`Account created for ${name}`)
    console.log('Sign up form data:', { username, name, password })
    setShowSignUpPage(false)
    setPage('home')
  }

  const addLetter = (letterContent) => {
    setLetters(prev => [...prev, letterContent])
  }

  if (showLoginPage) {
    return <LoginPage headerText={loginHeaderText} onSubmit={handleLoginSubmit} />
  }

  if (showSignUpPage) {
    return <SignUpPage headerText={signUpHeaderText} onSubmit={handleSignUpSubmit} />
  }

  if (page === 'home') {
    return <Home setPage={setPage} />
  }

  if (page === 'write') {
    return <CreateLetterPage setPage={setPage} onSubmit={addLetter} />
  }

  if (page === 'myletters') {
    return <MyLetters letters={letters} setPage={setPage} />
  }

  return (
    <div className="app-shell">
      <div className="auth-actions">
        <button onClick={handleLoginClick}>Log In</button>
        <button onClick={handleSignUpClick}>Sign Up</button>
        <button>About Us</button>
      </div>
      <Header />
    </div>
  )
}

export default App
