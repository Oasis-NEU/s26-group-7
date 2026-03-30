
export function MyLetters({ letters, setPage }) {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      width: '500px'
    }}>
      <h1>My Letters</h1>
      {letters.length === 0 ? (
        <p>You haven't written any letters yet.</p>
      ) : (
        letters.map((letter, index) => (
          <div key={index} style={{
            border: '1px solid #ccc', borderRadius: '8px',
            padding: '1rem', marginBottom: '1rem', textAlign: 'left'
          }}>
            <p><strong>Dear Reader,</strong></p>
            <p>{letter}</p>
            <p style={{ color: '#888', fontSize: '0.85rem' }}>— Anonymous</p>
          </div>
        ))
      )}
      <button onClick={() => setPage('home')}>Back to Home</button>
    </div>
  )
}