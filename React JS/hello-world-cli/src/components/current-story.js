import React, { useState } from 'react';
import Story from './story';

let allStories = [
    {
        imageSource: "https://i.ytimg.com/vi/afLeOefHKG4/maxresdefault.jpg",
        title: 'Moral Stories for Kids',
        story: "Once, there was a boy who became bored when he watched over the village sheep grazing on the hillside. To entertain himself, he sang out, “Wolf! Wolf! The wolf is chasing the sheep!”",
        moral: "Lying breaks trust — even if you’re telling the truth, no one believes a liar."
    },
    {
        imageSource: "https://i.ytimg.com/vi/2EwKdFdcXm8/maxresdefault.jpg",
        title: '1 Moral Stories for Kids',
        story: "1 Once, there was a boy who became bored when he watched over the village sheep grazing on the hillside. To entertain himself, he sang out, “Wolf! Wolf! The wolf is chasing the sheep!”",
        moral: "1 Lying breaks trust — even if you’re telling the truth, no one believes a liar."
    },
    {
        imageSource: "https://i.ytimg.com/vi/bzMyNQx2VA8/maxresdefault.jpg",
        title: '2 Moral Stories for Kids',
        story: "2 Once, there was a boy who became bored when he watched over the village sheep grazing on the hillside. To entertain himself, he sang out, “Wolf! Wolf! The wolf is chasing the sheep!”",
        moral: "2 Lying breaks trust — even if you’re telling the truth, no one believes a liar."
    }
]

function CurrentStory() {
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

    const nextStory = () => {
        let currentStoryIndexClone = currentStoryIndex;
        currentStoryIndexClone++;
      
        if (currentStoryIndexClone > 2) setCurrentStoryIndex(0);
        else setCurrentStoryIndex(currentStoryIndexClone);
    }

    return (
        <div>
            <Story
                storyTitle={allStories[currentStoryIndex].title}
                moral={allStories[currentStoryIndex].moral}
                story={allStories[currentStoryIndex].story}
                imageSource={allStories[currentStoryIndex].imageSource}
            />
            <button>Back</button>
            <button onClick={nextStory}>Next</button>
        </div>
    )
}

export default CurrentStory;