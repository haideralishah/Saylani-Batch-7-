import React from 'react';

function Story({ storyTitle, moral, story, imageSource }) {
    return (
        <div>
            <img src={imageSource} alt="story" />
            <h1>{storyTitle}</h1>
            <h2>{moral}</h2>
            <p>{story}</p>
        </div>
    )
}

export default Story;