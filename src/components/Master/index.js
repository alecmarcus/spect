import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ViewContext, Slider } from 'components';
import styles from './master.module.scss';

const Master = ({ children, }) => {
  const [state, setState] = useContext(ViewContext);

  const updateContext = (property, value) => {
    const update = {};
    update[property] = { ...state[property], level: value, };
    setState(state => ({ ...state, ...update, }));
  };

  return (
    <div className={styles.master}>
      {children}
      {Object.keys(state).map((skill, i) => (
        <Slider
          key={i}
          className={styles.slider}
          defaultVal={state[skill].level}
          labelText={state[skill].displayText}
          max={5}
          min={1}
          property={skill}
          reportValue={updateContext}
          step={1}
        />
      ))}
    </div>
  );
};

Master.propTypes = {
  children: PropTypes.node,
};

export default Master;
