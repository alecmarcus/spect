import React from 'react';
// import { Route , Switch} from 'react-router-dom';
import { ViewContext, Detail, Master, Radio, Select, Slider, Wave } from 'components';
import { easeInOutQuad, easeInOutQuint } from 'utils';
import styles from './layout.module.scss';

const Layout = () => {
  return (
    <main className={styles.main}>
      <Master />
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
