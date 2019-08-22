import React from 'react';
import { ViewProvider, Layout } from 'components';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <ViewProvider>
        <Layout />
      </ViewProvider>
    </BrowserRouter>
  );
};

export default App;
