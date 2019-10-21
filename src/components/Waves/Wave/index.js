import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import SineWaves from 'sine-waves';
import styles from '../waves.module.scss';

const colors = [
  "#f5f7f4",
  "#ddf7d3",
  "#bff7b2",
  "#98f791",
  "#70f77f",
  "#4ff689",
  "#2ef5b2",
  "#0de7f3",
  "#007bee",
  "#0012e5",
  "#4800d9"
];

const Wave = ({ qty, yEase, maxAmp, ampEase, wLength, maxWidth, widthEase, }) => {
  const canvasRef = useRef();

  const makeWaves = (maxShift) => {
    let waves = [];
    for (let i = 0; i < qty; i++) {
      let wave = {};
      wave.strokeStyle = colors[i];
      wave.shift = -1 * Math.round((maxShift * 2 * yEase(i / (qty - 1))) - maxShift);
      wave.amplitude = maxAmp - Math.abs((Math.round((maxAmp * 2 * ampEase(i / (qty - 1))) - maxAmp)));
      wave.lineWidth = (maxWidth + 3) - Math.abs((Math.round((maxWidth * 2 * widthEase(i / (qty - 1))) - maxWidth)));
      wave.wavelength = wLength;
      waves.push(wave);
    };
    return waves;
  };

  const initWaves = (maxShift) => {
    new SineWaves({
      el: canvasRef.current,
      width: canvasRef.current.getBoundingClientRect().width,
      height: canvasRef.current.getBoundingClientRect().height,
      speed: 2,
      rotate: 90,
      ease: 'SineInOut',
      waves: makeWaves(maxShift),
    });
  };

  useEffect(() => {
    const canvasWidth = canvasRef.current.getBoundingClientRect().width;
    initWaves(canvasWidth);
  });

  return (
    <canvas ref={canvasRef} className={styles.canvas}/>
  );
};

export default Wave;

Wave.propTypes = {
  qty: PropTypes.number.isRequired,
  yEase: PropTypes.func.isRequired,
  maxAmp: PropTypes.number.isRequired,
  ampEase: PropTypes.func.isRequired,
  wLength: PropTypes.number.isRequired,
  maxWidth: PropTypes.number.isRequired,
  widthEase: PropTypes.func.isRequired,
};
