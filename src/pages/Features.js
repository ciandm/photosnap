import React from 'react'
// COMPONENTS
import Nav from '../components/shared/Nav/Nav';
import HeroImage from '../components/shared/HeroImage/HeroImage';
import Icons from '../components/shared/Icons/Icons';
import IconColumn from '../components/shared/Icons/IconColumn/IconColumn';

// DATA
import featuresData from './pageData/featuresData';

function Features() {

  const {
    hero,
    icons
  } = featuresData
  return (
    <>
      <Nav />
      <HeroImage
        {...hero}
      />
      <Icons multi={true}>
        {icons.map(icon => (
          <IconColumn
            key={icon.id}
            {...icon}
          />
        ))}
      </Icons>
    </>
  )
}

export default Features
