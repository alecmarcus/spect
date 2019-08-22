import React from 'react';
import { Route , Switch} from 'react-router-dom';
import { Detail, Master, Axis, Field } from 'components';
import { easeInOutQuad, easeInOutQuint } from 'utils';
import styles from './layout.module.scss';

const Layout = () => {
  return (
    <main className={styles.main}>
      <Master />
      <Detail>
        <Switch>
          <Route exact path='/' render={() => (
            <Axis
              qty={20}
              maxShift={0}
              yEase={easeInOutQuad}
              maxAmp={600}
              wLength={250}
            />
          )}/>
          <Route exact path='/field' render={() => (
            <Field
              qty={11}
              yEase={easeInOutQuad}
              maxAmp={500}
              ampEase={easeInOutQuad}
              wLength={900}
              maxWidth={20}
              widthEase={easeInOutQuint}
            />
          )}/>
        </Switch>
      </Detail>
    </main>
  );
};

export default Layout;
