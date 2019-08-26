import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { defaults } from 'data';

const ViewContext = React.createContext([{}, () => {}]);

const makeWaves = source => {
  const waves = [];
  for (let i = 0; i < source.qty; i++) {
    let wave = {};
    wave.strokeStyle = source.colors[i];
    wave.amplitude = source.maxAmp - Math.abs((Math.round((source.maxAmp * 2 * source.ampEase(i / (source.qty - 1))) - source.maxAmp)));
    wave.lineWidth = (source.maxWidth + 3) - Math.abs((Math.round((source.maxWidth * 2 * source.widthEase(i / (source.qty - 1))) - source.maxWidth)));
    wave.wavelength = source.wLength;
    waves.push(wave);
  };
  return waves;
};

const ViewProvider = ({...props}) => {
  const [state, setState] = useState({...defaults, 'waves': makeWaves(defaults),});

  const updateContext = (property, value) => {
    const update = {};
    update[property] = value;
    setState(state => ({ ...state, ...update, }));
  };

  useEffect(() => {
    updateContext('waves', makeWaves(state));
  }, [
    state.qty,
    state.yEase,
    state.maxAmp,
    state.ampEase,
    state.wLength,
    state.maxWidth,
    state.widthEase,
    state.maxShift
  ]);

  return (
    <ViewContext.Provider value={[state, setState]}>
      {props.children}
    </ViewContext.Provider>
  );
};

ViewProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ViewContext, ViewProvider };
