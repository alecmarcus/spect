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
      <Select
        defaultVal={'something'}
        labelText={'More Things'}
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
            },
          ]
        }
        property={'moreThings'}
      />
      <Slider
        defaultVal={4}
        labelText={'A range of things'}
        max={10}
        min={0}
        property={'aRangeOfThings'}
        step={1}
      />
    </div>
  )
}

export default Master
