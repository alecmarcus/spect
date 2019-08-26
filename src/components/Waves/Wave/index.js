import React, { useContext, useEffect, useRef } from 'react';
import SineWaves from 'sine-waves';
import { ViewContext } from 'components';
import styles from '../waves.module.scss';

const Wave = () => {
  const canvasRef = useRef();
  const wavesRef = useRef(null);
  const [state] = useContext(ViewContext);
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current === true) {
      wavesRef.current = new SineWaves({
        el: canvasRef.current,
        width: canvasRef.current.getBoundingClientRect().width,
        height: canvasRef.current.getBoundingClientRect().height,
        speed: 2,
        rotate: 90,
        ease: 'SineInOut',
        waves: state.waves,
      });
      firstUpdate.current = false;
    } else {
      wavesRef.current.running = false;
      wavesRef.current.waves = state.waves;
      wavesRef.current.setupWaveFns();
      wavesRef.current.running = true;
    };
  }, [state.waves]);

  return (
    <canvas ref={canvasRef} className={styles.canvas} />
  );
};

export default Wave;
