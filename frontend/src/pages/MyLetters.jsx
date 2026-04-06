import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

export function MyLetters({ setPage, user }) {
  const [letters, setLetters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLetters() {
      const { data, error } = await supabase
        .from('Letters')
        .select('*')
        .eq('userID', user.id)
        .order('created_at', { ascending: false })
      if (!error) setLetters(data)
      setLoading(false)
    }
    fetchLetters()
  }, [user.id])

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f9e4f0, #ede4f9)',
      fontFamily: 'serif',
      padding: '3rem 2rem'
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1 style={{ color: '#3d1f35', marginBottom: '0.3rem', fontSize: '2rem' }}>My Letters</h1>
        <p style={{ color: '#a06080', marginBottom: '2rem', fontSize: '0.95rem' }}>Letters you've written and shared.</p>

        {loading ? (
          <p style={{ color: '#a06080', textAlign: 'center' }}>Loading...</p>
        ) : letters.length === 0 ? (
          <div style={{
            background: 'white', borderRadius: '16px', padding: '3rem',
            textAlign: 'center', border: '1px solid #f0dde8'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💌</div>
            <p style={{ color: '#a06080' }}>You haven't written any letters yet.</p>
            <button onClick={() => setPage('write')} style={{
              marginTop: '1.5rem', padding: '0.75rem 2rem',
              borderRadius: '10px', border: 'none', background: '#7c3f6e',
              color: 'white', cursor: 'pointer', fontSize: '1rem', fontFamily: 'serif'
            }}>Write Your First Letter</button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {letters.map((letter) => (
              <div key={letter.letterID} style={{
                background: 'white', borderRadius: '16px', padding: '2rem',
                border: '1px solid #f0dde8',
                boxShadow: '0 4px 20px rgba(180,100,140,0.08)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.8rem' }}>{letter.tags || '💌'}</span>
                  <h3 style={{ color: '#3d1f35', fontSize: '1.1rem' }}>{letter.title || 'Untitled'}</h3>
                </div>
                <p style={{ color: '#7c5070', lineHeight: '1.75', fontSize: '0.95rem' }}>
                  <strong>Dear Reader,</strong><br />{letter.textBODY}
                </p>
                <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#c084a0' }}>— Anonymous</div>
              </div>
            ))}
          </div>
        )}

        <button onClick={() => setPage('home')} style={{
          marginTop: '2rem', padding: '0.7rem 1.5rem',
          borderRadius: '10px', border: '1.5px solid #c084a0',
          background: 'white', color: '#7c3f6e',
          cursor: 'pointer', fontSize: '0.95rem', fontFamily: 'serif'
        }}>← Back to Home</button>
      </div>
    </div>
  )
}
