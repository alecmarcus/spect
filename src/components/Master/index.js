import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ViewContext, Slider } from 'components';
// import { easeInOutCubic, easeInOutQuad, easeInOutQuint } from 'utils';
import styles from './master.module.scss';

const Master = ({ children, }) => {
  const [state, setState] = useContext(ViewContext);

  const updateContext = (property, value) => {
    const update = {};
    update[property] = value;
    setState(state => ({ ...state, ...update, }));
  };

  return (
    <div className={styles.master}>
      {children}
      <Slider
        className={styles.slider}
        defaultVal={state.segmentLength}
        labelText={'Segment Length'}
        max={100}
        min={0.1}
        property={'segmentLength'}
        reportValue={updateContext}
        step={0.1}
      />
      <Slider
        className={styles.slider}
        defaultVal={state.maxWidth}
        labelText={'Stroke Max'}
        max={50}
        min={0.1}
        property={'maxWidth'}
        reportValue={updateContext}
        step={0.1}
      />
      <Slider
        className={styles.slider}
        defaultVal={state.maxAmp}
        labelText={'Amplitute Max'}
        max={1600}
        min={1}
        property={'maxAmp'}
        reportValue={updateContext}
        step={1}
      />
      <Slider
        className={styles.slider}
        defaultVal={state.qty}
        labelText={'Quantity'}
        max={30}
        min={1}
        property={'qty'}
        reportValue={updateContext}
        step={1}
      />
      <Slider
        className={styles.slider}
        defaultVal={state.wLength}
        labelText={'Wavelength'}
        max={1500}
        min={1}
        property={'wLength'}
        reportValue={updateContext}
        step={1}
      />
    </div>
  );
};

Master.propTypes = {
  children: PropTypes.node,
};

export default Master;
