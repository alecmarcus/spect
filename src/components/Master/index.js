import React, { useContext } from 'react'
import { className } from 'utils'
import styles from './master.module.scss'
import { Link, ViewContext } from 'components';

const Master = () => {
  const [state, setState] = useContext(ViewContext)

  return (
    <nav className={styles.master}>
      <ul className={styles.pagesList}>
        <li>
          <Link to={"/"} {...className(state.view === 'home' && styles.active)}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"page2"} {...className(state.view === 'page2' && styles.active)}>
            Page 2
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Master
