import React from 'react'

const Textarea = ({ updateText }) => {

    return (
        <textarea placeholder='Enter some Markdown text to preview.' onChange={(e) => updateText(e.target.value)}></textarea>
    )
}

export default Textarea
