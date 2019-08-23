import React from 'react';
// import { Route , Switch} from 'react-router-dom';
import { ViewContext, Detail, Master, Radio, Select, Slider, Wave } from 'components';
import { easeInOutQuad, easeInOutQuint } from 'utils';
import styles from './layout.module.scss';

const Layout = () => {
  return (
    <main className={styles.main}>
      <Master>
        <Radio
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
        />
        <Select
          defaultVal={'something'}
          labelText={'More Things'}
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
              }
            ]
          }
          property={'moreThings'}
        />
        <Slider
          defaultVal={4}
          labelText={'A range of things'}
          max={100}
          min={0}
          property={'aRangeOfThings'}
          step={1}
        />
      </Master>
      <Detail>
        <Wave
          qty={11}
          yEase={easeInOutQuad}
          maxAmp={500}
          ampEase={easeInOutQuad}
          wLength={900}
          maxWidth={20}
          widthEase={easeInOutQuint}
        />
      </Detail>
    </main>
  );
};

export default Layout;
