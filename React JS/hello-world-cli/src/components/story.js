import React from 'react';

function Story({ storyTitle, moral, story }) {
    return (
        <div>
            <h1>{storyTitle}</h1>
            <h2>{moral}</h2>
            <p>{story}</p>
        </div>
    )
}

export default Story;