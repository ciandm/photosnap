import React from 'react'
// COMPONENTS
import PageTemplate from './PageTemplate/PageTemplate';
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
    <PageTemplate>
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
    </PageTemplate>
  )
}

export default Stories
