import React from 'react'

// COMPONENTS
import PageTemplate from './PageTemplate/PageTemplate';
import BetaBanner from '../components/shared/BetaBanner/BetaBanner';
import HeroImage from '../components/shared/HeroImage/HeroImage';
import PlanComparison from '../components/pricing/PlanComparison/PlanComparison';

// DATA
import pricingData from './pageData/pricingData';
import PriceDisplay from '../components/pricing/PriceDisplay/PriceDisplay';

function Pricing() {

  const {
    hero,
    pricing,
    comparison
  } = pricingData

  return (
    <PageTemplate>
      <HeroImage
        {...hero}
      />
      <PriceDisplay
        pricing={pricing}
      />
      <PlanComparison
        comparison={comparison}
      />
      <BetaBanner />
    </PageTemplate>
  )
}

export default Pricing
