import React, { useContext } from 'react'
import { Link, ViewContext, Radio, Select, Slider } from 'components';
import styles from './master.module.scss'

const Master = () => {
  const [state, setState] = useContext(ViewContext)

  return (
    <div className={styles.master}>
      <nav>
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
      <Radio
        defaultVal={'anotherThing'}
        labelText={'Some Things'}
        options={
          [
            {
              displayText: 'Something',
              optValue: 'something',
              valueText: 'something',
            },
            {
              displayText: 'Another Thing',
              optValue: 'anotherThing',
              valueText: 'anotherThing',
            },
          ]
        }
        property={'someThings'}
      />
      {/* <Select />
      <Slider /> */}
    </div>
  )
}

export default Master
