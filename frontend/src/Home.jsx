export default function Home({ setPage }) {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center'
    }}>
      <h1>Welcome to Letters to Women</h1>

      <button onClick={() => setPage('write')}>Create a Letter</button>
      <button onClick={() => setPage('profile')} style={{ marginLeft: '1rem' }}>My Letters</button>
    </div>
  )
}

