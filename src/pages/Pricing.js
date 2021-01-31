import React from 'react'

// COMPONENTS
import PageTemplate from './PageTemplate/PageTemplate';
import BetaBanner from '../components/shared/BetaBanner/BetaBanner';
import HeroImage from '../components/shared/HeroImage/HeroImage';

// DATA
import pricingData from './pageData/pricingData';

function Pricing() {

  const {
    hero
  } = pricingData

  return (
    <PageTemplate>
      <HeroImage
        {...hero}
      />
      <BetaBanner />
    </PageTemplate>
  )
}

export default Pricing
