
const SAMPLE_LETTERS = [
  "Dear Reader, you are stronger than you know. Every hard day you've survived is proof of that.",
  "Dear younger me, stop waiting for permission to take up space. You belong in every room you walk into.",
  "Dear woman who feels behind, there is no timeline. Your path is not delayed — it's yours.",
  "Dear Reader, rest is not something you earn. You are allowed to slow down before you break.",
  "Dear girl doubting herself, your voice matters. Say the thing. Take the seat. You are ready.",
]

export default function Home({ setPage }) {
  return (
    <div style={{ textAlign: 'center', padding: '3rem 2rem', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={() => setPage('write')}>Create a Letter</button>
        <button onClick={() => setPage('myletters')}>My Letters</button>
      </div>
      <h1>Welcome to Letters to Women</h1>

      <h2 style={{ fontSize: '1.1rem', color: '#888', marginBottom: '1.5rem' }}>Letters from our community</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
        {SAMPLE_LETTERS.map((letter, i) => (
          <div key={i} style={{
            background: 'white', border: '1px solid #e0d4f0',
            borderRadius: '12px', padding: '1.2rem 1.5rem',
            maxWidth: '260px', textAlign: 'left',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)', fontSize: '0.9rem', lineHeight: '1.6'
          }}>
            {letter}
          </div>
        ))}
      </div>
    </div>
  )
}

