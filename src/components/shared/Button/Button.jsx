import React from 'react'
import PropTypes from 'prop-types';
import './Button.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom'

const Button = ({
  variation,
  link,
  children,
}) => {

  return (
    <>
      {
        link ? (
          <Link
            to={link}
            role="button"
            className={cn('button', {
              'button--black': variation === 'black',
              'button--white': variation === 'white',
              'button--alt-black': variation === 'alt-black',
              'button--alt-white': variation === 'alt-white',
              'button--alt-long': variation === 'alt-long'
            })}
          >
            {children}
          </Link>
        ) : (
            <button
              className={cn('button', {
                'button--black': variation === 'black',
                'button--white': variation === 'white',
                'button--alt-black': variation === 'alt-black',
                'button--alt-white': variation === 'alt-white',
                'button--alt-long': variation === 'alt-long'
              })}
            >
              {children}
            </button>
          )
      }
    </>
  )
}

export default Button

Button.propTypes = {
  variation: PropTypes.oneOf(['black', 'white', 'alt-black', 'alt-white', 'alt-long']).isRequired,
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
}

Button.defaultProps = {
  variation: 'black'
}