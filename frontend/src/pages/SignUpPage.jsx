import React from 'react'
import {useState} from 'react'
export function SignUpPage({headerText, onSubmit}) {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({username, name, password})
    }
    return (
        <div
        style = {{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }}>
        <div>
            <h1>{headerText}</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input type = "name" value = {name} onChange = {e => setName(e.target.value)} />
                </label>
                <br />
                <label>Username:
                    <input type = "username" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <br />
                <label>Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
        </div>
    )
}