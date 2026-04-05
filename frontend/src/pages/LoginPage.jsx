import React from 'react'
import { useState } from 'react'
import letter from '../assets/LetterClipart.png'

export function LoginPage({ headerText, onSubmit }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            await onSubmit({ email, password })
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={{
            minHeight: '100vh',
            width: '100vw',
            background: 'linear-gradient(135deg, #f9e4f0, #ede4f9)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'serif'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>

                {/* Left letter image */}
                <img src={letter} style={{ width: '200px', height: 'auto', opacity: 0.9 }} alt="Letter Clipart" />

                {/* Form card */}
                <div style={{
                    background: 'white', borderRadius: '20px',
                    padding: '3rem 3.5rem', width: '420px',
                    boxShadow: '0 8px 32px rgba(180,100,140,0.12)',
                    border: '1px solid #f0dde8'
                }}>
                    <h1 style={{ fontStyle: 'italic', color: '#3d1f35', marginBottom: '1rem', fontSize: '2rem', textAlign: 'center' }}>
                        {headerText}
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1.2rem' }}>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', color: '#a06080', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                                Email
                            </label>
                            <input
                                type="email" value={email}
                                onChange={e => setEmail(e.target.value)} required
                                style={{ width: '70%', padding: '0.5rem 0.8rem', borderRadius: '10px', border: '1.5px solid #f0dde8', fontSize: '0.85rem', fontFamily: 'serif', color: '#3d1f35', background: '#fdf6f0', outline: 'none' }}
                            />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', color: '#a06080', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                                Password
                            </label>
                            <input
                                type="password" value={password}
                                onChange={e => setPassword(e.target.value)} required
                                style={{ width: '70%', padding: '0.5rem 0.8rem', borderRadius: '10px', border: '1.5px solid #f0dde8', fontSize: '0.85rem', fontFamily: 'serif', color: '#3d1f35', background: '#fdf6f0', outline: 'none' }}
                            />
                        </div>
                        {error && <p style={{ color: 'red', fontSize: '0.85rem', marginBottom: '1rem' }}>{error}</p>}
                        <div style={{ display: 'inline', justifyContent: 'center' }}>
                            <button type="submit" disabled={loading} style={{
                                width: '10vw', padding: '0.7rem', borderRadius: '50px',
                                border: 'none', background: '#7c3f6e',
                                color: 'white', cursor: 'pointer', fontSize: '0.95rem', fontFamily: 'serif',
                                display: 'flex', justifyContent: 'center'
                            }}>
                                {loading ? 'Logging in...' : 'Log In'}
                            </button>
                        </div>
                    </form>
                </div>
                {/* Right letter image */}
                <img src={letter} style={{ width: '200px', height: 'auto', opacity: 0.9 }} alt="Letter Clipart" />

            </div>
        </div>
    )
}