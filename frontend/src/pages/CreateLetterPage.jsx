
import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

const EMOJIS = ['🌸', '💌', '🕊️', '✨', '💪', '🌿', '🤍', '🌙', '🦋', '🌺', '💛', '🫶']

export function CreateLetterPage({ setPage, user }) {
  const [letterContent, setLetterContent] = useState('')
  const [subject, setSubject] = useState('')
  const [selectedEmoji, setSelectedEmoji] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!letterContent.trim()) return alert('Please write something before publishing.')
    setLoading(true)
    const { error } = await supabase.from('Letters').insert({
      title: subject,
      textBODY: letterContent,
      tags: selectedEmoji,
      isPublic: true,
      anonymousYoN: true,
      userID: user.id,
    })
    setLoading(false)
    if (error) return alert('Failed to publish: ' + error.message)
    setPage('publishsuccess')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f9e4f0, #ede4f9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'serif'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '2.5rem',
        width: '100%',
        maxWidth: '860px',
        boxShadow: '0 8px 32px rgba(180,100,140,0.12)',
        border: '1px solid #f0dde8'
      }}>
        <h1 style={{ color: '#3d1f35', marginBottom: '0.3rem', fontSize: '2rem' }}>Share Your Story</h1>
        <p style={{ color: '#a06080', marginBottom: '2rem', fontSize: '0.95rem' }}>Your letter will be shared anonymously.</p>

        <form onSubmit={handleSubmit}>

          {/* Subject */}
          <div style={{ marginBottom: '1.2rem', textAlign: 'left' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#a06080', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              placeholder="e.g. To My Younger Self, To Women Healing..."
              style={{
                width: '100%', marginTop: '0.4rem', padding: '0.75rem 1rem',
                borderRadius: '10px', border: '1.5px solid #f0dde8',
                fontSize: '0.95rem', fontFamily: 'serif', color: '#3d1f35',
                background: '#fdf6f0', outline: 'none'
              }}
            />
          </div>

          {/* Emoji picker */}
          <div style={{ marginBottom: '1.2rem', textAlign: 'left' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#a06080', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Pick an Emoji
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
              {EMOJIS.map(emoji => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => setSelectedEmoji(emoji)}
                  style={{
                    fontSize: '1.4rem', padding: '0.3rem 0.5rem',
                    borderRadius: '8px', cursor: 'pointer',
                    border: selectedEmoji === emoji ? '2px solid #c084a0' : '2px solid transparent',
                    background: selectedEmoji === emoji ? '#fce4f0' : '#fdf6f0',
                  }}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Letter body */}
          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#a06080', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Dear Reader,
            </label>
            <textarea
              value={letterContent}
              onChange={e => setLetterContent(e.target.value)}
              placeholder="Write your letter here..."
              style={{
                width: '100%', height: '220px', marginTop: '0.4rem',
                padding: '0.9rem 1rem', borderRadius: '10px',
                border: '1.5px solid #f0dde8', fontSize: '0.95rem',
                fontFamily: 'serif', color: '#3d1f35', background: '#fdf6f0',
                resize: 'vertical', outline: 'none', lineHeight: '1.7'
              }}
            />
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button type="submit" style={{
              flex: 1, padding: '0.85rem', borderRadius: '10px',
              border: 'none', background: '#7c3f6e',
              color: 'white', cursor: 'pointer', fontSize: '1rem', fontFamily: 'serif'
            }} disabled={loading}>
              {loading ? 'Publishing...' : 'Publish Letter'}
            </button>
            <button type="button" onClick={() => setPage('home')} style={{
              padding: '0.85rem 1.5rem', borderRadius: '10px',
              border: '1.5px solid #c084a0', background: 'white',
              color: '#7c3f6e', cursor: 'pointer', fontSize: '1rem', fontFamily: 'serif'
            }}>
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}