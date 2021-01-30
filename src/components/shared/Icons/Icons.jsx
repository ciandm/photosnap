import React from 'react'
import PropTypes from 'prop-types';
import './Icons.scss';

function Icons({
  children,
  multi
}) {
  return (
    <section className={!multi ? 'icons' : 'icons icons--multi'}>
      {children}
    </section>
  )
}

export default Icons

Icons.propTypes = {
  children: PropTypes.node.isRequired,
  multi: PropTypes.bool,
}
