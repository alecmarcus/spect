import React from 'react';
import PropTypes from 'prop-types';
import styles from './detail.module.scss';

const Detail = ({ children, }) => {
  return (
    <section className={styles.detail}>
      {children}
    </section>
  );
};

Detail.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Detail;
