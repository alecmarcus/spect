import React, { useRef, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { className } from 'utils';
import styles from './Slider.module.scss';

const Slider = ({
    className: customClassName,
    defaultVal,
    labelText,
    max,
    min,
    property,
    reportValue,
    step,
  }) => {
  const [value, setValue] = useState(defaultVal);
  const fillRef = useRef();
  const fillWidth = useMemo(() => {
    return {
      width: `${
        Math.min(
          100,
          (
            // The width increases very slightly as the value decreases, in order
            // to make up for a slight sift towards the middle that the thumb
            // has as it nears either end. Without this, the shift would create a tiny
            // gap between the tracker fill bar and the thumb as the value nears 0.
            (100 * value / max)
            + ((1.25 / Math.max(value, 1))
            * step)
          )
        )
      }%`,
    };
  }, [max, step, value]);

  const handleChange = e => {
    const inputValue = parseInt(e.target.value);
    const cleanValue = inputValue > max ? max : inputValue < min ? min : inputValue;
    setValue(cleanValue);
    reportValue(property, value);
  };

  return (
    <div {...className(customClassName, styles.sliderOuterWrapper, (value === min) && styles.minned, (value === max) && styles.maxxed)}>
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
      <input
          className={styles.value}
          type="number"
          max={max}
          min={min}
          onChange={handleChange}
          value={value}
          placeholder={value}
        />
      <label className={styles.label} htmlFor={property}>{labelText}</label>
    </div>
  );
};

Slider.propTypes = {
  className: PropTypes.string,
  defaultVal: PropTypes.number.isRequired,
  labelText: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  property: PropTypes.string.isRequired,
  reportValue: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};

export default Slider;
