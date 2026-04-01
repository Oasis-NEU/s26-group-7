import React from 'react'
import { useState } from 'react'
import letter from '../assets/LetterClipart.png'
export function LoginPage({ headerText, onSubmit }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({username, password})
    }
    return (
        <div
        style = {{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }}>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <img src={letter} style={{ display: "block", width: "250px", height: "auto" }} alt="Letter Clipart" />
            <div>
                <h1 style = {{fontStyle: "italic"}}>{headerText}</h1>
                <form onSubmit={handleSubmit}>
                    <label>Username:
                        <input type = "username" value={username} onChange={e => setUsername(e.target.value)} />
                    </label>
                    <br />
                    <label>Password:
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </label>
                    <br />
                    <button type="submit" style={{ backgroundColor: "#b47af5"}}>Log In</button>
                </form>
            </div>
            <img src={letter} style={{ display: "block", width: "250px", height: "auto" }} alt="Letter Clipart" />
        </div>
        </div>
    )
}