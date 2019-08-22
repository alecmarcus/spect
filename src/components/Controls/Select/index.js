/* eslint-disable jsx-a11y/no-onchange */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.scss';

const Select = ({
    defaultVal,
    labelText,
    options,
    property,
  }) => {
  const [value, setValue] = useState(defaultVal);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <label htmlFor={property}>{labelText}</label>
      <select id={property} value={value} onChange={handleChange}>
        {options.map(({ displayText, optValue, }, i) => (
          <option key={i} value={optValue}>{displayText}</option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  defaultVal: PropTypes.any.isRequired,
  labelText: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    displayText: PropTypes.string.isRequired,
    optValue: PropTypes.any.isRequired,
  })),
  property: PropTypes.string.isRequired,
};

export default Select;
