import React from 'react'
import './Footer.scss';

// LOGO
import { ReactComponent as Logo } from '../../../assets/shared/desktop/logo.svg';
// ICONS
import { ReactComponent as Facebook } from '../../../assets/shared/desktop/facebook.svg';
import { ReactComponent as YouTube } from '../../../assets/shared/desktop/youtube.svg';
import { ReactComponent as Twitter } from '../../../assets/shared/desktop/twitter.svg';
import { ReactComponent as Pinterest } from '../../../assets/shared/desktop/pinterest.svg';
import { ReactComponent as Instagram } from '../../../assets/shared/desktop/instagram.svg';
//COMPONENTS
import Button from '../Button/Button';
import { Link, useLocation } from 'react-router-dom';
import ROUTES from '../../../pages/routes';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__details">
          <Logo className="footer__logo" />
          <ul className="footer__icons">
            <li className="footer__icon footer__icon--facebook">
              <Facebook />
            </li>
            <li className="footer__icon footer__icon--youtube">
              <YouTube />
            </li>
            <li className="footer__icon footer__icon--twitter">
              <Twitter />
            </li>
            <li className="footer__icon footer__icon--pinterest">
              <Pinterest />
            </li>
            <li className="footer__icon footer__icon--instagram">
              <Instagram />
            </li>
          </ul>
          <ul className="footer__links">
            <li className="footer__link">
              <Link
                to={ROUTES.HOME}
              >Home
              </Link>
            </li>
            <li className="footer__link">
              <Link
                to={ROUTES.STORIES}
              >Stories
              </Link>
            </li>
            <li className="footer__link">
              <Link
                to={ROUTES.FEATURES}
              >Features
              </Link>
            </li>
            <li className="footer__link">
              <Link
                to={ROUTES.PRICING}
              >Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__extra">
          <Button
            variation="alt-white"
            link={useLocation().pathname}
          >Get an invite</Button>
          <p className="footer__copyright">
            Copyright 2019. All Rights Reserved
        </p>
        </div>
      </div>
    </footer >
  )
}

export default Footer
