import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { defaults } from 'data';

const ViewContext = React.createContext([{}, () => {}]);

const ViewProvider = ({ ...props }) => {
  const [state, setState] = useState({ ...defaults, });

  return <ViewContext.Provider value={[state, setState]}>{props.children}</ViewContext.Provider>;
};

ViewProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ViewContext, ViewProvider };
