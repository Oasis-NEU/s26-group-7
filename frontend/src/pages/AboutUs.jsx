import person1 from '../assets/agrima.jpg'
import person2 from '../assets/tanvii.jpg'
import person3 from '../assets/mihira.jpg'
import person4 from '../assets/camryn.jpg'

const TEAM = [
  { name: "Agrima Jain", role: "Co-Founder", bio: "Add a description", photo: person1 },
  { name: "Tanvi Bandikallu", role: "Co-Founder", bio: "Add a description", photo: person2 },
  { name: "Mihira Chandrakar", role: "Co-Founder", bio: "Add a description", photo: person3 },
  { name: "Camryn Lang", role: "Co-Founder", bio: "Add a description", photo: person4 },
]

export default function AboutUs({ setPage }) {
  return (
    <div style={{
      minHeight: '100vh', width: '100vw',
      background: 'linear-gradient(135deg, #f9e4f0, #ede4f9)',
      fontFamily: 'serif'
    }}>

      {/* NAVBAR */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.2rem 3rem', background: 'white', borderBottom: '1px solid #f0dde8'
      }}>
        <div onClick={() => setPage(null)} style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#7c3f6e', fontStyle: 'italic', cursor: 'pointer' }}>
          Unwritten
        </div>
        <button onClick={() => setPage(null)} style={{
          background: 'none', border: '1.5px solid #c084a0', color: '#7c3f6e',
          borderRadius: '6px', padding: '0.4rem 1rem', cursor: 'pointer',
          fontFamily: 'serif', fontSize: '0.9rem'
        }}>← Back</button>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '5rem 2rem' }}>
        <h1 style={{ fontStyle: 'italic', color: '#3d1f35', fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>
          About Us
        </h1>
        <p style={{ textAlign: 'center', color: '#a06080', marginBottom: '4rem', fontSize: '1rem', lineHeight: '1.7' }}>
          We built Unwritten because every woman deserves a space to be heard.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {TEAM.map((person, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '2.5rem',
              background: 'white', borderRadius: '20px', padding: '3.5rem',
              boxShadow: '0 4px 20px rgba(180,100,140,0.1)',
              border: '1px solid #f0dde8'
            }}>
              <img src={person.photo} alt={person.name} style={{
                width: '180px', height: '180px', borderRadius: '50%',
                objectFit: 'cover', flexShrink: 0,
                border: '3px solid #f0dde8'
              }} />
              <div>
                <h2 style={{ color: '#3d1f35', fontSize: '1.4rem', marginBottom: '0.2rem' }}>{person.name}</h2>
                <p style={{ color: '#c084a0', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.8rem' }}>{person.role}</p>
                <p style={{ color: '#7c5070', lineHeight: '1.75', fontSize: '0.95rem' }}>{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}