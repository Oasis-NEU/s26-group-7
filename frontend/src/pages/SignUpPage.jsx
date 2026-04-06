import React from 'react'
import { useState } from 'react'

export function SignUpPage({ headerText, onSubmit }) {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            await onSubmit({ email, username, name, password })
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
            <div>
                <h1 style={{ fontStyle: "italic" }}>{headerText}</h1>
                <form onSubmit={handleSubmit}>
                    <label>Name:
                        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
                    </label>
                    <br />
                    <label>Username:
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
                    </label>
                    <br />
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
                        {loading ? 'Creating account...' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    )
}