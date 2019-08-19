import React from 'react'
import NextLink from 'next/link'
import PropTypes from 'prop-types'
import { className } from 'utils'
import styles from './link.module.scss'

const Link = ({ children, className: customClassName, tag, to }) => {
  const Tag = tag;

  return (
    <NextLink href={to}>
      <Tag
        {...className(
          tag === 'a' && styles.link,
          tag === 'button' && styles.button,
          customClassName
        )}
      >
        {children}
      </Tag>
    </NextLink>
  )
}

Link.defaultProps = {
  tag: 'a'
}

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
  to: PropTypes.string.isRequired
}

export default Link
