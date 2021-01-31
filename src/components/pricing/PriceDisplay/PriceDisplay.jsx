import React, { useState } from 'react'
import './PriceDisplay.scss';
import PriceCard from './PriceCard/PriceCard';

function PriceDisplay({
  pricing
}) {

  const [plan, setPlan] = useState('monthly');
  const updatePlan = () => setPlan(prevPlan => prevPlan === 'monthly' ? 'yearly' : 'monthly');

  return (
    <section className="prices">
      <div className="prices__wrapper">
        <div className="prices__toggle">
          <p className={`prices__plan ${plan === 'monthly' ? 'prices__plan--active' : ''}`}>Monthly</p>
          <button
            className={`prices__switch ${plan === 'monthly' ? 'prices__switch--monthly' : 'prices__switch--yearly'}`}
            onClick={() => updatePlan()}
          ></button>
          <p className={`prices__plan ${plan === 'yearly' ? 'prices__plan--active' : ''}`}>Yearly</p>
        </div>
        <div className="prices__container">
          {
            pricing.map(p => (
              <PriceCard
                plan={plan}
                key={p.title}
                {...p}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default PriceDisplay
