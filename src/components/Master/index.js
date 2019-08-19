import React, { useContext } from 'react'
import { Link, ViewContext } from 'components';
import styles from './master.module.scss'

const Master = () => {
  const [state, setState] = useContext(ViewContext)

  return (
    <nav className={styles.master}>
      <ul className={styles.pages}>
        <li>
          <Link to={'/'} activeClassName={styles.active}>
            Home
          </Link>
        </li>
        <li>
          <Link to={'/field'} activeClassName={styles.active}>
            Field
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Master
