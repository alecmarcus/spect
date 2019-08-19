import React from 'react'
import PropTypes from 'prop-types'
import { Detail, Master } from 'components'
import styles from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <main className={styles.main}>
      <Master />
      <Detail>
        {children}
      </Detail>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
