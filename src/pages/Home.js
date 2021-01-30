import React from 'react'
// COMPONENTS
import Nav from '../components/shared/Nav/Nav';
import HeroImage from '../components/shared/HeroImage/HeroImage';

// DATA
import homeData from './pageData/homeData';

function Home() {

  const {
    hero
  } = homeData
  return (
    <>
      <Nav />
      <HeroImage
        alternate={hero.alternate}
        images={hero.images}
        title={hero.title}
        intro={hero.intro}
        button={hero.button}
      />
    </>
  )
}

export default Home
