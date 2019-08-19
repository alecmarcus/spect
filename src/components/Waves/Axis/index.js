import React, { useEffect, useCallback, useRef } from 'react'
import NoSSR from 'react-no-ssr'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import { easeInOutQuad } from 'utils'
import styles from './axis.module.scss'

let ssr = true

function useHookWithRefCallback() {
  const canvasRef = useRef(null)
  const setRef = useCallback(node => {
    if (canvasRef.current) {
      // Make sure to cleanup any events/references added to the last instance
    }
    
    if (node) {
      // Check if a node is actually passed. Otherwise node would be null.
      // You can now do what you need to, addEventListeners, measure, etc.
      canvasRef.current = node
      return canvasRef.current
    }
    
    // Save a reference to the node
    canvasRef.current = node
  }, [])
  
  return [setRef]
}

const Axis = ({ qty, maxShift, yEase, maxAmp, wLength }) => {
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

  const initWaves = (waves, node) => {
    new SineWaves({
      el: node,
      speed: 2,
      rotate: 90,
      ease: 'SineInOut',
      waves: waves,
      initialize: function (){console.log('event-ed')},
    })
  }

  const [canvasRef] = useHookWithRefCallback()

  const SineWaves = dynamic(
    () => {
      ssr = !ssr
      import('sine-waves'),
    
      const callback = useCallback(
    
      )
    },
    { ssr: false }
  )

  useEffect(() => {
    if (SineWaves) {
      console.log(canvasRef())
    }
  }, [SineWaves])

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
