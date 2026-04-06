
const SAMPLE_LETTERS = [
  {
    title: "To My Younger Self",
    text: "Stop waiting for permission to take up space. You belong in every room you walk into.",
    icon: "🌸"
  },
  {
    title: "To Women Who Feel Behind",
    text: "There is no timeline. Your path is not delayed — it's yours. Keep going.",
    icon: "💌"
  },
  {
    title: "To Women Healing",
    text: "Rest is not something you earn. You are allowed to slow down before you break.",
    icon: "🕊️"
  },
  {
    title: "To the Girl Doubting Herself",
    text: "Your voice matters. The world needs exactly what only you can offer. Say the thing. Take the seat.",
    icon: "✨"
  },
  {
    title: "To Women in Male-Dominated Spaces",
    text: "You are not too much. You are not too loud. You are exactly what that room has been missing.",
    icon: "💪"
  },
  {
    title: "To Women With PCOS",
    text: "Your body is not broken. It is working hard in ways most people will never understand. You deserve gentleness.",
    icon: "🌿"
  },
  {
    title: "To Women Healing from Loss",
    text: "Grief is not a sign of weakness. It is the proof of how deeply you loved. Take all the time you need.",
    icon: "🤍"
  },
  {
    title: "To My Future Self",
    text: "I hope by the time you read this, you've learned to rest without guilt. You deserve softness and joy.",
    icon: "🌙"
  },
  {
    title: "To Women Starting Over",
    text: "Starting over is not failure. It is the bravest thing you can do. Your next chapter is waiting.",
    icon: "🦋"
  },
]

export default function Home({ setPage }) {
  return (
    <div style={{ fontFamily: 'serif', minHeight: '100vh', background: '#fdf6f0' }}>

      {/* NAVBAR */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.2rem 3rem', background: 'white',
        borderBottom: '1px solid #f0e0e8'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#7c3f6e' }}>Unwritten</div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={() => setPage('myletters')} style={{
            padding: '0.5rem 1.3rem', borderRadius: '6px',
            border: 'none', background: '#c084a0',
            color: 'white', cursor: 'pointer', fontSize: '0.9rem'
          }}>My Letters</button>
        </div>
      </div>

      {/* HERO */}
      <div style={{
        background: 'linear-gradient(135deg, #f9e4f0, #ede4f9)',
        padding: '6rem 3rem', textAlign: 'center'
      }}>
        <div style={{ fontSize: '0.85rem', letterSpacing: '0.15em', color: '#a06080', marginBottom: '1rem', textTransform: 'uppercase' }}>
          Letters to Women
        </div>
        <h1 style={{ fontSize: '3.5rem', color: '#3d1f35', margin: '0 0 1.2rem', fontStyle: 'italic' }}>
          Unwritten
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#7c5070', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: '1.7' }}>
          An anonymous space where women write letters that heal, inspire, and remind each other they are never alone.
        </p>
        <button onClick={() => setPage('write')} style={{
          padding: '0.85rem 2.5rem', borderRadius: '50px',
          border: 'none', background: '#7c3f6e',
          color: 'white', cursor: 'pointer', fontSize: '1rem'
        }}>
          Write a Letter
        </button>
      </div>

      {/* SAMPLE LETTERS */}
      <div style={{ padding: '4rem 3rem', background: 'white' }}>
        <h2 style={{ textAlign: 'center', color: '#3d1f35', marginBottom: '2.5rem', fontSize: '1.6rem' }}>
          From our community
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {SAMPLE_LETTERS.map((letter, i) => (
            <div key={i} style={{
              background: '#fdf6f0', borderRadius: '16px',
              padding: '2.5rem 2rem', width: '280px',
              boxShadow: '0 4px 20px rgba(180,100,140,0.1)',
              border: '1px solid #f0dde8', textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{letter.icon}</div>
              <h3 style={{ color: '#7c3f6e', marginBottom: '1rem', fontSize: '1.1rem' }}>{letter.title}</h3>
              <p style={{ color: '#7c5070', lineHeight: '1.75', fontSize: '0.95rem' }}>{letter.text}</p>
              <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: '#c084a0' }}>— Anonymous</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
