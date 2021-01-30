import React from 'react'
// COMPONENTS
import Nav from '../components/shared/Nav/Nav';
import HeroImage from '../components/shared/HeroImage/HeroImage';
import ReadStories from '../components/shared/ReadStories/ReadStories';
import ReadStoryCard from '../components/shared/ReadStories/ReadStoryCard/ReadStoryCard';

// DATA
import storiesData from './pageData/storiesData';

function Stories() {

  const {
    hero,
    stories
  } = storiesData
  return (
    <>
      <Nav />
      <HeroImage
        {...hero}
      />
      <ReadStories>
        {stories.map(story => (
          <ReadStoryCard
            id={story.id}
            {...story}
          />
        ))}
      </ReadStories>
    </>
  )
}

export default Stories
