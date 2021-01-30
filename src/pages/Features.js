import React from 'react'
// COMPONENTS
import HeroImage from '../components/shared/HeroImage/HeroImage';
import Icons from '../components/shared/Icons/Icons';
import IconColumn from '../components/shared/Icons/IconColumn/IconColumn';

// DATA
import featuresData from './pageData/featuresData';
import PageTemplate from './PageTemplate/PageTemplate';

function Features() {

  const {
    hero,
    icons
  } = featuresData
  return (
    <PageTemplate>
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
    </PageTemplate>
  )
}

export default Features
