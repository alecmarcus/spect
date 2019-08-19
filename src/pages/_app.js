import React from 'react';
import App from 'next/app';
import { ViewProvider, Layout } from 'components';

class Spect extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ViewProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </ViewProvider>
    );
  }
}

export default Spect;
