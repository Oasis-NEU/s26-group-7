
import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

<<<<<<< HEAD
const EMOJIS = ['🌸', '💌', '🕊️', '✨', '💪', '🌿', '🤍', '🌙', '🦋', '🌺', '💛', '🫶']
=======
const EMOJIS = [
  { icon: '🌸', label: 'To My Younger Self' },
  { icon: '💌', label: 'To Women Who Feel Behind' },
  { icon: '🕊️', label: 'To Women Healing' },
  { icon: '✨', label: 'To the Girl Doubting Herself' },
  { icon: '💪', label: 'To Women in Male-Dominated Spaces' },
  { icon: '🌿', label: 'To Women With PCOS' },
  { icon: '🤍', label: 'To Women Healing from Loss' },
  { icon: '🌙', label: 'To My Future Self' },
  { icon: '🦋', label: 'To Women Starting Over' },
]
>>>>>>> 7650e760d032e67a396b918c2d7a3be3f7bf90fe

export function CreateLetterPage({ setPage, user }) {
  const [letterContent, setLetterContent] = useState('')
  const [subject, setSubject] = useState('')
  const [selectedEmoji, setSelectedEmoji] = useState('')
<<<<<<< HEAD
=======
  const [isPublic, setIsPublic] = useState(true)
>>>>>>> 7650e760d032e67a396b918c2d7a3be3f7bf90fe
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!letterContent.trim()) return alert('Please write something before publishing.')
<<<<<<< HEAD
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
=======
    if (isPublic && !selectedEmoji) return alert('Please pick an emoji category for your public letter.')
    setLoading(true)
    const payload = {
      title: subject,
      textBODY: letterContent,
      tags: isPublic ? selectedEmoji : null,
      isPublic,
      anonymousYoN: true,
      userID: user.id,
    }
    console.log('Inserting letter:', payload)
    const { data, error } = await supabase.from('Letters').insert(payload).select()
    console.log('Insert result:', { data, error })
    setLoading(false)
    if (error) return alert('Failed to publish: ' + error.message)
    alert('Letter published! Thank you for sharing your story.')
    setPage('home')
>>>>>>> 7650e760d032e67a396b918c2d7a3be3f7bf90fe
  }

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #f9e4f0, #ede4f9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 0',
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

<<<<<<< HEAD
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

=======
          {/* Public / Private toggle */}
          <div style={{ marginBottom: '1.2rem', textAlign: 'left' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#a06080', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Visibility
            </label>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <button
                type="button"
                onClick={() => setIsPublic(true)}
                style={{
                  padding: '0.5rem 1.2rem', borderRadius: '20px', cursor: 'pointer', fontSize: '0.9rem', fontFamily: 'serif',
                  border: isPublic ? '2px solid #7c3f6e' : '2px solid #f0dde8',
                  background: isPublic ? '#f5e6f0' : '#fdf6f0',
                  color: isPublic ? '#7c3f6e' : '#a06080',
                  fontWeight: isPublic ? 'bold' : 'normal',
                }}
              >
                Public
              </button>
              <button
                type="button"
                onClick={() => setIsPublic(false)}
                style={{
                  padding: '0.5rem 1.2rem', borderRadius: '20px', cursor: 'pointer', fontSize: '0.9rem', fontFamily: 'serif',
                  border: !isPublic ? '2px solid #7c3f6e' : '2px solid #f0dde8',
                  background: !isPublic ? '#f5e6f0' : '#fdf6f0',
                  color: !isPublic ? '#7c3f6e' : '#a06080',
                  fontWeight: !isPublic ? 'bold' : 'normal',
                }}
              >
                Private
              </button>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#c084a0', marginTop: '0.4rem' }}>
              {isPublic ? 'Your letter will appear in the community feed under its emoji category.' : 'Only you can see this letter.'}
            </p>
          </div>

          {/* Emoji picker — only shown for public letters */}
          {isPublic && (
            <div style={{ marginBottom: '1.2rem', textAlign: 'left' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#a06080', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Pick a Category
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                {EMOJIS.map(({ icon, label }) => (
                  <button
                    key={icon}
                    type="button"
                    onClick={() => setSelectedEmoji(icon)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                      padding: '0.4rem 0.8rem', borderRadius: '20px', cursor: 'pointer',
                      fontFamily: 'serif', fontSize: '0.9rem',
                      border: selectedEmoji === icon ? '2px solid #7c3f6e' : '2px solid #f0dde8',
                      background: selectedEmoji === icon ? '#f5e6f0' : '#fdf6f0',
                      color: selectedEmoji === icon ? '#7c3f6e' : '#a06080',
                    }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>{icon}</span> {label}
                  </button>
                ))}
              </div>
            </div>
          )}

>>>>>>> 7650e760d032e67a396b918c2d7a3be3f7bf90fe
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