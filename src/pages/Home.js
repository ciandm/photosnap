import React from 'react'
// COMPONENTS
import Nav from '../components/shared/Nav/Nav';
import HeroImage from '../components/shared/HeroImage/HeroImage';
import PhotosnapProposition from '../components/home/PhotosnapProposition/PhotosnapProposition';

// DATA
import homeData from './pageData/homeData';

function Home() {

  const {
    hero,
    propositions
  } = homeData
  return (
    <>
      <Nav />
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
    </>
  )
}

export default Home
