import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

const WRITING_PROMPTS = [
  "What would you tell yourself five years ago?",
  "Write to the version of you that was struggling the most.",
  "What do you wish someone had told you when you were younger?",
  "Write to a woman who feels invisible right now.",
  "What has healing taught you that you want to pass on?",
  "Write to a woman starting over from scratch.",
  "What would you say to the girl who was told she was too much?",
  "Write about a moment that changed everything for you.",
]

export function MyLetters({ setPage, user }) {
  const [letters, setLetters] = useState([])
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState('public')
  const [promptIndex] = useState(() => Math.floor(Math.random() * WRITING_PROMPTS.length))

  useEffect(() => {
    async function fetchLetters() {
      const { data, error } = await supabase
        .from('Letters')
        .select('*')
        .eq('userID', user.id)
        .order('created_at', { ascending: false })
      if (error) console.error('Fetch letters error:', error)
      else setLetters(data)
      setLoading(false)
    }
    fetchLetters()
  }, [user.id])

  const publicLetters = letters.filter(l => l.isPublic)
  const privateLetters = letters.filter(l => !l.isPublic)
  const shown = tab === 'public' ? publicLetters : privateLetters

  const LetterCard = ({ letter }) => (
    <div style={{
      background: 'white', borderRadius: '16px', padding: '2rem',
      border: '1px solid #f0dde8',
      boxShadow: '0 4px 20px rgba(180,100,140,0.08)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span style={{ fontSize: '1.8rem' }}>{letter.tags || '💌'}</span>
          <h3 style={{ color: '#3d1f35', fontSize: '1.1rem', margin: 0 }}>{letter.title || 'Untitled'}</h3>
        </div>
        <span style={{
          fontSize: '0.75rem', padding: '0.2rem 0.7rem', borderRadius: '20px',
          background: letter.isPublic ? '#f0faf0' : '#fdf0f6',
          color: letter.isPublic ? '#4a9e6b' : '#c084a0',
          border: `1px solid ${letter.isPublic ? '#b8e8c8' : '#f0dde8'}`
        }}>
          {letter.isPublic ? 'Public' : 'Private'}
        </span>
      </div>
      <p style={{ color: '#7c5070', lineHeight: '1.75', fontSize: '0.95rem' }}>
        <strong>Dear Reader,</strong><br />{letter.textBODY}
      </p>
      <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#c084a0' }}>
        {new Date(letter.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </div>
    </div>
  )

  const EmptyState = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
      <div style={{
        background: 'white', borderRadius: '16px', padding: '3rem',
        textAlign: 'center', border: '1px solid #f0dde8'
      }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{tab === 'public' ? '💌' : '🔒'}</div>
        <p style={{ color: '#3d1f35', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
          {tab === 'public' ? "You haven't shared any public letters yet." : "You don't have any private letters yet."}
        </p>
        <p style={{ color: '#a06080', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          {tab === 'public'
            ? 'Share your story anonymously with the community.'
            : 'Private letters are just for you — a space to write freely.'}
        </p>
        <button onClick={() => setPage('write')} style={{
          padding: '0.75rem 2rem', borderRadius: '10px',
          border: 'none', background: '#7c3f6e',
          color: 'white', cursor: 'pointer', fontSize: '1rem', fontFamily: 'serif'
        }}>Write a Letter</button>
      </div>
      <div style={{
        background: 'linear-gradient(135deg, #f5e6f0, #ece4f8)',
        borderRadius: '16px', padding: '2rem',
        border: '1px solid #e8d5ea', textAlign: 'center'
      }}>
        <div style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>✨</div>
        <p style={{ fontSize: '0.8rem', color: '#a06080', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
          Writing Prompt
        </p>
        <p style={{ color: '#3d1f35', fontSize: '1.05rem', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '1.2rem' }}>
          "{WRITING_PROMPTS[promptIndex]}"
        </p>
        <button onClick={() => setPage('write')} style={{
          padding: '0.6rem 1.5rem', borderRadius: '20px',
          border: '1.5px solid #7c3f6e', background: 'transparent',
          color: '#7c3f6e', cursor: 'pointer', fontSize: '0.9rem', fontFamily: 'serif'
        }}>Start Writing</button>
      </div>
    </div>
  )

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(135deg, #f9e4f0, #ede4f9)',
      fontFamily: 'serif',
      padding: '3rem 2rem',
      boxSizing: 'border-box',
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.3rem' }}>
          <h1 style={{ color: '#3d1f35', fontSize: '2rem', margin: 0 }}>My Letters</h1>
          <button onClick={() => setPage('write')} style={{
            padding: '0.6rem 1.3rem', borderRadius: '20px',
            border: 'none', background: '#7c3f6e',
            color: 'white', cursor: 'pointer', fontSize: '0.9rem', fontFamily: 'serif'
          }}>+ Write a Letter</button>
        </div>
        <p style={{ color: '#a06080', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Your private corner of Unwritten.</p>

        {!loading && (
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ flex: 1, background: 'white', borderRadius: '12px', padding: '1rem 1.5rem', border: '1px solid #f0dde8', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#7c3f6e' }}>{letters.length}</div>
              <div style={{ fontSize: '0.8rem', color: '#a06080' }}>Total Letters</div>
            </div>
            <div style={{ flex: 1, background: 'white', borderRadius: '12px', padding: '1rem 1.5rem', border: '1px solid #f0dde8', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#7c3f6e' }}>{publicLetters.length}</div>
              <div style={{ fontSize: '0.8rem', color: '#a06080' }}>Shared Publicly</div>
            </div>
            <div style={{ flex: 1, background: 'white', borderRadius: '12px', padding: '1rem 1.5rem', border: '1px solid #f0dde8', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#7c3f6e' }}>{privateLetters.length}</div>
              <div style={{ fontSize: '0.8rem', color: '#a06080' }}>Private</div>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', marginBottom: '1.5rem', background: 'white', borderRadius: '12px', padding: '0.3rem', border: '1px solid #f0dde8' }}>
          <button onClick={() => setTab('public')} style={{
            flex: 1, padding: '0.6rem', borderRadius: '9px', cursor: 'pointer',
            fontFamily: 'serif', fontSize: '0.95rem', border: 'none',
            background: tab === 'public' ? '#7c3f6e' : 'transparent',
            color: tab === 'public' ? 'white' : '#a06080',
            fontWeight: tab === 'public' ? 'bold' : 'normal',
          }}>
            Public ({publicLetters.length})
          </button>
          <button onClick={() => setTab('private')} style={{
            flex: 1, padding: '0.6rem', borderRadius: '9px', cursor: 'pointer',
            fontFamily: 'serif', fontSize: '0.95rem', border: 'none',
            background: tab === 'private' ? '#7c3f6e' : 'transparent',
            color: tab === 'private' ? 'white' : '#a06080',
            fontWeight: tab === 'private' ? 'bold' : 'normal',
          }}>
            Private ({privateLetters.length})
          </button>
        </div>

        {loading ? (
          <p style={{ color: '#a06080', textAlign: 'center' }}>Loading...</p>
        ) : shown.length === 0 ? (
          <EmptyState />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {shown.map((letter) => <LetterCard key={letter.letterID} letter={letter} />)}
            <div style={{
              background: 'linear-gradient(135deg, #f5e6f0, #ece4f8)',
              borderRadius: '16px', padding: '1.8rem',
              border: '1px solid #e8d5ea', textAlign: 'center'
            }}>
              <p style={{ fontSize: '0.8rem', color: '#a06080', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>
                Need inspiration?
              </p>
              <p style={{ color: '#3d1f35', fontSize: '1rem', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '1rem' }}>
                "{WRITING_PROMPTS[promptIndex]}"
              </p>
              <button onClick={() => setPage('write')} style={{
                padding: '0.6rem 1.5rem', borderRadius: '20px',
                border: '1.5px solid #7c3f6e', background: 'transparent',
                color: '#7c3f6e', cursor: 'pointer', fontSize: '0.9rem', fontFamily: 'serif'
              }}>Write Another Letter</button>
            </div>
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
