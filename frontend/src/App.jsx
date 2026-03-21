import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">MyApp</h2>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <h1>Welcome to My Website</h1>
        <p>A simple, clean home page built with React + Vite.</p>
        <button className="cta-btn">Get Started</button>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About</h2>
        <p>This is a simple about section. Add your own content here.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 MyApp. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
