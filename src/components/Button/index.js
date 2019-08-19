import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { className } from 'utils'
import styles from './button.module.scss'

const Button = forwardRef(({ children, className: customClassName }, ref ) => {
  const handleClick = e => {
    e.preventDefault()
  }

  return (
    <button
      ref={ref}
      {...className(styles.button, customClassName)}
      onClick={handleClick} >
      {children}
    </button>
  )
})


Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Button
