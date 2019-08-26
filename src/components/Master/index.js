import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ViewContext, Slider } from 'components';
// import { easeInOutCubic, easeInOutQuad, easeInOutQuint } from 'utils';
import styles from './master.module.scss';

const Master = ({ children, }) => {
  const [state, setState] = useContext(ViewContext);
  // const [yEase, setYEase] = useState(state.yEase);
  // const easings = [easeInOutCubic, easeInOutQuad, easeInOutQuint];

  // const easingOpts = easings.map((easing, i) => (
  //   {
  //     displayText: easing.name,
  //     optValue: () => easing,
  //     valueText: easing.name,
  //   }
  // ));

  const updateContext = (property, value) => {
    const update = {};
    update[property] = value;
    setState(state => ({ ...state, ...update, }));
  };

  return (
    <div className={styles.master}>
      {children}
      {/* <nav>
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
      </nav> */}
      {/* <Radio
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
            }
          ]
        }
        property={'someThings'}
        reportValue={updateContext}
      /> */}
      {/* <Select
        defaultVal={() => state.yEase}
        labelText={'Y Ease'}
        options={easingOpts}
        property={'yEase'}
        reportValue={updateContext}
      /> */}
      {/* <Slider
        className={styles.slider}
        defaultVal={state.maxShift}
        labelText={'Spread Percent'}
        max={100}
        min={0}
        property={'maxShift'}
        reportValue={updateContext}
        step={1}
      /> */}
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
        max={800}
        min={1}
        property={'maxAmp'}
        reportValue={updateContext}
        step={1}
      />
      <Slider
        className={styles.slider}
        defaultVal={state.qty}
        labelText={'Quantity'}
        max={20}
        min={1}
        property={'qty'}
        reportValue={updateContext}
        step={1}
      />
      <Slider
        className={styles.slider}
        defaultVal={state.wLength}
        labelText={'Wavelength'}
        max={999}
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
