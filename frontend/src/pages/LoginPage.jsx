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
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                <img src={letter} style={{ display: "block", width: "250px", height: "auto" }} alt="Letter Clipart" />
                <div>
                    <h1 style={{ fontStyle: "italic" }}>{headerText}</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Email:
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                        </label>
                        <br />
                        {error && <p style={{ color: 'red', fontSize: '0.85rem' }}>{error}</p>}
                        <button type="submit" style={{ backgroundColor: "#b47af5" }} disabled={loading}>
                            {loading ? 'Logging in...' : 'Log In'}
                        </button>
                    </form>
                </div>
                <img src={letter} style={{ display: "block", width: "250px", height: "auto" }} alt="Letter Clipart" />
            </div>
        </div>
    )
}