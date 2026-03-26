import React from 'react'
export function CreateLetterPage() {
    const [letterContent, setLetterContent] = React.useState('')
    return (
        <div>
            <h1>Share Your Story</h1>
            <form>
                <label>
                    Dear Reader,
                    <input type = "letterContent" value={letterContent} onChange={e => setLetterContent(e.target.value)} />
                </label>
                <br />
                <button type="submit">Publish</button>
            </form>
        </div>
    )
}