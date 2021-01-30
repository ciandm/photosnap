import React from 'react'
// COMPONENTS
import Nav from '../components/shared/Nav/Nav';
import HeroImage from '../components/shared/HeroImage/HeroImage';

// DATA
import storiesData from './pageData/storiesData';

function Stories() {

  const {
    hero
  } = storiesData
  return (
    <>
      <Nav />
      <HeroImage
        {...hero}
      />
    </>
  )
}

export default Stories
