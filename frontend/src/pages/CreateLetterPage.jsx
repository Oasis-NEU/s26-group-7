
import { useState } from 'react'

export function CreateLetterPage({ onSubmit, setPage }) {
  const [letterContent, setLetterContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!letterContent.trim()) return alert('Please write something before publishing.')
    alert('Letter published! Thank you for sharing your story.')
    console.log('Letter content:', letterContent)
    if (onSubmit) onSubmit(letterContent)
    setPage('home')
  }

  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center'
    }}>
      <h1>Share Your Story</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Dear Reader,
          <br />
          <textarea
            value={letterContent}
            onChange={e => setLetterContent(e.target.value)}
            placeholder="Write your letter here..."
            style={{ width: '400px', height: '250px', fontSize: '16px', marginTop: '0.5rem', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </label>
        <br />
        <button type="submit" style={{ marginTop: '1rem', marginRight: '1rem' }}>Publish</button>
        <button type="button" onClick={() => setPage('home')}>Cancel</button>
      </form>
    </div>
  )
}