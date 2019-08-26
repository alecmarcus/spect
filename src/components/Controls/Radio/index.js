import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { className } from 'utils';
import styles from './Radio.module.scss';

const Radio = ({
    defaultVal,
    labelText,
    options,
    property,
    reportValue,
  }) => {
  const [value, setValue] = useState(defaultVal);

  const handleChange = e => {
    setValue(e.target.value);
    reportValue(property, value);
  };

  return (
    <div>
      <span className={styles.groupLabel}>{labelText}</span>
      {options.map(({ displayText, optValue, valueText, }, i) => (
        <div key={i} {...className(styles.optionWrapper,  (optValue === value) && styles.selected)}>
          <input
            checked={optValue === value}
            className={styles.dot}
            id={valueText}
            name={property}
            type="radio"
            value={optValue}
            onChange={handleChange}
          />
          <label className={styles.optionLabel} htmlFor={valueText}>{displayText}</label>
        </div>)
      )}
    </div>
  );
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
  reportValue: PropTypes.func.isRequired,
};

export default Radio;
