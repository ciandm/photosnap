import React from 'react'
import PropTypes from 'prop-types';

const ResponsiveImage = ({
  images,
  alt,
  classes
}) => {
  return (
    <img
      className={classes}
      src={images.mobile}
      srcSet={`${images.mobile} 300w, ${images.tablet} 768w, ${images.desktop} 1032w`}
      alt={alt}
    />
  )
}

export default ResponsiveImage

ResponsiveImage.propTypes = {
  images: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  classes: PropTypes.string,
}

ResponsiveImage.defaultProps = {
  images: {
    desktop: require('../../../assets/home/desktop/beautiful-stories.jpg').default,
    tablet: require('../../../assets/home/tablet/beautiful-stories.jpg').default,
    mobile: require('../../../assets/home/mobile/beautiful-stories.jpg').default,
  }
}