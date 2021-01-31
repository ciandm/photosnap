import React from 'react'
import PropTypes from 'prop-types';
import './ReadStoryCard.scss';
// COMPONENTS
import ResponsiveImage from '../../ResponsiveImage/ResponsiveImage';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';

function ReadStoryCard({
  images,
  date,
  title,
  credit,
  button
}) {
  return (
    <div className="story">
      <Link to={button.link}>
        <div className="story__image-container">
          <ResponsiveImage
            classes="story__image"
            images={images}
            alt={images.info.alt}
          />
        </div>
        <div className="story__details">
          {
            date &&
            <span className="story__date">{date}</span>
          }
          <div className="story__description">
            <h5 className="story__title">{title}</h5>
            <p className="story__credit">by {credit}</p>
          </div>
          <Button
            variation={button.variation}
          >{button.text}
          </Button>
        </div>
      </Link>
    </div>
  )
}

export default ReadStoryCard

ReadStoryCard.propTypes = {
  images: PropTypes.shape({
    desktop: PropTypes.string,
    tablet: PropTypes.string,
    mobile: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  credit: PropTypes.string.isRequired,
  button: PropTypes.shape({
    variation: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
}