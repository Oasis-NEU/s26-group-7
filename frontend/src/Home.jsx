export default function Home({ setPage }) {
  return (
    <div>
      <h1>Welcome to Letters to Women</h1>
      <button onClick={() => setPage('write')}>Create a Letter</button>
      <button onClick={() => setPage('profile')}>My Letters</button>
    </div>
  )
}

