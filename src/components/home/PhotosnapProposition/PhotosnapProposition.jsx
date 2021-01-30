import React from 'react'
import PropTypes from 'prop-types';
import './PhotosnapProposition.scss';

//COMPONENTS
import Button from '../../shared/Button/Button';
import ResponsiveImage from '../../shared/ResponsiveImage/ResponsiveImage';

function PhotosnapProposition({
  images,
  alt,
  flipped,
  title,
  body,
  button
}) {
  return (
    <section className="proposition">
      <div className="proposition__wrapper">
        <div className={flipped ? 'proposition__image-container proposition__image-container--flipped' : 'proposition__image-container'}>
          <ResponsiveImage
            classes="proposition__image"
            images={images}
            alt={alt}
          />
        </div>
        <div className="proposition__content">
          <h2 className="proposition__title">{title}</h2>
          <p className="proposition__body">{body}</p>
          <Button
            variation={button.variation}
            link={button.link}
          >
            {button.text}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PhotosnapProposition

PhotosnapProposition.propTypes = {
  images: PropTypes.shape({
    desktop: PropTypes.string,
    tablet: PropTypes.string,
    mobile: PropTypes.string,
  }).isRequired,
  flipped: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  button: PropTypes.shape({
    variation: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
}
