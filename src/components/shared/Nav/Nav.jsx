import React, { useState } from 'react'
import useWindowSize from '../../../utils/useWindowSize';
// STYLES
import './Nav.scss';
// COMPONENTS
import Button from '../Button/Button';
// ASSETS
import LOGO from '../../../assets/shared/desktop/logo.svg';

function Nav() {

  // for mobile only
  const [open, setOpen] = useState(false);

  return (
    <nav className={open ? 'nav nav--active' : 'nav'}>
      <div className="nav__wrapper">
        <img src={LOGO} alt="" className="nav__logo" />
        <div className="nav__links">
          <ul className="nav__list">
            <li className="nav__item">Stories</li>
            <li className="nav__item">Features</li>
            <li className="nav__item">Pricing</li>
          </ul>
          <Button
            variation="black">
            Get an invite
            </Button>
        </div>
        {
          // menu opener for mobile
          useWindowSize() < 767 &&
          <button
            className={open ? 'nav__toggle nav__toggle--active' : 'nav__toggle'}
            onClick={() => setOpen(prevOpen => !prevOpen)}
          >
            &nbsp;
        </button>
        }
      </div>
    </nav>
  )
}

export default Nav
