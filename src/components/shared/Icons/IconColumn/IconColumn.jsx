import React from 'react'
import PropTypes from 'prop-types';
import './IconColumn.scss';

function IconColumn({
  icon,
  alt,
  title,
  body
}) {
  return (
    <div className="icon-column">
      <img src={icon} alt={alt} className="icon-column__icon" />
      <h5 className="icon-column__title">{title}</h5>
      <p className="icon-column__body">{body}</p>
    </div>
  )
}

export default IconColumn

IconColumn.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

IconColumn.defaultProps = {
  icon: require('../../../../assets/features/desktop/responsive.svg'),
  title: "Lorem ipsum dolor sit amet.",
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolor, id excepturi hic cupiditate enim, quasi error consequuntur doloremque reprehenderit nihil sint placeat a amet!"
}