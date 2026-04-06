import { useState, useEffect } from 'react'

export function PublishSuccessPage({ setPage }) {
  const [phase, setPhase] = useState('loading') // 'loading' | 'success'
  const [activeDot, setActiveDot] = useState(0)

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setActiveDot(prev => (prev + 1) % 3)
    }, 500)

    const timer = setTimeout(() => {
      clearInterval(dotInterval)
      setPhase('success')
    }, 3000)

    return () => {
      clearInterval(dotInterval)
      clearTimeout(timer)
    }
  }, [])

  const letters = ['✉', '✉', '✉']

  if (phase === 'loading') {
    return (
      <div style={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(135deg, #f9e4f0, #ede4f9)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'serif',
      }}>
        <p style={{ color: '#a06080', fontSize: '1rem', marginBottom: '2rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Sending your letter...
        </p>
        <div style={{ display: 'flex', gap: '1.2rem' }}>
          {letters.map((l, i) => (
            <span key={i} style={{
              fontSize: '2.2rem',
              opacity: activeDot === i ? 1 : 0.2,
              transform: activeDot === i ? 'translateY(-8px)' : 'translateY(0)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
              display: 'inline-block',
            }}>
              {l}
            </span>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(135deg, #f9e4f0, #ede4f9)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'serif',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <div style={{
        background: 'white',
        borderRadius: '24px',
        padding: '3rem 3.5rem',
        maxWidth: '480px',
        width: '100%',
        boxShadow: '0 8px 40px rgba(180,100,140,0.15)',
        border: '1px solid #f0dde8',
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1.2rem' }}>💌</div>
        <h1 style={{ color: '#3d1f35', fontSize: '1.8rem', marginBottom: '0.8rem', lineHeight: 1.3 }}>
          Thank you.
        </h1>
        <p style={{ color: '#7c3f6e', fontSize: '1.1rem', marginBottom: '0.5rem', fontStyle: 'italic' }}>
          Your story is finally heard.
        </p>
        <p style={{ color: '#a06080', fontSize: '0.9rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Your letter has been shared anonymously with the Unwritten community. Someone out there needed to read exactly what you wrote.
        </p>
        <button
          onClick={() => setPage('home')}
          style={{
            padding: '0.85rem 2.5rem',
            borderRadius: '50px',
            border: 'none',
            background: '#7c3f6e',
            color: 'white',
            cursor: 'pointer',
            fontSize: '1rem',
            fontFamily: 'serif',
            boxShadow: '0 4px 16px rgba(124,63,110,0.25)',
          }}
        >
          ← Back to Unwritten
        </button>
      </div>
    </div>
  )
}
