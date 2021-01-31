import React from 'react'
import './BetaBanner.scss';
import Button from '../Button/Button';
import { useLocation } from 'react-router-dom'

function BetaBanner() {
  return (
    <section className="beta">
      <div className="beta__content">
        <h3 className="beta__title">We're in beta. Get your invite today!</h3>
        <Button
          variation="alt-white"
          link={useLocation().pathname}
        >
          Get an invite
        </Button>
      </div>
    </section>
  )
}

export default BetaBanner
