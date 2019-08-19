import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import SineWaves from 'sine-waves'
import { easeInOutQuad } from 'utils'
import styles from '../waves.module.scss'

const Axis = ({ qty, maxShift, yEase, maxAmp, wLength }) => {
  const canvasRef = useRef()

  const makeWaves = () => {
    let waves = []
    for (let i = 0; i < qty; i++) {
      let wave = {};
      wave.strokeStyle = '#6D71F0';
      wave.lineWidth = 1
      wave.shift = (maxShift * easeInOutQuad((i + 1) / qty)) - (maxShift / 2)
      wave.amplitude = maxAmp * easeInOutQuad((i + 1) / qty)
      wave.wavelength = wLength
      waves.push(wave)
    };
    return waves;
  }

  const initWaves = () => {
    new SineWaves({
      el: canvasRef.current,
      speed: 2,
      rotate: 90,
      ease: 'SineInOut',
      waves: makeWaves(),
    })
  }

  useEffect(() => {
    initWaves()
  })

  return (
    <canvas ref={canvasRef} className={styles.canvas}/>
  )
}

export default Axis

Axis.propTypes = {
  qty: PropTypes.number,
  maxShift: PropTypes.number,
  yEase: PropTypes.func,
  maxAmp: PropTypes.number,
  wLength: PropTypes.number
}
