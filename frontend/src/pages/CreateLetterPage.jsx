import React from 'react'
export function CreateLetterPage() {
    const [letterContent, setLetterContent] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Letter published! Thank you for sharing your story with the world.')
        console.log('Letter content:', letterContent)
    }
    return (
        <div>
            <h1>Share Your Story</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Dear Reader,
                    <input type="text" value={letterContent} onChange={e => setLetterContent(e.target.value)} style={{ width: "300px", height: "200px", fontSize: "16px" }} />
                </label>
                <br />
                <button type="submit">Publish</button>
            </form>
        </div>
    )
}