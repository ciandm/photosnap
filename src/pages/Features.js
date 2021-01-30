import React from 'react'
// COMPONENTS
import Nav from '../components/shared/Nav/Nav';
import HeroImage from '../components/shared/HeroImage/HeroImage';

// DATA
import featuresData from './pageData/featuresData';

function Features() {

  const {
    hero
  } = featuresData
  return (
    <>
      <Nav />
      <HeroImage
        {...hero}
      />
    </>
  )
}

export default Features
