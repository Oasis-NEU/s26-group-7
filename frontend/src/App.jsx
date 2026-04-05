
import { useState, useEffect } from 'react'
import './App.css'
import { LoginPage } from './pages/LoginPage'
import { SignUpPage } from './pages/SignUpPage'
import Home from './Home'
import { CreateLetterPage } from './pages/CreateLetterPage'
import { MyLetters } from './pages/MyLetters'
import { CategoryPage } from './pages/CategoryPage'
import { signIn, signUp, signOut, getSession } from './lib/authServices'
import unwrittenLogo from './components/UnwrittenLogo.png'
import { supabase } from './lib/supabaseClient'
import AboutUs from './pages/AboutUs'

function App() {
  const [user, setUser] = useState(null)
  const [showLoginPage, setShowLoginPage] = useState(false)
  const [showSignUpPage, setShowSignUpPage] = useState(false)
  const [page, setPage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    getSession().then(session => {
      if (session) setUser(session.user)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLoginClick = () => setShowLoginPage(true)

  const handleLoginSubmit = async ({ email, password }) => {
    await signIn(email, password)
    setShowLoginPage(false)
    setPage('home')
  }

  const handleSignUpClick = () => setShowSignUpPage(true)

  const handleSignUpSubmit = async ({ email, username, name, password }) => {
    await signUp(email, password, username, name)
    setShowSignUpPage(false)
    setPage('home')
  }

  const handleSignOut = async () => {
    await signOut()
    setPage(null)
  }

  if (showLoginPage) {
    return <LoginPage headerText="Welcome Back!" onSubmit={handleLoginSubmit} />
  }

  if (showSignUpPage) {
    return <SignUpPage headerText="Thanks for your interest in Unwritten!" onSubmit={handleSignUpSubmit} />
  }

  if (page === 'write') {
  return (
    <div className="app-shell"> 
      <CreateLetterPage setPage={setPage} user={user} />
    </div>
  )
}


  if (page === 'home') {
  return (
    <div className="app-shell">
      <Home setPage={setPage} onSignOut={handleSignOut} user={user} />
    </div>
  )
}

if (page === 'myletters') {
  return (
    <div className="app-shell">
      <MyLetters setPage={setPage} user={user} />
    </div>
  )
}

if (page === 'about') {
  return <AboutUs setPage={setPage} />
}

  return (
    <div style={{
      minHeight: '100vh', width: '100vw',
      background: 'linear-gradient(135deg, #f9e4f0, #ede4f9)',
      fontFamily: 'serif'
    }}>
      {/* NAVBAR */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.2rem 3rem', background: 'white', borderBottom: '1px solid #f0dde8'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#7c3f6e', fontStyle: 'italic' }}>Unwritten</div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={handleLoginClick} style={{ background: 'none', border: 'none', color: '#7c3f6e', fontSize: '0.95rem', cursor: 'pointer', fontFamily: 'serif' }}>Log In</button>
          <button onClick={handleSignUpClick} style={{ background: 'none', border: 'none', color: '#7c3f6e', fontSize: '0.95rem', cursor: 'pointer', fontFamily: 'serif' }}>Sign Up</button>
          <button onClick={() => setPage('about')} style={{ background: 'none', border: 'none', color: '#7c3f6e', fontSize: '0.95rem', cursor: 'pointer', fontFamily: 'serif' }}>About Us</button>
          <button style={{ background: 'none', border: 'none', color: '#7c3f6e', fontSize: '0.95rem', cursor: 'pointer', fontFamily: 'serif' }}>About Us</button>
        </div>
      </div>

      {/* HERO */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '85vh', padding: '4rem 6rem', gap: '6rem' }}>

        {/* Left - circle with logo text */}
        <div style={{
          width: '420px', height: '420px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, boxShadow: '0 8px 40px rgba(180,100,140,0.15)'
        }}>
          <img src={unwrittenLogo} alt="Unwritten Logo" style={{ width: '380px', height: 'auto' }} />
        </div>

        {/* Right - text */}
        <div style={{ maxWidth: '420px' }}>
          <p style={{ fontSize: '0.8rem', letterSpacing: '0.15em', color: '#c084a0', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Letters to Women
          </p>
          <h1 style={{ fontSize: '3rem', color: '#3d1f35', marginBottom: '1.2rem', lineHeight: '1.2', fontStyle: 'italic' }}>
            Voices Unspoken
          </h1>
          <p style={{ fontSize: '1rem', color: '#7c5070', lineHeight: '1.8', marginBottom: '2rem' }}>
            An anonymous space where women write letters that heal, inspire, and remind each other they are never alone. Every letter is a voice finally heard.
          </p>
          <button onClick={handleSignUpClick} style={{
            padding: '0.85rem 2.5rem', borderRadius: '50px',
            border: '1.5px solid #7c3f6e', background: 'transparent',
            color: '#7c3f6e', cursor: 'pointer', fontSize: '1rem', fontFamily: 'serif'
          }}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default App