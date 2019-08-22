import React, { useEffect, useRef, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
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
    setValue(e.target.value);
  };

  return (
    <div >
      <div className={styles.sliderWrapper}>
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
      <label htmlFor={property}>{labelText}</label>
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
