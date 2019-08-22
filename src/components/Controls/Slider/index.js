import React, { useEffect, useRef, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { className } from 'utils';
import styles from './Slider.module.scss';

const Slider = ({
    defaultVal,
    labelText,
    max,
    min,
    property,
    step,
  }) => {
  const [value, setValue] = useState(defaultVal);
  const fillRef = useRef();
  const fillWidth = useMemo(() => {
    return { width: `${100 * value / max}%`, };
  });

  const handleChange = e => {
    const inputValue = parseInt(e.target.value);
    const cleanValue = inputValue > max ? max : inputValue < min ? min : inputValue;
    setValue(cleanValue);
  };

  return (
    <div {...className(styles.sliderOuterWrapper, (value === min) && styles.minned, (value === max) && styles.maxxed)}>
      <input
          className={styles.value}
          type="number"
          max={max}
          min={min}
          onChange={handleChange}
          value={value}
          placeholder={value}
        />
      <div className={styles.sliderInnerWrapper}>
        <span className={styles.fill} ref={fillRef} style={fillWidth}/>
        <input type="range"
          className={styles.slider}
          id={property}
          max={max}
          min={min}
          name={property}
          onChange={handleChange}
          step={step}
          value={value}
          />
      </div>
      <label className={styles.label} htmlFor={property}>{labelText}</label>
    </div>
  );
};

Slider.propTypes = {
  defaultVal: PropTypes.number.isRequired,
  labelText: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  property: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
};

export default Slider;
