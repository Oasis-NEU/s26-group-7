import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

const CATEGORY_LABELS = {
  '🌸': 'To My Younger Self',
  '💌': 'To Women Who Feel Behind',
  '🕊️': 'To Women Healing',
  '✨': 'To the Girl Doubting Herself',
  '💪': 'To Women in Male-Dominated Spaces',
  '🌿': 'To Women With PCOS',
  '🤍': 'To Women Healing from Loss',
  '🌙': 'To My Future Self',
  '🦋': 'To Women Starting Over',
}

export function CategoryPage({ category, setPage }) {
  const [letters, setLetters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLetters() {
      const { data, error } = await supabase
        .from('Letters')
        .select('*')
        .eq('isPublic', true)
        .eq('tags', category)
        .order('created_at', { ascending: false })
      if (!error) setLetters(data)
      setLoading(false)
    }
    fetchLetters()
  }, [category])

  return (
    <div style={{ fontFamily: 'serif', minHeight: '100vh', background: '#fdf6f0' }}>

      {/* NAVBAR */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.2rem 3rem', background: 'white',
        borderBottom: '1px solid #f0e0e8'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#7c3f6e' }}>Unwritten</div>
        <button onClick={() => setPage('home')} style={{
          padding: '0.5rem 1.3rem', borderRadius: '6px',
          border: '1px solid #c084a0', background: 'white',
          color: '#7c3f6e', cursor: 'pointer', fontSize: '0.9rem'
        }}>← Back</button>
      </div>

      {/* HEADER */}
      <div style={{
        background: 'linear-gradient(135deg, #f9e4f0, #ede4f9)',
        padding: '4rem 3rem', textAlign: 'center'
      }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{category}</div>
        <h1 style={{ fontSize: '2.2rem', color: '#3d1f35', margin: '0 0 0.75rem', fontStyle: 'italic' }}>
          {CATEGORY_LABELS[category]}
        </h1>
        <p style={{ color: '#a06080', fontSize: '0.95rem' }}>
          {letters.length > 0 ? `${letters.length} letter${letters.length !== 1 ? 's' : ''} from the community` : ''}
        </p>
      </div>

      {/* LETTERS */}
      <div style={{ padding: '3rem', maxWidth: '960px', margin: '0 auto' }}>
        {loading ? (
          <p style={{ textAlign: 'center', color: '#a06080' }}>Loading letters...</p>
        ) : letters.length === 0 ? (
          <div style={{
            background: 'white', borderRadius: '16px', padding: '3rem',
            textAlign: 'center', border: '1px solid #f0dde8'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{category}</div>
            <p style={{ color: '#3d1f35', fontSize: '1.1rem', marginBottom: '0.5rem' }}>No letters in this category yet.</p>
            <p style={{ color: '#a06080', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Be the first to write one.</p>
            <button onClick={() => setPage('write')} style={{
              padding: '0.75rem 2rem', borderRadius: '10px',
              border: 'none', background: '#7c3f6e',
              color: 'white', cursor: 'pointer', fontSize: '1rem', fontFamily: 'serif'
            }}>Write a Letter</button>
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {letters.map((letter) => (
              <div key={letter.letterID} style={{
                background: 'white', borderRadius: '16px',
                padding: '2.5rem 2rem', width: '280px',
                boxShadow: '0 4px 20px rgba(180,100,140,0.1)',
                border: '1px solid #f0dde8', textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{letter.tags || '💌'}</div>
                <h3 style={{ color: '#7c3f6e', marginBottom: '1rem', fontSize: '1.1rem' }}>{letter.title || 'Untitled'}</h3>
                <p style={{ color: '#7c5070', lineHeight: '1.75', fontSize: '0.95rem' }}>{letter.textBODY}</p>
                <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: '#c084a0' }}>— Anonymous</div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}
