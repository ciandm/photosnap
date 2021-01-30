import React from 'react'
// COMPONENTS
import PageTemplate from './PageTemplate/PageTemplate';
import HeroImage from '../components/shared/HeroImage/HeroImage';
import PhotosnapProposition from '../components/home/PhotosnapProposition/PhotosnapProposition';
import ReadStoryCard from '../components/shared/ReadStories/ReadStoryCard/ReadStoryCard';
import ReadStories from '../components/shared/ReadStories/ReadStories';
import Icons from '../components/shared/Icons/Icons';

// DATA
import homeData from './pageData/homeData';
import IconColumn from '../components/shared/Icons/IconColumn/IconColumn';


function Home() {

  const {
    hero,
    propositions,
    stories,
    icons
  } = homeData
  return (
    <PageTemplate>
      <HeroImage
        {...hero}
      />
      {
        propositions.map(p => (
          <PhotosnapProposition
            key={p.id}
            images={p.images}
            alt={p.alt}
            flipped={p.flipped}
            title={p.title}
            body={p.body}
            button={p.button}
          />
        ))
      }
      <ReadStories>
        {
          stories.map(story => (
            <ReadStoryCard
              key={story.id}
              {...story} />
          ))
        }
      </ReadStories>
      <Icons>
        {icons.map(icon => (
          <IconColumn
            key={icon.id}
            {...icon}
          />
        ))}
      </Icons>
    </PageTemplate>
  )
}

export default Home
