import React from 'react'
import PropTypes from 'prop-types';
import './ReadStories.scss';

function ReadStories({ children }) {
  return (
    <section className="stories">
      {children}
    </section>
  )
}

export default ReadStories

ReadStories.propTypes = {
  children: PropTypes.node.isRequired,
}