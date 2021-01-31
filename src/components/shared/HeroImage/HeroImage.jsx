import React from 'react'
import PropTypes from 'prop-types';
import './HeroImage.scss';
// COMPONENTS 
import Button from '../Button/Button';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

function HeroImage({
  alternate,
  images,
  featured,
  title,
  credit,
  intro,
  button
}) {
  return (
    // alternate has full width background image
    <section className={alternate ? 'hero hero--alternate' : 'hero'}>
      <div className="hero__image-container">
        <ResponsiveImage
          classes="hero__image"
          images={images}
          alt={images.info.alt}
        />
      </div>
      <div className="hero__content">
        <div className="hero__container">
          {
            featured ? (
              <span className="hero__featured">
                Last month's featured story
              </span>
            ) : null
          }
          <h1 className="hero__title">{title}</h1>
          {
            credit ? (
              <div className="hero__credit">
                <p className="hero__date">{credit.date}</p>
                <span className="hero__author">by {credit.photographer}</span>
              </div>
            ) : null
          }
          <p className="hero__intro">{intro}</p>
          {
            button ? (
              <Button
                variation={button.variation}
                link={button.link}
              >
                {button.text}
              </Button>
            ) : null
          }
        </div>
      </div>
    </section>
  )
}

export default HeroImage

HeroImage.propTypes = {
  alternate: PropTypes.bool.isRequired,
  images: PropTypes.shape({
    desktop: PropTypes.string,
    tablet: PropTypes.string,
    mobile: PropTypes.string,
    info: PropTypes.object,
  }),
  featured: PropTypes.string,
  title: PropTypes.string.isRequired,
  credit: PropTypes.shape({
    date: PropTypes.string,
    photographer: PropTypes.string.isRequired,
  }),
  intro: PropTypes.string.isRequired,
  button: PropTypes.shape({
    variation: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
}

HeroImage.defaultProps = {
  title: "This is a title",
  intro: "God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. You know what? It is beets. I've crashed into a beet truck.",
}