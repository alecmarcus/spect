import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Slider.module.scss'

const Slider = ({
    defaultVal,
    labelText,
    max,
    min,
    property,
    step,
  }) => {
  const [value, setValue] = useState(defaultVal)

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <input type="range"
        id={property}
        max={max}
        min={min}
        name={property}
        onChange={handleChange}
        step={step}
        value={value}
      />
      <label htmlFor={property}>{labelText}</label>
    </div>
  )
};

Slider.propTypes = {
  defaultVal: PropTypes.number.isRequired,
  labelText: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  property: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
}

export default Slider;
