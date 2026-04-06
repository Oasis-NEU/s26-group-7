import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { LoginPage } from './pages/LoginPage'
import { SignUpPage } from './pages/SignUpPage'
import Home from './Home'
import { CreateLetterPage } from './pages/CreateLetterPage'
<<<<<<< HEAD
import { PublishSuccessPage } from './pages/PublishSuccessPage'
import { MyLetters } from './pages/MyLetters'
=======
import { MyLetters } from './pages/MyLetters'
import { CategoryPage } from './pages/CategoryPage'
>>>>>>> 7650e760d032e67a396b918c2d7a3be3f7bf90fe
import { signIn, signUp, signOut, getSession } from './lib/authServices'
import { supabase } from './lib/supabaseClient'

function App() {
  const [user, setUser] = useState(null)
  const [showLoginPage, setShowLoginPage] = useState(false)
  const [showSignUpPage, setShowSignUpPage] = useState(false)
  const [page, setPage] = useState(null)
<<<<<<< HEAD
=======
  const [selectedCategory, setSelectedCategory] = useState(null)
>>>>>>> 7650e760d032e67a396b918c2d7a3be3f7bf90fe

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
<<<<<<< HEAD
=======
  }

  if (page === 'home') {
    return <Home setPage={setPage} onSignOut={handleSignOut} user={user} setSelectedCategory={setSelectedCategory} />
  }

  if (page === 'category') {
    return <CategoryPage category={selectedCategory} setPage={setPage} />
  }

  if (page === 'write') {
    return <CreateLetterPage setPage={setPage} user={user} />
  }

  if (page === 'myletters') {
    return <MyLetters setPage={setPage} user={user} />
>>>>>>> 7650e760d032e67a396b918c2d7a3be3f7bf90fe
  }

  if (page === 'home') {
    return <Home setPage={setPage} onSignOut={handleSignOut} user={user} />
  }

  if (page === 'write') {
    return <CreateLetterPage setPage={setPage} user={user} />
  }

  if (page === 'myletters') {
    return <MyLetters setPage={setPage} user={user} />
  }

  if (page === 'publishsuccess') {
    return <PublishSuccessPage setPage={setPage} />
  }

return (
    <div className="app-shell">
      <div className="auth-actions">
<<<<<<< HEAD
        <button onClick={handleLoginClick}>Log In</button>
        <button onClick={handleSignUpClick}>Sign Up</button>
        <button>About Us</button>
=======
        <button onClick={handleLoginClick} style={{ backgroundColor: '#b39ddb', color: 'white', border: 'none', padding: '0.5rem 1.3rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.9rem' }}>Log In</button>
        <button onClick={handleSignUpClick} style={{ backgroundColor: '#b39ddb', color: 'white', border: 'none', padding: '0.5rem 1.3rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.9rem' }}>Sign Up</button>
        <button style={{ backgroundColor: '#b39ddb', color: 'white', border: 'none', padding: '0.5rem 1.3rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.9rem' }}>About Us</button>
>>>>>>> 7650e760d032e67a396b918c2d7a3be3f7bf90fe
      </div>
      <Header />
    </div>
  )
}

export default App