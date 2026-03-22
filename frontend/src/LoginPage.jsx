import React from 'react'
import { useState } from 'react'
export function LoginPage({ headerText, onSubmit }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({username, password})
    }
    return (
        <div>
            <h1>{headerText}</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:
                    <input type = "username" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <br />
                <label>Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}