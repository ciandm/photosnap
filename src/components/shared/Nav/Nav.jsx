import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import useWindowSize from '../../../utils/useWindowSize';
// STYLES
import './Nav.scss';
// COMPONENTS
import Button from '../Button/Button';
// ASSETS
import LOGO from '../../../assets/shared/desktop/logo.svg';
import ROUTES from '../../../pages/routes';

function Nav() {

  // for mobile only
  const [open, setOpen] = useState(false);

  return (
    <nav className={open ? 'nav nav--active' : 'nav'}>
      <div className="nav__wrapper">
        <NavLink
          to={ROUTES.HOME} exact
        >
          <img src={LOGO} alt="" className="nav__logo" />
        </NavLink>
        <div className="nav__links">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to={ROUTES.STORIES}
              >Stories</NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to={ROUTES.FEATURES}
              >Features</NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to={ROUTES.PRICING}
              >Pricing</NavLink>
            </li>
          </ul>
          <Button
            variation="black"
            link={useLocation().pathname}
          >
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
