import React, { useContext } from 'react';
import { ViewContext } from 'components';
import styles from './detail.module.scss';

const Detail = () => {
  const [state, setState] = useContext(ViewContext);
  return <section className={styles.detail}>hi! testing: {state.ideasAndSolutions.level}</section>;
};

export default Detail;
