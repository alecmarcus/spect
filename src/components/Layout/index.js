import React from 'react';
import { Detail, Master } from 'components';
import styles from './layout.module.scss';

const Layout = () => {
  return (
    <main className={styles.main}>
      <Detail />
      <Master />
    </main>
  );
};

export default Layout;
