
const SAMPLE_LETTERS = [
  "Dear Reader, you are stronger than you know. Every hard day you've survived is proof of that.",
  "Dear younger me, stop waiting for permission to take up space. You belong in every room you walk into.",
  "Dear woman who feels behind, there is no timeline. Your path is not delayed — it's yours.",
  "Dear Reader, rest is not something you earn. You are allowed to slow down before you break.",
  "Dear girl doubting herself, your voice matters. Say the thing. Take the seat. You are ready.",
]

export default function Home({ setPage }) {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '3rem 2rem', 
      width: '100%' 
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={() => setPage('write')}>Create a Letter</button>
        <button onClick={() => setPage('myletters')}>My Letters</button>
      </div>
      <h1>Welcome to Unwritten!</h1>

      <h2 style={{ fontSize: '1.1rem', color: '#888', marginBottom: '1.5rem' }}>Letters from our community</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        {SAMPLE_LETTERS.map((letter, i) => (
          <div key={i} style={{
            background: 'linear-gradient(135deg, #fff0fa, #f3eeff)',
            border: '1px solid #e0d4f0',
            borderRadius: '16px',
            padding: '2rem',
            width: '300px',
            textAlign: 'left',
            boxShadow: '0 4px 20px rgba(160, 100, 200, 0.12)',
            fontSize: '0.95rem',
            lineHeight: '1.75',
            color: '#3d2b4f',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #c084f5, #f472b6)'
            }} />
            <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem', opacity: 0.4 }}>✉</div>
            {letter}
            <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#a084c0' }}>— Anonymous</div>
          </div>
        ))}
      </div>
    </div>
  )
}
