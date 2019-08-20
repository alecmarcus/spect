import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Radio.module.scss'

const Radio = ({
    defaultVal,
    labelText,
    options,
    property,
  }) => {
  const [value, setValue] = useState(defaultVal)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <span>{labelText}</span>
      {options.map(({ displayText, optValue, valueText }, i) => (
        <div key={i}>
          <input
            checked={(optValue === value) ? 'checked' : false}
            id={valueText}
            name={property}
            type="radio"
            value={optValue}
            onChange={handleChange}
          />
          <label htmlFor={valueText}>{displayText}</label>
        </div>)
      )}
    </div>
  )
};

Radio.propTypes = {
  defaultVal: PropTypes.any.isRequired,
  labelText: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    displayText: PropTypes.string.isRequired,
    optValue: PropTypes.any.isRequired,
    valueText: PropTypes.string.isRequired,
  })),
  property: PropTypes.string.isRequired,
}

export default Radio;
