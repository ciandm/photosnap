import React from 'react'
import './PriceCard.scss';
// COMPONENTS
import Button from '../../../shared/Button/Button';
import ROUTES from '../../../../pages/routes';

function PriceCard({
  featured,
  title,
  body,
  cost,
  plan
}) {
  return (
    <div className={`p-card ${featured ? 'p-card--featured' : ''}`}>
      <div className="p-card__details">
        <h5 className="p-card__plan">
          {title}
        </h5>
        <p className="p-card__detail">
          {body}
        </p>
      </div>
      <div className="p-card__pricing">
        <h3 className="p-card__price">
          {cost[plan]}
        </h3>
        <p className="p-card__billing">
          {plan === 'monthly' ? 'per month' : 'per year'}
        </p>
      </div>
      <Button
        variation={featured ? 'white' : 'black'}
        link={ROUTES.PRICING}
      >
        Pick plan
      </Button>
    </div>
  )
}

export default PriceCard
