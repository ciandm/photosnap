import React from 'react'
import PropTypes from 'prop-types';

const ResponsiveImage = ({
  image,
  alt,
  classes
}) => {
  return (
    <img
      className={classes}
      src={image.mobile}
      srcSet={`${image.mobile} 300w`, `${image.tablet} 768w`, `${image.desktop} 1032w`}
      alt={alt}
    />
  )
}

export default ResponsiveImage

ResponsiveImage.propTypes = {
  image: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  classes: PropTypes.string,
}